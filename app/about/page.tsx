"use client";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen p-10 md:p-20 pb-40">
      <div className="max-w-4xl">
        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }}
          className="text-[#A8B475] font-black tracking-[0.5em] text-[10px] uppercase mb-12"
        >
          Established 2018
        </motion.p>

        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-6xl md:text-8xl font-serif text-[#1B4D3E] leading-tight mb-16"
        >
          A Legacy of <span className="italic">Flavor</span> & Soul.
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div className="space-y-8">
            <p className="text-jusBlack text-lg font-serif italic leading-relaxed">
              Jus Fishy & Beyond isn't just a restaurant; it's a Brooklyn landmark built on the traditions of the Caribbean.
            </p>
            <p className="text-stone-500 leading-relaxed text-sm">
              Since 2018, we have stood on Flatbush Avenue as a testament to quality. Our founder believed that seafood should be prepared with the same respect it was caught with. Today, we continue that mission by sourcing only the freshest catch and seasoning it with the soul of the islands.
            </p>
          </div>
          
          <div className="relative aspect-[3/4] rounded-[3rem] overflow-hidden bg-stone-100 shadow-xl">
             {/* Use an image of the founder or the original shop here */}
             <img src="/images/heritage-photo.jpg" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" alt="Jus Fishy Heritage" />
          </div>
        </div>
      </div>
    </div>
  );
}