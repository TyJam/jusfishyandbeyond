"use client";
import { useState, useEffect } from "react";
import { writeClient } from "@/lib/sanity";
import { motion } from "framer-motion";

export default function AdminCreatePost() {
  const [formData, setFormData] = useState({ 
    title: "", 
    slug: "", 
    description: "", 
    body: "" 
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [includeBacklink, setIncludeBacklink] = useState(true);
  const [loading, setLoading] = useState(false);

  // 1. AUTO-SLUGGING ENGINE (SEO Best Practice)
  useEffect(() => {
    if (formData.title && !formData.slug) {
      const generatedSlug = formData.title
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]+/g, '');
      setFormData(prev => ({ ...prev, slug: generatedSlug }));
    }
  }, [formData.title]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.body || !imageFile || !formData.slug) {
        alert("All fields including Image and Slug are required for Master SEO.");
        return;
    }
    
    setLoading(true);

    try {
      // 2. CLOUD ASSET UPLOAD
      const imageAsset = await writeClient.assets.upload('image', imageFile, {
        filename: imageFile.name,
      });

      // 3. PARAGRAPH SPLITTING LOGIC (Senior Architect Move)
      // This splits your text into individual Sanity blocks for better SEO
      const bodyBlocks = formData.body.split('\n').filter(p => p.trim() !== "").map(para => ({
        _type: 'block',
        children: [{ _type: 'span', text: para.trim() }],
      }));

      // 4. THE MASTER BACKLINK (The Agency "Vouch")
      if (includeBacklink) {
        bodyBlocks.push({
          _type: 'block',
          children: [
            { _type: 'span', text: 'Exquisitely engineered by ' },
            {
              _type: 'span',
              marks: ['tyweb-link'],
              text: 'TyWebStudio.com',
            },
          ],
          markDefs: [
            {
              _key: 'tyweb-link',
              _type: 'link',
              href: 'https://www.tywebstudio.com',
            },
          ],
        });
      }

      const doc = {
        _type: 'post',
        title: formData.title,
        slug: { _type: 'slug', current: formData.slug.toLowerCase() },
        description: formData.description,
        mainImage: {
          _type: 'image',
          asset: { _type: "reference", _ref: imageAsset._id },
        },
        body: bodyBlocks,
      };

      await writeClient.create(doc);
      
      alert("🚀 SUCCESS: SEO Engine Synchronized & Live!");
      setFormData({ title: "", slug: "", description: "", body: "" });
      setImageFile(null);
    } catch (err) {
      console.error("Systems Error:", err);
      alert("Deployment Failed. Check Sanity Write Token Permissions.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#1B4D3E] min-h-screen p-6 md:p-20 text-white selection:bg-[#A8B475]/30">
      <div className="max-w-4xl mx-auto">
        
        <header className="mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
            <div>
                <span className="text-[#A8B475] font-black tracking-[0.4em] text-[10px] uppercase block mb-2">
                    TyWebStudio Agency Engine v1.1
                </span>
                <h1 className="text-5xl md:text-7xl font-serif italic tracking-tighter">Deploy Content.</h1>
            </div>
            <div className="flex items-center gap-3 bg-white/5 px-6 py-3 rounded-full border border-white/10">
                <input 
                    type="checkbox" 
                    id="backlink" 
                    checked={includeBacklink} 
                    onChange={(e) => setIncludeBacklink(e.target.checked)}
                    className="accent-[#A8B475]"
                />
                <label htmlFor="backlink" className="text-[9px] font-black tracking-widest uppercase text-stone-300 cursor-pointer">
                    Include Agency Vouch
                </label>
            </div>
        </header>
        
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/5 p-8 md:p-16 rounded-[4rem] backdrop-blur-3xl border border-white/10 shadow-2xl"
        >
          <form onSubmit={handleSubmit} className="space-y-12">
            
            {/* 1. IMAGE UPLOAD AREA */}
            <div className="group space-y-4">
              <label className="text-[10px] font-black tracking-widest text-[#A8B475] uppercase">Featured Visual Asset</label>
              <label className="flex flex-col items-center justify-center w-full h-44 border-2 border-dashed border-white/10 rounded-[3rem] cursor-pointer hover:bg-white/5 hover:border-[#A8B475]/40 transition-all group">
                <div className="text-center p-6">
                  <p className="text-sm text-stone-400 font-light group-hover:text-white transition-colors">
                    {imageFile ? `Ready: ${imageFile.name}` : "Drop or select culinary photography"}
                  </p>
                  <p className="text-[8px] text-stone-600 mt-2 uppercase tracking-widest">Supports JPG, PNG, WEBP</p>
                </div>
                <input type="file" className="hidden" accept="image/*" onChange={(e) => setImageFile(e.target.files ? e.target.files[0] : null)} />
              </label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* 2. TITLE */}
                <div className="space-y-2 text-left">
                    <label className="text-[10px] font-black tracking-widest text-stone-400 uppercase">Master Keyword (H1)</label>
                    <input 
                        value={formData.title}
                        onChange={(e) => setFormData({...formData, title: e.target.value})}
                        placeholder="Exquisite BBQ Salmon..." 
                        className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-[#A8B475] text-xl font-serif italic transition-all" 
                    />
                </div>

                {/* 3. SLUG OVERRIDE */}
                <div className="space-y-2 text-left">
                    <label className="text-[10px] font-black tracking-widest text-stone-400 uppercase">URL Structure (Slug)</label>
                    <input 
                        value={formData.slug}
                        onChange={(e) => setFormData({...formData, slug: e.target.value})}
                        placeholder="best-bbq-salmon-brooklyn" 
                        className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-[#A8B475] text-sm font-mono text-[#A8B475]" 
                    />
                </div>
            </div>

            {/* 4. META DESCRIPTION */}
            <div className="space-y-2 text-left">
                <label className="text-[10px] font-black tracking-widest text-stone-400 uppercase">Google Search Excerpt (Snippet)</label>
                <textarea 
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    rows={2}
                    className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-[#A8B475] text-xs leading-relaxed" 
                />
            </div>

            {/* 5. BODY CONTENT */}
            <div className="space-y-2 text-left">
                <label className="text-[10px] font-black tracking-widest text-stone-400 uppercase">The Narrative (Content Engine)</label>
                <textarea 
                    value={formData.body}
                    onChange={(e) => setFormData({...formData, body: e.target.value})}
                    placeholder="Describe the soul of the dish. Use Enters to create professional paragraphs..." 
                    rows={12}
                    className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-[#A8B475] text-sm font-light leading-[2]" 
                />
            </div>
            
            <button 
                type="submit"
                disabled={loading}
                className="w-full bg-[#A8B475] text-jusGreen py-8 rounded-full font-black tracking-[0.6em] uppercase hover:bg-white hover:text-black hover:scale-[1.01] active:scale-95 transition-all shadow-2xl disabled:opacity-50"
            >
                {loading ? "COMMUNICATING WITH CLOUD..." : "LAUNCH TO GOOGLE ENGINE"}
            </button>
          </form>
        </motion.div>
        
        <div className="mt-16 text-center opacity-20 hover:opacity-100 transition-opacity">
            <p className="text-[7px] font-bold tracking-[0.5em] uppercase">
                Secured Infrastructure • Built by TyWebStudio.com
            </p>
        </div>
      </div>
    </div>
  );
}