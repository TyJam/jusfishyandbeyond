"use client";
import { cateringSections } from "@/lib/cateringData";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function CateringPage() {
  return (
    <div className="bg-[#fdfcf8] min-h-screen p-6 md:p-20 pb-40">
      <header className="mb-20 max-w-7xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-serif text-[#1B4D3E] mb-4">Catering.</h1>
        <p className="text-[#A8B475] text-[10px] font-black tracking-[0.4em] uppercase">Brooklyn Events • Large & Small Trays</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto relative">
        {cateringSections.map((section, idx) => (
          <motion.div
            key={section.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className={`${section.size === 'large' ? 'md:col-span-2' : ''} relative group bg-white border border-stone-200 rounded-[3rem] overflow-hidden shadow-sm hover:shadow-md transition-all`}
          >
            {/* --- IMAGE SECTION --- */}
            {section.image && (
              <div className="absolute inset-0 z-0">
                <img 
                  src={section.image} 
                  alt={section.title}
                  className="w-full h-full object-cover grayscale opacity-30 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000 ease-in-out" 
                />
                {/* Gradient to ensure text is readable */}
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent group-hover:opacity-0 transition-opacity duration-500" />
              </div>
            )}

            {/* --- CONTENT SECTION --- */}
            <div className="relative z-10 p-10 flex flex-col h-full min-h-[300px]">
              <h2 className="text-[#1B4D3E] group-hover:text-white group-hover:drop-shadow-md transition-colors font-black tracking-[0.2em] uppercase text-[11px] mb-8 border-b border-stone-100 pb-4 w-fit">
                {section.title}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                {section.items.map((item) => (
                  <div key={item.name} className="flex items-center gap-3">
                    <CheckCircle size={14} className="text-[#A8B475] group-hover:text-white transition-colors" />
                    <span className="text-stone-800 group-hover:text-white transition-colors text-sm font-serif italic">{item.name}</span>
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-10 flex justify-between text-[9px] font-bold text-stone-400 group-hover:text-white/50 transition-colors uppercase tracking-widest">
                 <span>SM / LG Trays Available</span>
                 <span className="text-[#A8B475] group-hover:text-white font-black">Book Now</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}