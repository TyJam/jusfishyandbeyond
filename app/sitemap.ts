import { MetadataRoute } from 'next'
export const dynamic = 'force-static'; // <--- ADD THIS LINE


import { blogPosts } from '@/lib/blogData'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.jusfishyandbeyond.com/'

 const posts = await client.fetch(`*[_type == "post"]{ "slug": slug.current }`);
    const blogUrls = posts.map((post: any) => ({
    url: `https://jusfishy.com/stories/${post.slug}`,
    lastModified: new Date(),
  }));

  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/menu`, lastModified: new Date() },
    { url: `${baseUrl}/gallery`, lastModified: new Date() },
      { url: `${baseUrl}/catering`, lastModified: new Date() },
      { url: `${baseUrl}/about`, lastModified: new Date() },
    { url: `${baseUrl}/bar`, lastModified: new Date() },
      ...blogUrls
  ]
}

