"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Heart, Calendar, MapPin, PhoneCall } from "lucide-react";

export default function FamilyDayPage() {
  return (
    <div className="bg-[#fdfcf8] min-h-screen pb-40">
      {/* 1. HERO SECTION */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-jusGreen">
        <Image 
          src="/prospect-park-jus-fishy.jpg" 
          alt="Jus Fishy Family Day at Prospect Park"   
          fill
          className="object-cover opacity-40 grayscale"
          unoptimized // ADD THIS PROPERTY
          priority
        />
        <div className="relative z-10 text-center px-6">
          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            className="text-[#A8B475] font-black uppercase tracking-[0.5em] text-[10px] mb-4"
          >
            Annual Community Event
          </motion.p>
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-6xl md:text-9xl font-serif text-white leading-none italic"
          >
            Family <span className="text-[#A8B475]">Day.</span>
          </motion.h1>
        </div>
      </section>

      {/* 2. THE DETAILS BENTO GRID */}
      <section className="max-w-7xl mx-auto p-6 md:p-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* DATE & TIME */}
        <div className="bg-white border border-stone-100 rounded-[3rem] p-12 shadow-sm">
          <Calendar className="text-[#A8B475] mb-6" size={32} />
          <h2 className="text-3xl font-serif text-[#1B4D3E] mb-4">The Date</h2>
          <p className="text-jusBlack font-black text-xl">JULY 26TH, 2026</p>
          <p className="text-stone-400 text-sm mt-2 uppercase tracking-widest">Starts at 6:00 PM</p>
        </div>

        {/* LOCATION */}
        <div className="bg-[#1B4D3E] rounded-[3rem] p-12 text-white shadow-xl flex flex-col justify-center">
          <MapPin className="text-[#A8B475] mb-6" size={32} />
          <h2 className="text-3xl font-serif mb-4 italic">The Venue</h2>
          <p className="text-lg font-bold">Lincoln Road Entrance</p>
          <p className="text-[#A8B475] font-black uppercase tracking-widest text-xs mt-2">Prospect Park, Brooklyn</p>
        </div>

        {/* THE VYBEZ */}
        <div className="bg-white border border-stone-100 rounded-[3rem] p-12 shadow-sm">
          <Heart className="text-red-400 mb-6" size={32} />
          <h2 className="text-3xl font-serif text-[#1B4D3E] mb-4">The Vibe</h2>
          <p className="text-stone-500 italic leading-relaxed">Games, Delicious Food, Refreshing Drinks, and Non-Stop Energy for the whole family.</p>
          <p className="mt-6 text-[10px] font-black tracking-widest text-[#A8B475] uppercase underline">Wear Something Green 💚</p>
        </div>
      </section>

      {/* 3. THE DONATION & ZELLE SECTION */}
      <section className="max-w-4xl mx-auto px-6 mt-10">
        <motion.div 
          whileHover={{ scale: 1.01 }}
          className="bg-stone-900 rounded-[4rem] p-12 md:p-20 text-center text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#A8B475]/10 blur-[100px] rounded-full" />
          <h3 className="text-4xl md:text-5xl font-serif italic mb-8">Support the Celebration</h3>
          <p className="text-stone-400 leading-relaxed mb-12 max-w-2xl mx-auto">
            Blessings to all our friends and family. As we know, costs are rising, and we want our special day to be a blast. Any contribution via Zelle is deeply appreciated.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-[10px] font-black text-[#A8B475] uppercase mb-1">Joanne</p>
              <a href="tel:7182138736" className="text-lg font-bold">718.213.8736</a>
            </div>
            <div>
              <p className="text-[10px] font-black text-[#A8B475] uppercase mb-1">Pamela</p>
              <a href="tel:6466436749" className="text-lg font-bold">646.643.6749</a>
            </div>
            <div>
              <p className="text-[10px] font-black text-[#A8B475] uppercase mb-1">Collin</p>
              <a href="tel:3474280165" className="text-lg font-bold">347.428.0165</a>
            </div>
          </div>
          
          <div className="mt-16 inline-block bg-white text-[#1B4D3E] px-12 py-5 rounded-full font-black text-xs tracking-widest uppercase">
            Accepted via Zelle
          </div>
        </motion.div>
      </section>
    </div>
  );
}