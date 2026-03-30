"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Instagram, MapPin } from "lucide-react";
import LogoImage from "../public/jus-fishy-seafood-restaurant-brooklyn-flatbush.jpg"; 

const navLinks = [
  { name: "MENU", href: "/menu" },
  { name: "ABOUT", href: "/about" },
  { name: "CONTACT", href: "/contact" },
  { name: "CATERING", href: "/catering" },
  { name: "GALLERY", href: "/gallery" },
  { name: "BAR", href: "/bar" }
];

export default function SidebarHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* --- MOBILE HEADER (Top Bar) --- */}
      <header className="md:hidden fixed top-0 left-0 w-full h-20 bg-white border-b border-stone-100 z-[100] px-6 flex justify-between items-center shadow-sm">
        {/* LOGO LEFT */}
        <Link href="/" onClick={() => setIsOpen(false)} className="w-10 h-10 rounded-full bg-[#1B4D3E] flex items-center justify-center overflow-hidden">
          <Image 
            src={LogoImage}
            alt="Jus Fishy Logo" 
            width={40} 
            height={40} 
            className="object-cover"
          />
        </Link>

        {/* ORDER BUTTON MIDDLE */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <Link
            href="https://order.online/business/jus-fishy-and-beyond-351168" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#1B4D3E] text-white px-4 py-2 rounded-md text-[9px] font-black tracking-widest uppercase shadow-sm whitespace-nowrap active:scale-95 transition-transform inline-block"
          >
            Order Online
          </Link>
        </div>

        {/* 2-LINE MENU TOGGLE (Right) */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col gap-1.5 p-2 z-[110]"
          aria-label="Open Navigation Menu"
        >
          <motion.div 
            animate={isOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
            className="w-6 h-[1.5px] bg-[#1B4D3E]" 
          />
          <motion.div 
            animate={isOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
            className="w-6 h-[1.5px] bg-[#1B4D3E]" 
          />
        </button>
      </header>

      {/* --- MOBILE FULL-SCREEN OVERLAY --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-[90] flex flex-col md:hidden"
          >
            {/* Nav Links */}
            <nav className="flex-1 flex flex-col items-center justify-center gap-8 pt-20">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-3xl font-serif italic tracking-tighter ${pathname === link.href ? "text-[#A8B475]" : "text-[#1B4D3E]"}`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* MOBILE MENU FOOTER (With requested Icons) */}
            <div className="p-12 border-t border-stone-50 bg-[#fdfcf8] flex flex-col items-center gap-8">
               
               {/* LOCATION & INSTAGRAM ICONS (The Fix) */}
               <div className="flex gap-12 items-center">
                  <a 
                    href="https://www.google.com/maps/dir/?api=1&destination=1059+Flatbush+Ave+Brooklyn+NY+11226" 
                    target="_blank" 
                    rel="noopener"
                    className="text-[#1B4D3E]"
                  >
                    <MapPin size={24} />
                  </a>
                  <a 
                    href="https://www.instagram.com/jusfishy_and_beyond/" 
                    target="_blank" 
                    rel="noopener"
                    className="text-[#1B4D3E]"
                  >
                    <Instagram size={24} />
                  </a>
               </div>
               
               <Link href="https://tywebstudio.com" target="_blank" className="group flex flex-col items-center gap-1">
                  <span className="text-[7px] font-black tracking-[0.4em] text-stone-300">
                    DIGITAL ARCHITECTURE BY
                  </span>
                  <span className="text-[10px] font-black tracking-[0.2em] text-[#1B4D3E] border-b border-[#A8B475]">
                    TYWEBSTUDIO.COM
                  </span>
               </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- DESKTOP SIDEBAR (Fixed Left) --- */}
      <header className="hidden md:flex w-20 h-screen sticky top-0 flex-col items-center justify-between py-12 border-r border-stone-100 bg-white z-50">
        <div className="flex flex-col items-center gap-4">
          <Link href="/" className="group">
            <div className="w-12 h-12 rounded-full bg-[#1B4D3E] flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform shadow-md">
              <Image 
                src="/jus-fishy-seafood-restaurant-brooklyn-flatbush.jpg" 
                alt="Jus Fishy"
                width={50}
                height={50}
                className="object-cover"
              />
            </div>
          </Link>
        </div>

        <nav className="flex flex-col gap-12 flex-1 justify-center">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className="relative group flex items-center justify-center"
              >
                <span 
                  className={`text-[10px] tracking-[0.3em] font-bold transition-colors uppercase 
                  ${isActive ? "text-[#1B4D3E]" : "text-stone-300 group-hover:text-jusBlack"}`}
                  style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                >
                  {link.name}
                </span>

                {isActive && (
                  <motion.div
                    layoutId="sidebar-pill"
                    className="absolute inset-x-[-12px] inset-y-[-15px] border-[1.5px] border-[#1B4D3E] rounded-full"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex flex-col items-center gap-10">
          <Link href="https://tywebstudio.com" target="_blank" className="group">
             <span 
               className="text-[7px] font-black tracking-[0.4em] text-stone-300 group-hover:text-[#A8B475] transition-colors uppercase"
               style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
             >
               MADE BY TYWEBSTUDIO.COM
             </span>
          </Link>

          <a 
            href="https://www.google.com/maps/dir/?api=1&destination=1059+Flatbush+Ave+Brooklyn+NY+11226" 
            target="_blank"
            rel="noopener"
            className="p-2 rounded-full border border-stone-50 hover:bg-[#1B4D3E] hover:text-white transition-all text-stone-400"
          >
            <MapPin size={16} />
          </a>

          <Link href="https://www.instagram.com/jusfishy_and_beyond/" target="_blank">
            <Instagram size={18} className="text-stone-300 hover:text-[#1B4D3E] transition-colors" />
          </Link>
        </div>
      </header>
    </>
  );
}