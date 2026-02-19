import { MetadataRoute } from 'next'
import { client } from '@/lib/sanity'

export const dynamic = 'force-static'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.jusfishyandbeyond.com'

  // Fetch slugs from Sanity
  const posts = await client.fetch(`*[_type == "post"]{ "slug": slug.current }`)
  
  const blogUrls = posts.map((post: any) => ({
    url: `${baseUrl}/stories/${post.slug}`,
    lastModified: new Date(),
  }))

  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/menu`, lastModified: new Date() },
    { url: `${baseUrl}/gallery`, lastModified: new Date() },
    { url: `${baseUrl}/catering`, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },
    { url: `${baseUrl}/contact`, lastModified: new Date() },
    ...blogUrls,
  ]
}