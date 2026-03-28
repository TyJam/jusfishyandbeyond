import { NextResponse } from 'next/server';
import { createClient } from 'next-sanity';

const writeClient = createClient({
  projectId: "6jxcs135",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token: process.env.SANITY_WRITE_TOKEN, 
});

export async function POST(req: Request) {
  try {
    const data = await req.formData();
    
    const title = data.get('title') as string;
    const slug = data.get('slug') as string;
    const description = data.get('description') as string;
    const bodyText = data.get('body') as string;
    const imageFile = data.get('image') as File;
    const includeBacklink = data.get('includeBacklink') === 'true';

    // 1. UPLOAD IMAGE TO SANITY CLOUD
    const imageAsset = await writeClient.assets.upload('image', imageFile);

    // 2. CONSTRUCT PORTABLE TEXT BLOCKS (For the 'body' field)
    const bodyBlocks: any[] = bodyText
      .split('\n')
      .filter(p => p.trim() !== "")
      .map(para => ({
        _type: 'block',
        children: [{ _type: 'span', text: para.trim() }],
      }));

    // 3. CONSTRUCT RAW HTML (For the 'content' field in your schema)
    let rawContent = bodyText;
    const backlinkHtml = `\n\n<p>Exquisitely engineered by <a href="https://www.tywebstudio.com" target="_blank" rel="noopener">TyWebStudio</a></p>`;

    if (includeBacklink) {
      // Add to 'body' array
      bodyBlocks.push({
        _type: 'block',
        children: [
          { _type: 'span', text: 'Exquisitely engineered by ' },
          { _type: 'span', marks: ['link'], text: 'TyWebStudio.com' },
        ],
        markDefs: [{ _key: 'link', _type: 'link', href: 'https://www.tywebstudio.com' }]
      });
      // Add to 'content' text field
      rawContent += backlinkHtml;
    }

    // 4. CREATE THE DOCUMENT MATCHING YOUR SCHEMA
    const doc = {
      _type: 'post',
      title,
      slug: { _type: 'slug', current: slug },
      description,
      mainImage: {
        _type: 'image',
        asset: { _type: "reference", _ref: imageAsset._id },
      },
      body: bodyBlocks,   // Matches your 'array of blocks' field
      content: rawContent // Matches your 'text' field
    };

    const result = await writeClient.create(doc);
    return NextResponse.json({ success: true, result });

  } catch (error: any) {
    console.error("Cloud Deployment Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}