"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    const res = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(data),
    });

    if (res.ok) setStatus('success');
  };

  if (status === 'success') {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
        <CheckCircle size={64} className="text-[#A8B475] mx-auto mb-6" />
        <h2 className="text-3xl font-serif italic text-[#1B4D3E]">Message Received.</h2>
        <p className="text-stone-500 mt-4 uppercase tracking-widest text-[10px]">We will connect with you shortly.</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="space-y-1">
        <label className="text-[9px] font-black tracking-[0.2em] text-stone-300 uppercase">Your Name</label>
        <input name="name" type="text" required className="w-full border-b border-stone-100 py-3 outline-none focus:border-[#A8B475] text-sm font-medium uppercase bg-transparent" placeholder="TYRONE" />
      </div>
      <div className="space-y-1">
        <label className="text-[9px] font-black tracking-[0.2em] text-stone-300 uppercase">Email Address</label>
        <input name="email" type="email" required className="w-full border-b border-stone-100 py-3 outline-none focus:border-[#A8B475] text-sm font-medium uppercase bg-transparent" placeholder="HELLO@TYWEBSTUDIO.COM" />
      </div>
      <div className="space-y-1">
        <label className="text-[9px] font-black tracking-[0.2em] text-stone-300 uppercase">Message</label>
        <textarea name="message" rows={3} required className="w-full border-b border-stone-100 py-3 outline-none focus:border-[#A8B475] text-sm font-medium uppercase bg-transparent" placeholder="TELL US ABOUT YOUR EVENT" />
      </div>
      <button 
        type="submit" 
        disabled={status === 'loading'}
        className="w-full bg-[#1B4D3E] text-white py-6 rounded-full font-black tracking-[0.5em] uppercase hover:bg-black transition-all shadow-lg flex justify-center items-center gap-4"
      >
        {status === 'loading' ? 'TRANSMITTING...' : 'Send Inquiry'}
        <Send size={16} />
      </button>
    </form>
  );
}