"use client";
import { motion } from "framer-motion";
import { GlassWater, Beer, Wine, Timer, Star } from "lucide-react";

const cocktails = [
  { name: "Signature Rum Punch", price: "$12", desc: "House secret blend with Caribbean dark rum." },
  { name: "Classic Mojito", price: "$12", desc: "Fresh mint, lime, and white rum." },
  { name: "The Margarita", price: "$12", desc: "Premium tequila, agave, and lime." },
  { name: "Long Island Iced Tea", price: "$14", desc: "The heavy hitter. Five spirits, one glass." },
];

const brewsAndVines = [
  { name: "Red Stripe (Jamaican Lager)", price: "$7" },
  { name: "Heineken / Corona", price: "$7" },
  { name: "House Red / White Wine", price: "$9" },
  { name: "Guinness", price: "$8" },
];

export default function BarGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
      {/* BOX A: COCKTAILS */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-stone-900/40 backdrop-blur-2xl border border-white/10 rounded-[3.5rem] p-12 flex flex-col justify-between"
      >
        <div>
          <div className="flex justify-between items-center mb-16">
            <h2 className="text-4xl font-serif italic text-[#C5A059]">Signature Cocktails</h2>
            <GlassWater className="text-[#C5A059]" size={24} />
          </div>
          <div className="space-y-10">
            {cocktails.map((item) => (
              <div key={item.name} className="group cursor-default">
                <div className="flex justify-between items-baseline">
                  <h4 className="font-bold tracking-[0.2em] uppercase text-xs group-hover:text-[#C5A059] transition-colors">{item.name}</h4>
                  <span className="font-serif italic text-stone-500">{item.price}</span>
                </div>
                <p className="text-[10px] text-white/30 mt-2 italic tracking-widest">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* BOX B: BEERS & WINE */}
      <div className="flex flex-col gap-8">
        <motion.section 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="bg-[#1B4D3E] rounded-[3.5rem] p-12 flex-1"
        >
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-serif italic text-white">Brews & Vines</h2>
            <div className="flex gap-2 opacity-30">
              <Beer size={18} />
              <Wine size={18} />
            </div>
          </div>
          <div className="space-y-6">
            {brewsAndVines.map((item) => (
              <div key={item.name} className="flex justify-between items-baseline">
                <h4 className="font-bold tracking-widest uppercase text-[10px] text-white/90">{item.name}</h4>
                <span className="font-serif italic text-white/40">{item.price}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* REFRESHERS BOX */}
        <div className="bg-stone-900/60 rounded-[2.5rem] p-8 border border-white/5">
           <div className="flex items-center gap-4">
              <Star size={14} className="text-[#C5A059]" />
              <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-white/60">Sodas $3 • Water $1.75</p>
           </div>
        </div>
      </div>

      {/* BOX C: HAPPY HOUR */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="md:col-span-2 bg-[#C5A059] rounded-[3.5rem] p-12 text-jusBlack flex flex-col md:flex-row justify-between items-center shadow-xl"
      >
        <div className="flex items-center gap-8 mb-8 md:mb-0">
          <Timer size={48} strokeWidth={1} className="opacity-40" />
          <div>
            <h3 className="text-5xl font-serif italic">The Golden Hour</h3>
            <p className="text-[10px] font-black tracking-[0.3em] uppercase opacity-60">Mon - Fri • Flatbush Favorite</p>
          </div>
        </div>
        <div className="text-center md:text-right border-t md:border-t-0 md:border-l border-jusBlack/10 pt-8 md:pt-0 md:pl-12">
          <p className="text-6xl font-serif italic">4PM — 7PM</p>
          <p className="text-[11px] font-black tracking-widest uppercase mt-2">Select Mixed Drinks $8</p>
        </div>
      </motion.section>
    </div>
  );
}