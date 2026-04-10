import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
     disallow: [
        '/_next/',       // Blocks those .js chunks from the report
        '/api/',         // Blocks your Resend/Deployment routes
        '/admin/',       // Blocks your private dashboard
        '/studio/',      // Blocks your Sanity editor
        '/*.json$',      // Blocks metadata files
      ], 
    },
    sitemap: 'https://www.jusfishyandbeyond.com/sitemap.xml',
  }
}