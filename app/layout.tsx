import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import SidebarHeader from "@/components/SidebarHeader";

const inter = Inter({ subsets: ["latin"] });

// 1. MASTER VIEWPORT CONFIG (For Mobile PWA feel)
export const viewport: Viewport = {
  themeColor: "#1B4D3E",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

// 2. OUT-OF-THIS-WORLD SEO METADATA
export const metadata: Metadata = {
  metadataBase: new URL("https://www.jusfishyandbeyond.com"),
  title: {
    default: "Jus Fishy & Beyond | Modern Seafood Restaurant & Bar Brooklyn",
    template: "%s | Jus Fishy & Beyond"
  },
  description: "Experience the best made-to-order modern seafood in Brooklyn. From signature BBQ salmon to steamed snapper, Jus Fishy & Beyond on Flatbush Ave delivers authentic Caribbean soul with elite performance.",
  keywords: ["Modern Seafood Brooklyn", "Best BBQ Salmon NYC", "Steamed Snapper Flatbush", "Caribbean Catering Brooklyn", "Seafood Bar Brooklyn", "Jus Fishy Menu"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Jus Fishy & Beyond | Modern Seafood & Brooklyn Soul",
    description: "Brooklyn's premier destination for fresh, made-to-order seafood classics.",
    url: "https://www.jusfishyandbeyond.com",
    siteName: "Jus Fishy & Beyond",
    images: [
      {
        url: "/jus-fishy-seafood-restaurant-flatbush-brooklyn.webp",
        width: 1200,
        height: 630,
        alt: "Jus Fishy & Beyond Storefront on Flatbush Ave, Brooklyn",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jus Fishy & Beyond | Modern Seafood Brooklyn",
    description: "The top-rated made-to-order seafood bar in Flatbush.",
    images: ["/jus-fishy-seafood-restaurant-flatbush-brooklyn.webp"],
  },
  // 3. FIXED FAVICON & MANIFEST ARCHITECTURE
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' },
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#1B4D3E' },
    ]
  },
  manifest: '/site.webmanifest',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  
  // 4. MASTER JSON-LD (The Secret SEO Engine for Google Maps)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Jus Fishy & Beyond",
    "image": "https://www.jusfishyandbeyond.com/jus-fishy-seafood-restaurant-flatbush-brooklyn.webp",
    "@id": "https://www.jusfishyandbeyond.com",
    "url": "https://www.jusfishyandbeyond.com",
    "telephone": "+1-347-442-1172",
    "priceRange": "$$",
    "menu": "https://www.jusfishyandbeyond.com/menu",
    "servesCuisine": "Caribbean, Seafood",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1059 Flatbush Ave",
      "addressLocality": "Brooklyn",
      "addressRegion": "NY",
      "postalCode": "11226",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 40.6482,
      "longitude": -73.9571
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "11:00",
        "closes": "22:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "11:00",
        "closes": "21:00"
      }
    ],
    "sameAs": [
      "https://www.instagram.com/jusfishyandbeyond"
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body 
        className={`${inter.className} flex min-h-screen bg-[#fdfcf8] selection:bg-[#A8B475]/30`} 
        suppressHydrationWarning
      >
        
        <SidebarHeader />
        
        <div className="flex-1 relative flex flex-col min-h-screen overflow-x-hidden">
           
           {/* DESKTOP ORDER BUTTON */}
           <div className="hidden md:block absolute top-10 right-10 z-40">
             <Link
                href="https://order.online/business/jus-fishy-and-beyond-351168" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#1B4D3E] text-white px-8 py-3 rounded-none text-[10px] font-black tracking-widest uppercase hover:bg-black transition-all shadow-xl inline-block"
              >
                Order Online
              </Link>
           </div>
           
           {/* MAIN CONTENT AREA */}
           <main className="w-full flex-grow pb-24 md:pb-32 pt-20 md:pt-10">
              {children}
           </main>
          
          {/* MASTER FLOATING BAR */}
          <div className="fixed bottom-0 left-0 md:left-20 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-stone-100 px-6 md:px-10 py-5 flex justify-between items-center shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)]">
            
            <div className="flex items-center gap-4">
              <div className="hidden lg:block">
                <p className="text-[10px] font-black tracking-[0.2em] text-[#1B4D3E] uppercase font-sans">Visit Us in Brooklyn</p>
                <p className="text-xs font-serif italic text-stone-900">1059 Flatbush Ave, Brooklyn, NY 11226</p>
              </div>
              <div className="lg:hidden text-left">
                <p className="text-[10px] font-black tracking-widest text-[#1B4D3E] font-sans">1059 FLATBUSH AVE</p>
                <p className="text-[9px] font-serif italic text-stone-500">Brooklyn, NY</p>
              </div>
            </div>

            {/* AGENCY WATERMARK: CENTERED & BOLD */}
            <div className="absolute left-1/2 -translate-x-1/2 hidden xl:block">
              <Link href="https://tywebstudio.com" target="_blank" rel="noopener" className="group">
                <p className="text-[8px] font-black tracking-[0.5em] text-[#1B4D3E]/60 group-hover:text-[#1B4D3E] transition-all uppercase font-sans">
                  MADE BY TYWEBSTUDIO.COM
                </p>
              </Link>
            </div>

            <div className="flex items-center gap-4 md:gap-8">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] font-bold tracking-widest text-stone-600 uppercase font-sans">Open Until 10PM</span>
              </div>
              
              <a 
                href="https://www.google.com/maps/dir/?api=1&destination=1059+Flatbush+Ave+Brooklyn+NY+11226" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white px-6 py-2.5 text-[10px] font-black tracking-widest uppercase hover:bg-[#1B4D3E] transition-all rounded-none shadow-md"
              >
                Directions
              </a>
            </div>
          </div>

        </div>
      </body>
    </html>
  );
}