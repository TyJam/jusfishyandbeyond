export default function BlogCTA() {
  return (
    <div className="mt-20 p-12 bg-[#1B4D3E] rounded-[3rem] text-center text-white">
      <h3 className="text-3xl font-serif italic mb-6">Hungry for the real thing?</h3>
      <p className="text-white/60 text-xs tracking-widest uppercase mb-10">Visit us at 1059 Flatbush Ave</p>
      <div className="flex flex-col md:flex-row gap-4 justify-center">
        <a href="/menu" className="bg-[#A8B475] px-10 py-4 rounded-full font-black text-[10px] tracking-widest uppercase">View Menu</a>
        <a href="tel:3474421172" className="bg-white text-jusBlack px-10 py-4 rounded-full font-black text-[10px] tracking-widest uppercase">Order Now</a>
      </div>
    </div>
  );
}