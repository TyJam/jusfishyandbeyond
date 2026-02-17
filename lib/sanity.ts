// lib/sanity.ts
import { createClient } from "next-sanity";

const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // Use Environment Variables for safety
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false, // Set to false for the most up-to-date SEO content
};

// 1. FOR FETCHING POSTS (Google/SEO Client)
// This is for reading data from Sanity
export const client = createClient(config);

// 2. FOR PUSHING POSTS (Your Admin Dashboard Client)
// This is for writing data to Sanity
export const writeClient = createClient({
  ...config,
  token: process.env.SANITY_WRITE_TOKEN, // NEVER put the actual token in the code
});