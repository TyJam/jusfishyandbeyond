"use client";
import { useState } from "react";
import { menuSections } from "@/lib/menuData";
import { motion, AnimatePresence } from "framer-motion";

export default function MenuGrid() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[280px] gap-6 max-w-7xl mx-auto relative">
      {menuSections.map((section) => {
        const isExpanded = expandedId === section.id;
        const spanClass = 
          section.size === "large" ? "md:col-span-2 md:row-span-2" :
          section.size === "wide" ? "md:col-span-2 md:row-span-1" :
          "md:col-span-1 md:row-span-1";

        return (
          <section key={section.id} className={`${spanClass} relative`} aria-label={section.title}>
            <div className="relative h-full w-full bg-white border border-stone-200 rounded-[2rem] overflow-hidden shadow-sm flex flex-col group">
              
              {/* IMAGE LAYER */}
              {section.image && (
                <div className="absolute inset-0 z-0">
                  <img 
                    src={section.image} 
                    className="w-full h-full object-cover grayscale opacity-30 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700" 
                    alt={`Authentic ${section.title} at Jus Fishy Brooklyn`} 
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent transition-opacity duration-500 group-hover:opacity-0" />
                </div>
              )}

              {/* TEXT CONTENT */}
              <div className="relative z-10 p-8 flex flex-col h-full">
                <h2 className="text-[#1B4D3E] group-hover:text-white group-hover:drop-shadow-md transition-colors font-black tracking-[0.3em] uppercase text-[11px] mb-6 border-b-2 border-[#1B4D3E]/10 pb-2 w-fit">
                  {section.title}
                </h2>
                
                <ul className="space-y-2">
                  {section.items.slice(0, 4).map((item, i) => (
                    <li key={i} className="text-stone-800 group-hover:text-white group-hover:drop-shadow-sm transition-colors text-[13px] font-serif italic border-b border-dotted border-stone-200 pb-2 last:border-0">
                      {item}
                    </li>
                  ))}
                </ul>

                {section.items.length > 4 && (
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setExpandedId(section.id);
                    }}
                    className="mt-auto pt-4 text-[10px] font-black tracking-widest text-[#A8B475] group-hover:text-white uppercase text-left flex items-center gap-1"
                  >
                    <span className="text-lg">+</span> {section.items.length - 4} MORE OPTIONS
                  </button>
                )}
              </div>

              {/* EXPANDED OVERLAY */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div 
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "100%" }}
                    transition={{ type: "spring", damping: 25, stiffness: 200 }}
                    className="absolute inset-0 z-50 bg-[#1B4D3E] p-8 overflow-y-auto"
                  >
                    <div className="flex justify-between items-center mb-8">
                      <h3 className="text-white font-black tracking-widest uppercase text-[11px] border-b-2 border-white/20 pb-2 w-fit">{section.title}</h3>
                      <button 
                        onClick={() => setExpandedId(null)} 
                        className="text-[10px] font-bold text-white/50 hover:text-white uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full"
                      >
                        Close ✕
                      </button>
                    </div>
                    <ul className="space-y-4">
                      {section.items.map((item, i) => (
                        <li key={i} className="text-white text-[14px] font-serif italic border-b border-dotted border-white/10 pb-3 last:border-0">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </section>
        );
      })}
    </div>
  );
}