"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, BookOpen, UploadCloud } from "lucide-react";

export default function AdminDashboard() {
  const [mode, setMode] = useState<'post' | 'gallery'>('post');
  const [formData, setFormData] = useState({ title: "", slug: "", description: "", body: "", category: "food" });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [includeBacklink, setIncludeBacklink] = useState(true);
  const [loading, setLoading] = useState(false);

  // AUTO-SLUGGING
  useEffect(() => {
    if (mode === 'post' && formData.title && !formData.slug) {
      setFormData(prev => ({ ...prev, slug: formData.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '') }));
    }
  }, [formData.title, mode]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!imageFile || !formData.title) return alert("Image and Title are mandatory.");
    
    setLoading(true);
    const data = new FormData();
    data.append('uploadType', mode);
    data.append('image', imageFile);
    data.append('title', formData.title);
    
    if (mode === 'post') {
      data.append('slug', formData.slug);
      data.append('description', formData.description);
      data.append('body', formData.body);
      data.append('includeBacklink', String(includeBacklink));
    } else {
      data.append('category', formData.category);
    }

    try {
      const res = await fetch('/api/deploy', { method: 'POST', body: data });
      if (res.ok) {
          alert(`🚀 ${mode.toUpperCase()} DEPLOYED SUCCESSFULLY!`);
          setFormData({ title: "", slug: "", description: "", body: "", category: "food" });
          setImageFile(null);
      } else {
          const err = await res.json();
          alert(`Error: ${err.error}`);
      }
    } catch (err) {
      alert("System Connection Error.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#1B4D3E] min-h-screen p-6 md:p-20 text-white selection:bg-[#A8B475]/30">
      <div className="max-w-4xl mx-auto">
        
        <header className="mb-12 flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
                <p className="text-[#A8B475] font-black tracking-[0.4em] text-[10px] uppercase mb-2">TyWebStudio Command Center</p>
                <h1 className="text-5xl font-serif italic">Deploy Center.</h1>
            </div>

            {/* MODE TOGGLE */}
            <div className="flex bg-black/20 p-1 rounded-full border border-white/10">
                <button onClick={() => setMode('post')} className={`px-8 py-3 rounded-full text-[10px] font-black tracking-widest uppercase transition-all flex items-center gap-2 ${mode === 'post' ? 'bg-[#A8B475] text-jusGreen' : 'text-stone-400'}`}>
                    <BookOpen size={14}/> Story
                </button>
                <button onClick={() => setMode('gallery')} className={`px-8 py-3 rounded-full text-[10px] font-black tracking-widest uppercase transition-all flex items-center gap-2 ${mode === 'gallery' ? 'bg-[#A8B475] text-jusGreen' : 'text-stone-400'}`}>
                    <Camera size={14}/> Photo
                </button>
            </div>
        </header>
        
        <motion.div layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white/5 p-8 md:p-16 rounded-[4rem] backdrop-blur-3xl border border-white/10 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-10">
            
            {/* UNIFIED IMAGE UPLOAD */}
            <div className="space-y-4 text-center">
              <label className="text-[10px] font-black tracking-widest text-[#A8B475] uppercase">Visual Asset</label>
              <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-white/10 rounded-[3rem] cursor-pointer hover:bg-white/5 transition-all">
                  <UploadCloud size={24} className="mb-2 opacity-20"/>
                  <p className="text-xs text-stone-400 font-light px-10">{imageFile ? imageFile.name : "Select High-Res Image"}</p>
                <input type="file" className="hidden" accept="image/*" onChange={(e) => setImageFile(e.target.files ? e.target.files[0] : null)} />
              </label>
            </div>

            {/* DYNAMIC FIELDS BASED ON MODE */}
            <div className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-2">
                        <label className="text-[9px] font-black text-stone-400 uppercase tracking-widest">Asset Title (SEO Alt)</label>
                        <input value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} placeholder="Title..." className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-[#A8B475] text-xl font-serif italic" />
                    </div>

                    {mode === 'post' ? (
                        <div className="space-y-2">
                            <label className="text-[9px] font-black text-stone-400 uppercase tracking-widest">URL Slug</label>
                            <input value={formData.slug} onChange={(e) => setFormData({...formData, slug: e.target.value})} className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-[#A8B475] text-sm font-mono text-[#A8B475]" />
                        </div>
                    ) : (
                        <div className="space-y-2">
                            <label className="text-[9px] font-black text-stone-400 uppercase tracking-widest">Gallery Category</label>
                            <select value={formData.category} onChange={(e) => setFormData({...formData, category: e.target.value})} className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-[#A8B475] text-sm uppercase font-bold text-[#A8B475]">
                                <option value="food" className="bg-jusGreen">The Craft (Food)</option>
                                <option value="face" className="bg-jusGreen">The Culture (Faces)</option>
                            </select>
                        </div>
                    )}
                </div>

                {mode === 'post' && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-10">
                        <textarea value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} placeholder="Google Snippet..." rows={2} className="w-full bg-transparent border-b border-white/10 outline-none focus:border-[#A8B475] text-xs leading-relaxed" />
                        <textarea value={formData.body} onChange={(e) => setFormData({...formData, body: e.target.value})} placeholder="The soul of the story..." rows={8} className="w-full bg-transparent border-b border-white/10 outline-none focus:border-[#A8B475] text-sm font-light leading-[2]" />
                        <div className="flex items-center gap-3">
                            <input type="checkbox" checked={includeBacklink} onChange={(e) => setIncludeBacklink(e.target.checked)} className="accent-[#A8B475]"/>
                            <label className="text-[9px] font-black tracking-widest uppercase text-stone-400">Add TyWebStudio Credit</label>
                        </div>
                    </motion.div>
                )}
            </div>
            
            <button type="submit" disabled={loading} className="w-full bg-[#A8B475] text-jusGreen py-8 rounded-full font-black tracking-[0.6em] uppercase hover:bg-white hover:text-black transition-all shadow-xl">
                {loading ? "COMMUNICATING WITH CLOUD..." : `LAUNCH ${mode.toUpperCase()} TO ENGINE`}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}