import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Jus Fishy & Beyond Seafood',
    short_name: 'Jus Fishy',
    description: 'Modern seafood classics and authentic Brooklyn soul.',
    start_url: '/',
    display: 'standalone',
    background_color: '#fdfcf8', // Your cream background
    theme_color: '#1B4D3E',      // Your signature Jus Green
    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}