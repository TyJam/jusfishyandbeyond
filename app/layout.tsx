import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SidebarHeader from "@/components/SidebarHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jus Fishy & Beyond | Modern Seafood",
  description: "Bespoke seafood dinning experience",
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="flex min-h-screen bg-[#fdfcf8] selection:bg-[#A8B475]/30"
      suppressHydrationWarning
      >
        <SidebarHeader />
        
        {/* MAIN CONTAINER */}
        <div className="flex-1 relative">
           {/* TOP RIGHT ORDER BUTTON */}
           <div className="absolute top-8 right-8 z-40">
              <button className="bg-[#1B4D3E] text-white px-6 py-2 rounded-md text-[10px] font-bold tracking-widest uppercase hover:bg-opacity-90 transition-all">
                Order Online
              </button>
           </div>
           
           <main className="w-full  pb-40">
              {children}
          </main>
          
         { /* FLOATING WALK-IN BAR */}
<div className="fixed bottom-0 left-20 right-0 z-50 bg-white border-t border-stone-100 px-10 py-4 flex justify-between items-center shadow-[0_-10px_30px_-15px_rgba(0,0,0,0.05)]">
  
  {/* THE ADDRESS (Drives Dine-In) */}
  <div className="flex items-center gap-4">
    <div className="hidden md:block">
      <p className="text-[10px] font-black tracking-[0.2em] text-[#1B4D3E] uppercase">Visit Us in Brooklyn</p>
      <p className="text-sm font-serif italic text-stone-800">1059 Flatbush Ave, Brooklyn, NY 11226</p>
    </div>
    {/* MOBILE VIEW ADDRESS */}
    <div className="md:hidden">
      <p className="text-[9px] font-black tracking-widest text-[#1B4D3E]">1059 FLATBUSH AVE</p>
    </div>
  </div>

  {/* THE STATUS & ACTION */}
  <div className="flex items-center gap-8">
    <div className="flex items-center gap-2">
      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
      <span className="text-[10px] font-bold tracking-widest text-stone-500 uppercase">Dine-In Open Until 10PM</span>
    </div>
    
    {/* GOOGLE MAPS BUTTON */}
    <a 
      href="https://www.google.com/maps/dir/?api=1&destination=1059+Flatbush+Ave+Brooklyn+NY+11226" 
      target="_blank"
      className="bg-jusBlack text-white px-6 py-2 text-[10px] font-black tracking-widest uppercase hover:bg-[#1B4D3E] transition-all"
    >
      Open Map
    </a>
  </div>
</div>

        </div>
      </body>
    </html>
  );
}