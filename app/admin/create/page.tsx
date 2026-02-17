"use client";
import { useState } from "react";
import { writeClient } from "@/lib/sanity";
import { motion } from "framer-motion";

export default function AdminCreatePost() {
  const [formData, setFormData] = useState({ title: "", description: "", body: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const doc = {
        _type: 'post',
        title: formData.title,
        slug: { _type: 'slug', current: formData.title.toLowerCase().replace(/\s+/g, '-') },
        description: formData.description,
        // For a simple start, we push the body as plain text in a block format
        body: [{ _type: 'block', children: [{ _type: 'span', text: formData.body }] }],
      };

      await writeClient.create(doc);
      alert("SEO Article Pushed to Sanity!");
      setFormData({ title: "", description: "", body: "" });
    } catch (err) {
      console.error(err);
      alert("Push Failed. Check Console.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#1B4D3E] min-h-screen p-10 md:p-20 text-white">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-serif italic mb-12">Create SEO Content</h1>
        
        <form onSubmit={handleSubmit} className="space-y-8 bg-white/5 p-12 rounded-[3rem] backdrop-blur-md border border-white/10">
          <input 
            value={formData.title}
            onChange={(e) => setFormData({...formData, title: e.target.value})}
            placeholder="ARTICLE TITLE (e.g. Best Oxtail in Brooklyn)" 
            className="w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-[#A8B475] text-xl font-serif italic" 
          />
          <textarea 
            value={formData.description}
            onChange={(e) => setFormData({...formData, description: e.target.value})}
            placeholder="SEO META DESCRIPTION (The text Google shows)" 
            rows={2}
            className="w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-[#A8B475] text-xs tracking-widest uppercase" 
          />
          <textarea 
            value={formData.body}
            onChange={(e) => setFormData({...formData, body: e.target.value})}
            placeholder="ARTICLE CONTENT..." 
            rows={10}
            className="w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-[#A8B475] text-sm leading-relaxed" 
          />
          
          <button 
            type="submit"
            disabled={loading}
            className="w-full bg-[#A8B475] text-jusGreen py-6 rounded-full font-black tracking-[0.5em] uppercase hover:bg-white transition-all"
          >
            {loading ? "DEPLOYING TO CLOUD..." : "PUSH TO GOOGLE ENGINE"}
          </button>
        </form>
      </div>
    </div>
  );
}