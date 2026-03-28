"use client";
import { useState } from "react";
import { writeClient } from "@/lib/sanity";
import { motion } from "framer-motion";

export default function AdminCreatePost() {
  const [formData, setFormData] = useState({ title: "", description: "", body: "" });
  const [loading, setLoading] = useState(false);

  // THE MASTER BACKLINK: This ensures your agency gets the SEO "Vouch" from every client
  const backlinkHtml = `
    <div style="margin-top: 50px; padding-top: 20px; border-t: 1px solid #eee;">
      <p style="font-size: 12px; font-style: italic; color: #A8B475;">
        Exquisitely engineered by 
        <a href="https://www.tywebstudio.com" target="_blank" rel="noopener" style="font-weight: bold; text-decoration: underline;">
          TyWebStudio
        </a>
      </p>
    </div>
  `;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.body) {
        alert("Title and Content are required.");
        return;
    }
    
    setLoading(true);

    try {
      // Logic: Combine the user's text with your professional backlink
      // Note: We use a 'content' field in Sanity to store the raw HTML
      const doc = {
        _type: 'post',
        title: formData.title,
        slug: { 
            _type: 'slug', 
            current: formData.title.toLowerCase().replace(/\s+/g, '-').slice(0, 96) 
        },
        description: formData.description,
        // Using the array format for Sanity's PortableText, but appending the backlink
        body: [
          {
            _type: 'block',
            children: [{ _type: 'span', text: formData.body }],
          },
          {
            _type: 'block',
            children: [
              { _type: 'span', text: "Exquisitely engineered by " },
              {
                _type: 'span',
                marks: ['link'],
                text: 'TyWebStudio',
              }
            ],
            markDefs: [
              {
                _key: 'link',
                _type: 'link',
                href: 'https://www.tywebstudio.com',
              }
            ]
          }
        ],
      };

      await writeClient.create(doc);
      
      alert("🚀 SEO Article Deployed to Google Engine!");
      setFormData({ title: "", description: "", body: "" });
    } catch (err) {
      console.error("Cloud Error:", err);
      alert("Deployment Failed. Check Sanity Write Token.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#1B4D3E] min-h-screen p-6 md:p-20 text-white">
      <div className="max-w-3xl mx-auto">
        
        <header className="mb-12">
            <span className="text-[#A8B475] font-black tracking-[0.4em] text-[10px] uppercase block mb-2">
                TyWebStudio Agency Engine
            </span>
            <h1 className="text-4xl md:text-6xl font-serif italic">Create SEO Content</h1>
        </header>
        
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/5 p-8 md:p-16 rounded-[4rem] backdrop-blur-xl border border-white/10 shadow-2xl"
        >
          <form onSubmit={handleSubmit} className="space-y-10">
            {/* ARTICLE TITLE */}
            <div className="space-y-2">
                <label className="text-[9px] font-black tracking-widest text-[#A8B475] uppercase">Target Keyword / Title</label>
                <input 
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    placeholder="e.g. Best BBQ Salmon in Flatbush" 
                    className="w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-[#A8B475] text-xl md:text-3xl font-serif italic transition-all" 
                />
            </div>

            {/* SEO SUMMARY */}
            <div className="space-y-2">
                <label className="text-[9px] font-black tracking-widest text-stone-400 uppercase">Google Search Snippet (Excerpt)</label>
                <textarea 
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    placeholder="A short summary for search engine results..." 
                    rows={2}
                    className="w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-[#A8B475] text-xs tracking-widest uppercase transition-all" 
                />
            </div>

            {/* MAIN BODY */}
            <div className="space-y-2">
                <label className="text-[9px] font-black tracking-widest text-stone-400 uppercase">Article Content</label>
                <textarea 
                    value={formData.body}
                    onChange={(e) => setFormData({...formData, body: e.target.value})}
                    placeholder="Write the exquisite soul of the brand here..." 
                    rows={12}
                    className="w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-[#A8B475] text-sm leading-relaxed font-light transition-all" 
                />
            </div>
            
            <button 
                type="submit"
                disabled={loading}
                className="w-full bg-[#A8B475] text-jusGreen py-7 rounded-full font-black tracking-[0.5em] uppercase hover:bg-white hover:scale-[1.02] active:scale-95 transition-all shadow-xl disabled:opacity-50"
            >
                {loading ? "INITIALIZING CLOUD DEPLOYMENT..." : "PUSH TO GOOGLE ENGINE"}
            </button>
          </form>
        </motion.div>

        <footer className="mt-12 text-center">
            <p className="text-[8px] font-bold text-white/20 tracking-[0.3em] uppercase">
                Secure Terminal Interface • TyWebStudio v1.0
            </p>
        </footer>
      </div>
    </div>
  );
}