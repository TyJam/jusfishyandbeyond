import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

export default function BentoGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 max-w-7xl mx-auto">
      {/* 1. HERO IMAGE (The "Hook") */}
      <Card className="md:col-span-3 md:row-span-2 relative overflow-hidden h-[400px]">
        <img src="/hero-fish.jpg" className="object-cover w-full h-full" alt="Jus Fishy Signature" />
        <div className="absolute bottom-0 left-0 p-8 bg-gradient-to-t from-black/80 to-transparent w-full">
           <h1 className="text-white text-4xl font-bold">Beyond Restaurant & Bar</h1>
        </div>
      </Card>

      {/* 2. THE LOGO / BRAND BOX */}
      <Card className="flex items-center justify-center bg-[#1B4D3E] p-6 text-white">
        <img src="/jus-fishy-logo.png" className="w-32 h-auto invert" alt="Logo" />
      </Card>

      {/* 3. QUICK MENU PREVIEW */}
      <Card className="p-6 bg-white hover:bg-stone-50 transition-colors">
        <h3 className="font-bold text-[#1B4D3E]">Today's Catch</h3>
        <p className="text-sm text-stone-500">Red Snapper, Escovitch Style</p>
      </Card>
      
      {/* 4. CALL TO ACTION (The "Revenue Engine") */}
      <Card className="md:col-span-2 p-6 bg-[#A8B475] text-[#1B4D3E] flex justify-between items-center">
        <span className="font-bold text-xl uppercase tracking-tighter">Reservations</span>
        <button className="bg-[#1B4D3E] text-white px-6 py-2 rounded-full font-bold">Book Now</button>
      </Card>
    </div>
  );
}