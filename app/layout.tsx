import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import SidebarHeader from "@/components/SidebarHeader";

const inter = Inter({ subsets: ["latin"] });

// --- ADVANCED SEO METADATA ---
export const metadata: Metadata = {
  title: {
    default: "Jus Fishy & Beyond | Modern Seafood Restaurant & Bar Brooklyn",
    template: "%s | Jus Fishy & Beyond Seafood"
  },
  description: "Experience modern seafood classics and authentic Brooklyn soul at Jus Fishy & Beyond in Flatbush. From signature BBQ salmon to steamed snapper, we offer a bespoke dining experience. Order online or visit our seafood bar.",
  keywords: ["Modern Seafood Brooklyn", "Best Seafood Flatbush", "Caribbean Seafood NYC", "BBQ Salmon Brooklyn", "Seafood Catering Brooklyn", "Dine-in Seafood Flatbush"],
  metadataBase: new URL("https://www.jusfishyandbeyond.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Jus Fishy & Beyond | Modern Seafood & Brooklyn Soul",
    description: "Brooklyn's premier destination for fresh, made-to-order modern seafood classics.",
    url: "https://www.jusfishyandbeyond.com",
    siteName: "Jus Fishy & Beyond",
    images: [
      {
        url: "/jus-fishy-seafood-restaurant-flatbush-brooklyn.webp", // Use the .webp version we discussed!
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
    description: "The best made-to-order seafood bar in Flatbush, Brooklyn.",
    images: ["/jus-fishy-seafood-restaurant-flatbush-brooklyn.webp"],
  },
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
 // ADD THIS ICONS BLOCK:
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
    other: [
      {
        rel: 'android-chrome-192x192',
        url: '/android-chrome-192x192.png',
      },
      {
        rel: 'android-chrome-512x512',
        url: '/android-chrome-512x512.png',
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body 
        className={`${inter.className} flex min-h-screen bg-[#fdfcf8] selection:bg-[#A8B475]/30`} 
        suppressHydrationWarning
      >
        
        <SidebarHeader />
        
        <div className="flex-1 relative flex flex-col min-h-screen overflow-x-hidden">
           
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
           
           <main className="w-full flex-grow pb-24 md:pb-32 pt-20 md:pt-10">
              {children}
           </main>
          
          {/* FLOATING WALK-IN BAR & WATERMARK */}
          <div className="fixed bottom-0 left-0 md:left-20 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-stone-100 px-6 md:px-10 py-5 flex justify-between items-center shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)]">
            
            <div className="flex items-center gap-4">
              <div className="hidden lg:block">
                <p className="text-[10px] font-black tracking-[0.2em] text-[#1B4D3E] uppercase">Visit Us in Brooklyn</p>
                <p className="text-xs font-serif italic text-stone-900">1059 Flatbush Ave, Brooklyn, NY 11226</p>
              </div>
              <div className="lg:hidden">
                <p className="text-[10px] font-black tracking-widest text-[#1B4D3E]">1059 FLATBUSH AVE</p>
              </div>
            </div>

            <div className="absolute left-1/2 -translate-x-1/2 hidden xl:block">
              <Link href="https://tywebstudio.com" target="_blank" className="group">
                <p className="text-[8px] font-black tracking-[0.5em] text-[#1B4D3E]/60 group-hover:text-[#1B4D3E] transition-all uppercase">
                  MADE BY TYWEBSTUDIO.COM
                </p>
              </Link>
            </div>

            <div className="flex items-center gap-4 md:gap-8">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] font-bold tracking-widest text-stone-600 uppercase">Open Until 10PM</span>
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