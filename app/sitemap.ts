import { MetadataRoute } from 'next'
import { client } from '@/lib/sanity'

export const dynamic = 'force-static'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // 1. LOCK THE BASE URL TO HTTPS (This fixes the redirect error)
  const baseUrl = 'https://www.jusfishyandbeyond.com'

  // 2. FETCH YOUR DYNAMIC STORIES
  const posts = await client.fetch(`*[_type == "post"]{ "slug": slug.current }`)
  
  const blogUrls = posts.map((post: any) => ({
    url: `${baseUrl}/stories/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  // 3. DEFINE THE CORE PAGES
  const corePages = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'daily' as const, priority: 1 },
    { url: `${baseUrl}/menu`, lastModified: new Date(), changeFrequency: 'daily' as const, priority: 0.9 },
    { url: `${baseUrl}/gallery`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/catering`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.5 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.5 },
    { url: `${baseUrl}/bar`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.5 },
  ]

  return [...corePages, ...blogUrls]
}