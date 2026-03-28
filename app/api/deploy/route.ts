import { NextResponse } from 'next/server';
import { createClient } from 'next-sanity';

const writeClient = createClient({
  projectId: "6jxcs135",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token: process.env.SANITY_WRITE_TOKEN, // SERVER CAN SEE THIS
});

export async function POST(req: Request) {
  try {
    const doc = await req.json();
    const result = await writeClient.create(doc);
    return NextResponse.json({ success: true, result });
  } catch (error) {
    console.error("Sanity Error:", error);
    return NextResponse.json({ error: "Write Permission Denied" }, { status: 500 });
  }
}