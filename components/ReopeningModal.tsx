"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Hammer, Sparkles, X } from "lucide-react";

export default function ReopeningModal() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Show instantly to protect the brand
    const timer = setTimeout(() => setShow(true), 500);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-10">
        {/* BACKDROP: Heavy blur to focus 100% on the message */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShow(false)}
          className="absolute inset-0 bg-jusBlack/90 backdrop-blur-xl"
        />

        {/* MODAL CONTENT */}
        <motion.div 
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="relative max-w-lg w-full bg-white rounded-[3rem] overflow-hidden shadow-2xl border border-[#A8B475]/20"
        >
          {/* CLOSE BUTTON */}
          <button 
            onClick={() => setShow(false)}
            className="absolute top-6 right-6 z-50 p-2 text-stone-300 hover:text-jusGreen transition-all"
          >
            <X size={20} />
          </button>

          <div className="p-10 md:p-16 text-center flex flex-col items-center">
            {/* ICON ENGINE */}
            <div className="w-20 h-20 bg-stone-50 rounded-full flex items-center justify-center mb-8">
              <Sparkles className="text-[#A8B475] animate-pulse" size={32} />
            </div>

            <span className="text-[10px] font-black tracking-[0.5em] text-[#A8B475] uppercase mb-4">
              Legacy in Progress
            </span>
            
            <h2 className="text-4xl md:text-5xl font-serif text-jusGreen leading-tight mb-6">
              Preparing for our <br /> 
              <span className="italic">2026 Grand Reopening.</span>
            </h2>

            <p className="text-stone-500 text-sm leading-relaxed mb-10 font-light">
              Jus Fishy & Beyond is currently undergoing internal upgrades to serve the Brooklyn community with an even higher standard of excellence. We look forward to welcoming you back soon with new flavors and a refined experience.
            </p>

            {/* ACTION FOR CATERING (Revenue Preservation) */}
            <div className="w-full space-y-4">
              <a 
                href="mailto:contact@tywebstudio.com" 
                className="block w-full bg-jusGreen text-white py-5 rounded-full font-black text-[10px] tracking-widest uppercase hover:bg-black transition-all"
              >
                Inquire for Future Catering
              </a>
              <p className="text-[9px] font-bold text-stone-300 uppercase tracking-widest">
                Check back for official dates
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}