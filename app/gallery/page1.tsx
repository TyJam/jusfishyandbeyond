// src/app/gallery/page.tsx
"use client";
import CommunityGallery from "@/components/CommunityGallery";
import { motion } from "framer-motion";

export default function GalleryPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* HEADER SECTION */}
      <header className="p-10 md:p-20 pb-0">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-serif text-[#1B4D3E] mb-4"
        >
          The Gallery
        </motion.h1>
        <div className="h-[1px] w-40 bg-[#1B4D3E]" />
        <p className="mt-6 text-stone-400 uppercase tracking-widest text-[10px]">
          Soul of Flatbush • People & Plates
        </p>
      </header>

      {/* THE GRID COMPONENT */}
      <CommunityGallery />

      {/* CALL TO ACTION */}
      <section className="p-20 text-center border-t border-stone-50">
        <p className="font-serif italic text-2xl text-[#1B4D3E] mb-6">Experience it for yourself.</p>
        <p className="text-jusBlack text-sm uppercase tracking-widest">1059 Flatbush Ave, Brooklyn</p>
      </section>
    </div>
  );
}