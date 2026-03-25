import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api', '/admin'], // Protects your backend logic and studio
    },
    sitemap: 'https://www.jusfishyandbeyond.com/sitemap.xml',
  }
}