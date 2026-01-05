"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import { Instagram, MapPin } from "lucide-react";
import LogoImage from "../public/jus-fishy-seafood-restaurant-brooklyn-flatbush.jpg"; 
const navLinks = [
  { name: "MENUS", href: "/menu" },
  { name: "ABOUT", href: "/about" },
  { name: "CONTACT", href: "/contact" },
  { name: "CATERING", href: "/catering" },
  { name: "GALLERY", href: "/gallery" },
  {name: "BAR",  href: "/bar"}
];

export default function SidebarHeader() {
  const pathname = usePathname();

  return (
    <header className="w-20 h-screen sticky top-0 flex flex-col items-center justify-between py-10 border-r border-stone-200 bg-white z-50">
      {/* 1. TOP: THE LOGO */}
      <div className="flex flex-col items-center gap-4">
        <Link href="/" className="group">
          <div className="w-10 h-10 rounded-full bg-[#1B4D3E] flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform">
            <Image 
  src={LogoImage}    // Use the variable name here, NO quotes
   alt="Jus Fishy & Beyond - The Best Seafood Restaurant and Bar in Flatbush, Brooklyn"
  width={200}
              height={200}
  //className="brightness-0 invert"
/>
          </div>
        </Link>
      </div>

      {/* 2. MIDDLE: VERTICAL NAVIGATION */}
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

              {/* THE PILL BORDER (from the image) */}
              {isActive && (
                <motion.div
                  layoutId="sidebar-pill"
                  className="absolute inset-x-[-12px] inset-y-[-15px] border border-stone-800 rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
          );
        })}
      </nav>

      {/* 3. BOTTOM: SOCIALS */}
      <div className="flex flex-col items-center gap-6">
       
<a 
          href="https://www.google.com/maps/dir/?api=1&destination=1059+Flatbush+Ave+Brooklyn+NY+11226" 
          target="_blank"
          className="group flex flex-col items-center gap-2"
        >
          <div className="p-2 rounded-full border border-stone-100 group-hover:bg-[#1B4D3E] group-hover:text-white transition-all">
            <MapPin size={16} className="text-stone-400 group-hover:text-white" />
          </div>
          <span 
            className="text-[8px] font-black tracking-widest text-stone-400 group-hover:text-[#1B4D3E]"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            LOCATION 
          </span>
        </a>

        <Link href="https://instagram.com" target="_blank">
          <Instagram size={18} className="text-stone-400 hover:text-[#1B4D3E] transition-colors" />
        </Link>
      </div>
    </header>
  );
}