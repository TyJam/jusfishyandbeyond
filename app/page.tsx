"use client"; // Required for animations
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full">
      {/* 1. BACKGROUND IMAGE (SEO Optimized) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/jus-fishy-seafood-restaurant-flatbush-brooklyn.jpg" 
          alt="Jus Fishy & Beyond Seafood Restaurant storefront in Flatbush, Brooklyn"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay so text is 100% readable */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />
      </div>

      {/* 2. MAIN CONTENT CONTAINER */}
      <div className="relative z-10 p-10 md:p-20 max-w-6xl">
        

        {/* MAIN HEADLINE (Animated) */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-5xl md:text-7xl font-serif text-white leading-[1.1] mb-12 max-w-4xl"
        >
          Our ingredients are selected for their <span className="italic text-[#A8B475]">freshness</span> and the ethical working practices of our <span className="italic text-[#A8B475]">fishermen</span>.
        </motion.h1>

        {/* SUBTEXT & DINE-IN INFO (Animated) */}
        <div className="flex flex-col md:flex-row gap-20 items-start">
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="max-w-md"
          >
            <p className="text-stone-300 leading-relaxed text-sm mb-8">
              For us, cooking in a green and transparent way means letting you taste the best of the ocean 
              while raising your environmental awareness. Our mission is to be part of the solution 
              so that one day we can all eat ethically.
            </p>
            <button className="bg-[#1B4D3E] text-white px-8 py-4 text-[10px] font-black tracking-widest uppercase hover:bg-white hover:text-black transition-all">
              Explore the Menu
            </button>
          </motion.div>

          {/* VISIT THE BAR SECTION */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
            className="border-l border-[#A8B475]/30 pl-8 max-w-sm"
          >
            <h3 className="text-[#A8B475] font-serif italic text-2xl mb-4">Visit the Bar</h3>
            <p className="text-stone-400 text-sm leading-relaxed mb-6">
              Located in the heart of Flatbush, Jus Fishy offers a cozy, modern atmosphere for your next seafood dinner. 
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <p className="text-white text-[10px] tracking-widest font-bold uppercase">MON - SAT: 11AM - 10PM</p>
              </div>
              <p className="text-white/60 text-[10px] tracking-widest font-bold uppercase ml-4">SUN: 12PM - 9PM</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 3. ABSTRACT FISH GRAPHIC (SEO Optimized) */}
      <motion.div 
        initial={{ opacity: 0, rotate: -10 }}
        animate={{ opacity: 0.15, rotate: 0 }}
        transition={{ duration: 2 }}
        className="absolute top-10 right-20 z-0 pointer-events-none hidden md:block"
      >
         <img
           src="/jus-fishy-abstract-fish-graphic.png" 
           className="w-[500px] h-auto grayscale invert" 
           alt="Jus Fishy abstract seafood graphic" 
         />
      </motion.div>
    </div>
  );
}