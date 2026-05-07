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
    const uploadType = data.get('uploadType') as string; // 'post' or 'gallery'
    const imageFile = data.get('image') as File;

    if (!imageFile) throw new Error("Image asset is required.");

    // 1. UPLOAD IMAGE TO SANITY CLOUD (Works for both types)
    const imageAsset = await writeClient.assets.upload('image', imageFile);

    // 2. LOGIC BRANCHING
    if (uploadType === 'gallery') {
      const doc = {
        _type: 'gallery',
        title: data.get('title') as string,
        category: data.get('category') as string, // 'food' or 'face'
        image: {
          _type: 'image',
          asset: { _type: "reference", _ref: imageAsset._id },
        },
      };
      const result = await writeClient.create(doc);
      return NextResponse.json({ success: true, result });
    } 
    
    else {
      // SEO POST LOGIC
      const title = data.get('title') as string;
      const bodyText = data.get('body') as string;
      const includeBacklink = data.get('includeBacklink') === 'true';

      const bodyBlocks: any[] = bodyText.split('\n').filter(p => p.trim() !== "").map((para, i) => ({
        _key: `block-${i}`,
        _type: 'block',
        children: [{ _key: `span-${i}`, _type: 'span', text: para.trim() }],
      }));

      if (includeBacklink) {
        bodyBlocks.push({
          _key: 'backlink-block',
          _type: 'block',
          children: [
            { _key: 'bl-1', _type: 'span', text: 'Exquisitely engineered by ' },
            { _key: 'bl-2', _type: 'span', marks: ['link'], text: 'TyWebStudio.com' },
          ],
          markDefs: [{ _key: 'link', _type: 'link', href: 'https://www.tywebstudio.com' }]
        });
      }

      const doc = {
        _type: 'post',
        title,
        slug: { _type: 'slug', current: data.get('slug') as string },
        description: data.get('description') as string,
        mainImage: {
          _type: 'image',
          asset: { _type: "reference", _ref: imageAsset._id },
        },
        body: bodyBlocks,
      };

      const result = await writeClient.create(doc);
      return NextResponse.json({ success: true, result });
    }

  } catch (error: any) {
    console.error("Cloud Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}