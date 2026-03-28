"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function AdminCreatePost() {
  const [formData, setFormData] = useState({ title: "", slug: "", description: "", body: "" });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [includeBacklink, setIncludeBacklink] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (formData.title && !formData.slug) {
      const generatedSlug = formData.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
      setFormData(prev => ({ ...prev, slug: generatedSlug }));
    }
  }, [formData.title]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !imageFile) return alert("Image and Title are required.");
    
    setLoading(true);
    const data = new FormData();
    data.append('title', formData.title);
    data.append('slug', formData.slug);
    data.append('description', formData.description);
    data.append('body', formData.body);
    data.append('image', imageFile);
    data.append('includeBacklink', String(includeBacklink));

    try {
      const res = await fetch('/api/deploy', { method: 'POST', body: data });
      if (res.ok) {
          alert("🚀 DEPLOYED: Your SEO Story is live on the global grid!");
          setFormData({ title: "", slug: "", description: "", body: "" });
          setImageFile(null);
      } else {
          const err = await res.json();
          alert(`Permission Error: ${err.error}`);
      }
    } catch (err) {
      alert("System Error. Check connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#1B4D3E] min-h-screen p-6 md:p-20 text-white">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12 flex justify-between items-end">
            <div>
                <p className="text-[#A8B475] font-black tracking-[0.4em] text-[10px] uppercase mb-2">TyWebStudio Command Center</p>
                <h1 className="text-5xl md:text-7xl font-serif italic tracking-tighter">Deploy Content.</h1>
            </div>
            <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                <input type="checkbox" checked={includeBacklink} onChange={(e) => setIncludeBacklink(e.target.checked)} className="accent-[#A8B475]"/>
                <label className="text-[9px] font-black tracking-widest uppercase text-stone-300">Add Agency Vouch</label>
            </div>
        </header>
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white/5 p-8 md:p-16 rounded-[4rem] backdrop-blur-3xl border border-white/10 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-10">
            <div className="space-y-4 text-center">
              <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-white/10 rounded-[3rem] cursor-pointer hover:bg-white/5 transition-all">
                  <p className="text-sm text-stone-400 font-light">{imageFile ? `Ready: ${imageFile.name}` : "Select SEO Visual Asset"}</p>
                <input type="file" className="hidden" accept="image/*" onChange={(e) => setImageFile(e.target.files ? e.target.files[0] : null)} />
              </label>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <input value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} placeholder="Article Title" className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-[#A8B475] text-xl font-serif italic" />
                <input value={formData.slug} onChange={(e) => setFormData({...formData, slug: e.target.value})} placeholder="url-slug" className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-[#A8B475] text-sm font-mono text-[#A8B475]" />
            </div>
            <textarea value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} placeholder="SEO Snippet..." rows={2} className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-[#A8B475] text-xs leading-relaxed" />
            <textarea value={formData.body} onChange={(e) => setFormData({...formData, body: e.target.value})} placeholder="Tell the soul of the story here. Use Enter for paragraphs..." rows={10} className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-[#A8B475] text-sm font-light leading-[2]" />
            <button type="submit" disabled={loading} className="w-full bg-[#A8B475] text-jusGreen py-8 rounded-full font-black tracking-[0.6em] uppercase hover:bg-white hover:text-black transition-all shadow-xl">
                {loading ? "COMMUNICATING WITH CLOUD..." : "LAUNCH TO GOOGLE ENGINE"}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}