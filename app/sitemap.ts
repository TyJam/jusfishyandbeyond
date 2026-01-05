import { MetadataRoute } from 'next'
import { blogPosts } from '@/lib/blogData'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://jusfishy.com'

  const posts = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
  }))

  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/menu`, lastModified: new Date() },
    { url: `${baseUrl}/gallery`, lastModified: new Date() },
      { url: `${baseUrl}/catering`, lastModified: new Date() },
      { url: `${baseUrl}/about`, lastModified: new Date() },
      { url: `${baseUrl}/bar`, lastModified: new Date() },
      
   // ...posts, // Google will find every blog post here!
  ]
}