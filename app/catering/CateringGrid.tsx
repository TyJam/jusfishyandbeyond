"use client";
import { cateringSections } from "@/lib/cateringData";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CateringGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto relative">
      {cateringSections.map((section, idx) => (
        <motion.section
          key={section.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}
          className={`${section.size === 'large' ? 'md:col-span-2' : ''} relative group bg-white border border-stone-200 rounded-[3rem] overflow-hidden shadow-sm hover:shadow-md transition-all`}
          aria-labelledby={`heading-${section.id}`}
        >
          {/* --- OPTIMIZED IMAGE LAYER --- */}
          {section.image && (
            <div className="absolute inset-0 z-0">
              <Image 
                src={section.image} 
                alt={`Premium ${section.title} Catering Brooklyn`}
                fill
                className="object-cover grayscale opacity-30 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000 ease-in-out" 
                unoptimized={true}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent group-hover:opacity-0 transition-opacity duration-500" />
            </div>
          )}

          {/* --- CONTENT LAYER --- */}
          <div className="relative z-10 p-10 flex flex-col h-full min-h-[350px]">
            <header>
              <h2 
                id={`heading-${section.id}`}
                className="text-[#1B4D3E] group-hover:text-white group-hover:drop-shadow-md transition-colors font-black tracking-[0.2em] uppercase text-[11px] mb-8 border-b border-stone-100 pb-4 w-fit"
              >
                {section.title}
              </h2>
            </header>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
              {section.items.map((item) => (
                <li key={item.name} className="flex items-center gap-3">
                  <CheckCircle size={14} className="text-[#A8B475] group-hover:text-white transition-colors" />
                  <span className="text-stone-800 group-hover:text-white transition-colors text-sm font-serif italic">{item.name}</span>
                </li>
              ))}
            </ul>

            <footer className="mt-auto pt-10 flex justify-between items-center text-[9px] font-bold text-stone-400 group-hover:text-white/50 transition-colors uppercase tracking-widest">
               <span>Small & Large Trays Available</span>
               <Link href="/contact" className="bg-[#A8B475]/10 group-hover:bg-white/20 text-[#A8B475] group-hover:text-white px-4 py-2 rounded-full transition-all">
                  Request Quote
               </Link>
            </footer>
          </div>
        </motion.section>
      ))}
    </div>
  );
}