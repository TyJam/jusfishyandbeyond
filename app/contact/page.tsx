"use client";
import { motion } from "framer-motion";
import { MapPin, Phone, Instagram, Mail } from "lucide-react";

// THIS IS THE PART THAT WAS MISSING OR WRONG:
export default function ContactPage() {
  return (
    <div className="bg-[#fdfcf8] min-h-screen p-6 md:p-20 pb-40">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
        
        {/* LEFT SIDE: BRAND INFO */}
        <div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[#A8B475] font-black tracking-[0.4em] text-[10px] uppercase mb-8"
          >
            Contact us
          </motion.p>
          <h1 className="text-6xl md:text-8xl font-serif text-[#1B4D3E] mb-12">Connect.</h1>
          
          <div className="space-y-10">
            {/* ADDRESS */}
            <div className="flex items-start gap-6 group">
              <div className="p-4 bg-white rounded-full shadow-sm text-[#1B4D3E] group-hover:bg-[#1B4D3E] group-hover:text-white transition-all">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-[10px] font-black tracking-widest text-[#A8B475] uppercase mb-1">Visit Brooklyn</p>
                <p className="text-lg font-serif italic text-stone-800">1059 Flatbush Ave, Brooklyn, NY</p>
              </div>
            </div>

            {/* PHONE */}
            <div className="flex items-start gap-6 group">
              <div className="p-4 bg-white rounded-full shadow-sm text-[#1B4D3E] group-hover:bg-[#1B4D3E] group-hover:text-white transition-all">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-[10px] font-black tracking-widest text-[#A8B475] uppercase mb-1">Call to Order</p>
                <a href="tel:3474421172" className="text-lg font-serif italic text-stone-800 hover:text-[#A8B475] transition-all">347.442.1172</a>
              </div>
            </div>

            {/* INSTAGRAM */}
            <div className="flex items-start gap-6 group">
              <div className="p-4 bg-white rounded-full shadow-sm text-[#1B4D3E] group-hover:bg-[#1B4D3E] group-hover:text-white transition-all">
                <Instagram size={20} />
              </div>
              <div>
                <p className="text-[10px] font-black tracking-widest text-[#A8B475] uppercase mb-1">Follow Soul</p>
                <p className="text-lg font-serif italic text-stone-800">@jusfishyandbeyond</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: THE INQUIRY ENGINE */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-10 md:p-16 rounded-[3rem] shadow-sm border border-stone-100"
        >
          <h3 className="text-2xl font-serif italic text-[#1B4D3E] mb-10">Send a Message</h3>
          <form className="space-y-8">
            <div className="space-y-1">
              <label className="text-[9px] font-black tracking-[0.2em] text-stone-300 uppercase">Your Name</label>
              <input type="text" className="w-full border-b border-stone-100 py-2 outline-none focus:border-[#A8B475] text-sm font-medium uppercase" placeholder="Tyrone" />
            </div>
            <div className="space-y-1">
              <label className="text-[9px] font-black tracking-[0.2em] text-stone-300 uppercase">Email Address</label>
              <input type="email" className="w-full border-b border-stone-100 py-2 outline-none focus:border-[#A8B475] text-sm font-medium uppercase" placeholder="HELLO@TYWEBSTUDIO.COM" />
            </div>
            <div className="space-y-1">
              <label className="text-[9px] font-black tracking-[0.2em] text-stone-300 uppercase">Message</label>
              <textarea rows={3} className="w-full border-b border-stone-100 py-2 outline-none focus:border-[#A8B475] text-sm font-medium uppercase" placeholder="TELL US ABOUT YOUR EVENT" />
            </div>
            <button className="w-full bg-[#1B4D3E] text-white py-6 rounded-full font-black tracking-[0.5em] uppercase hover:bg-black transition-all shadow-lg">
              Send Inquiry
            </button>
          </form>
        </motion.div>

      </div>
    </div>
  );
}