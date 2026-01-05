"use client";
import { motion } from "framer-motion";

export default function BentoItem({ section }: any) {
  // If the section has an image, we split it. If not, it's a clean text box.
  const hasImage = !!section.image;

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="relative bg-white border border-stone-100 rounded-3xl overflow-hidden shadow-sm flex flex-col h-full"
    >
      <div className={`flex flex-col h-full ${hasImage ? "md:flex-row" : ""}`}>
        
        {/* IMAGE SIDE (Only shows if there is an image) */}
        {hasImage && (
          <div className="w-full md:w-1/2 h-48 md:h-full relative overflow-hidden bg-stone-100">
            <img 
              src={section.image} 
              alt={section.title} 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
            />
            {/* SEO Overlay - Invisible but searchable */}
            <span className="sr-only">Best {section.title} in Flatbush Brooklyn</span>
          </div>
        )}

        {/* TEXT SIDE */}
        <div className={`p-8 flex flex-col justify-center ${hasImage ? "md:w-1/2" : "w-full"}`}>
          <h2 className="text-[#1B4D3E] font-black tracking-[0.3em] uppercase text-[10px] mb-6 border-b border-stone-50 pb-2">
            {section.title}
          </h2>
          
          <ul className="space-y-3">
            {section.items.slice(0, section.size=== "square" ? 4 : 8).map((item: string, i: number) => (
              <li key={i} className="flex justify-between items-center group/item">
                <span className="text-jusBlack text-sm font-serif italic hover:text-[#1B4D3E] cursor-default transition-colors">
                  {item}
                </span>
                {/* Small indicator instead of a price */}
                <div className="w-1 h-1 rounded-full bg-stone-200 group-hover/item:bg-[#A8B475]" />
              </li>
            ))}

            {/* The "More Options" indicator */}
  {section.items.length > (section.size === "square" ? 4 : 8) && (
    <li className="text-[9px] text-[#A8B475] font-black tracking-widest mt-2 uppercase">
      + {section.items.length - (section.size === "square" ? 4 : 8)} More Options
    </li>
  )}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}