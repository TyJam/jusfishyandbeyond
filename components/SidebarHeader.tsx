"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Instagram, MapPin, X } from "lucide-react";
import LogoImage from "../public/jus-fishy-seafood-restaurant-brooklyn-flatbush.jpg"; 

const navLinks = [
  { name: "MENUS", href: "/menu" },
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
      <header className="md:hidden fixed top-0 left-0 w-full h-20 bg-white border-b border-stone-100 z-[100] px-6 flex justify-between items-center">
        {/* LOGO LEFT */}
        <Link href="/" onClick={() => setIsOpen(false)} className="w-10 h-10 rounded-full bg-[#1B4D3E] flex items-center justify-center overflow-hidden">
          <Image 
            src={LogoImage} 
            alt="Logo" 
            width={40} 
            height={40} 
            className="object-cover"
          />
        </Link>

        {/* ORDER BUTTON MIDDLE */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <button className="bg-[#1B4D3E] text-white px-4 py-2 rounded-md text-[9px] font-black tracking-widest uppercase shadow-sm">
            Order Online
          </button>
        </div>

        {/* 2-LINE MENU RIGHT */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col gap-1.5 p-2 z-[110]"
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
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-[90] flex flex-col items-center justify-center gap-8 md:hidden"
          >
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
            
            <div className="mt-12 flex flex-col items-center gap-6">
               <p className="text-[10px] font-black tracking-[0.3em] text-stone-300">BROOKLYN SOUL</p>
               <div className="flex gap-8">
                 <MapPin size={20} className="text-[#1B4D3E]" />
                 <Instagram size={20} className="text-[#1B4D3E]" />
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- DESKTOP SIDEBAR (Static Left) --- */}
      <header className="hidden md:flex w-20 h-screen sticky top-0 flex-col items-center justify-between py-10 border-r border-stone-200 bg-white z-50">
        <div className="flex flex-col items-center gap-4">
          <Link href="/" className="group">
            <div className="w-12 h-12 rounded-full bg-[#1B4D3E] flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform shadow-md">
              <Image 
                src={LogoImage} 
                alt="Jus Fishy"
                width={50}
                height={50}
                className="object-cover"
              />
            </div>
          </Link>
        </div>

        <nav className="flex flex-col gap-12">
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
                  ${isActive ? "text-[#1B4D3E]" : "text-stone-400 group-hover:text-[#1B4D3E]"}
                  `}
                  style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                >
                  {link.name}
                </span>

                {isActive && (
                  <motion.div
                    layoutId="sidebar-pill"
                    className="absolute inset-x-[-12px] inset-y-[-15px] border border-[#1B4D3E] rounded-full"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex flex-col items-center gap-6">
          <a 
            href="https://www.google.com/maps/dir/?api=1&destination=1059+Flatbush+Ave+Brooklyn+NY+11226" 
            target="_blank"
            className="group flex flex-col items-center gap-2"
          >
            <div className="p-2 rounded-full border border-stone-100 group-hover:bg-[#1B4D3E] group-hover:text-white transition-all">
              <MapPin size={16} className="text-stone-400 group-hover:text-white" />
            </div>
          </a>

          <Link href="https://instagram.com" target="_blank">
            <Instagram size={18} className="text-stone-400 hover:text-[#1B4D3E] transition-colors" />
          </Link>
        </div>
      </header>
    </>
  );
}