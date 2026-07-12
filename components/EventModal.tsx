"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link"; // IMPORTED LINK FOR NEXT.JS NAVIGATION
import { X } from "lucide-react";

export default function EventModal() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Show modal after 1 second for maximum impact
    const timer = setTimeout(() => setShow(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-10">
        {/* BACKDROP: Glassmorphism effect */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShow(false)}
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* MODAL CONTENT: Bento Style */}
        <motion.div 
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="relative max-w-lg w-full bg-[#1B4D3E] rounded-[3rem] overflow-hidden shadow-2xl border border-white/10"
        >
          {/* CLOSE BUTTON */}
          <button 
            onClick={() => setShow(false)}
            className="absolute top-6 right-6 z-50 p-2 bg-black/20 hover:bg-black/40 rounded-full text-white transition-all"
            aria-label="Close Announcement"
          >
            <X size={20} />
          </button>

          {/* THE FLYER IMAGE (Updated extension to .jpeg) */}
          <div className="relative aspect-[4/5] w-full">
            <Image 
              src="/jus-fishy-vybz-june-event-flyer.jpeg" 
              alt="Jus Fishy Presents Lime and Enjoy Vybz June Event flatbush ave brooklyn"
              fill
              className="object-cover"
              priority
              unoptimized
            />
          </div>

          {/* ACTION AREA: The Money Link */}
          <div className="p-10 text-center bg-white">
            <p className="text-[10px] font-black tracking-[0.4em] text-[#1B4D3E] uppercase mb-6">
              Live at Prospect Park • July 26th
            </p>
            
            {/* THE CONNECTION: Redirects to /family-day and closes modal */}
            <Link 
              href="/family-day" 
              onClick={() => setShow(false)}
              className="inline-block w-full bg-[#1B4D3E] text-white py-6 rounded-full font-black text-[10px] tracking-[0.3em] uppercase text-center hover:bg-black hover:scale-[1.02] active:scale-95 transition-all shadow-xl"
            >
              View Details & Support
            </Link>

            <button 
              onClick={() => setShow(false)}
              className="mt-6 text-[9px] font-bold text-stone-300 uppercase tracking-widest hover:text-[#1B4D3E] transition-colors"
            >
              Maybe Later
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}