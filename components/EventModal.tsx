"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";

export default function EventModal() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Show modal after a small delay
    const timer = setTimeout(() => setShow(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-10">
        {/* BACKDROP */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShow(false)}
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* MODAL CONTENT */}
        <motion.div 
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="relative max-w-lg w-full bg-[#1B4D3E] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10"
        >
          {/* CLOSE BUTTON */}
          <button 
            onClick={() => setShow(false)}
            className="absolute top-6 right-6 z-50 p-2 bg-black/20 hover:bg-black/40 rounded-full text-white transition-all"
          >
            <X size={20} />
          </button>

          {/* THE FLYER IMAGE */}
          <div className="relative aspect-[4/5] w-full">
            <Image 
              src="/jus-fishy-vybz-june-event-flyer.jpeg" 
              alt="Jus Fishy Presents Lime and Enjoy Vybz June Event flatbush ave brooklyn"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* ACTION AREA */}
          <div className="p-8 text-center bg-white">
            <p className="text-[10px] font-black tracking-[0.3em] text-[#1B4D3E] uppercase mb-4">
              Every Friday & Saturday in June
            </p>
            <button 
              onClick={() => setShow(false)}
              className="w-full bg-[#1B4D3E] text-white py-5 rounded-full font-black text-xs tracking-widest uppercase hover:bg-black transition-all"
            >
              See You There
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}