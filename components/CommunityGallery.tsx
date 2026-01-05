import { motion } from "framer-motion";

const galleryItems = [
  { type: 'face', src: '/images/fry-salmon-jus-fishy-flatbush-brooklyn.jpg', alt: 'Chef  seasoning fry salmon ', size: 'tall' },
  { type: 'food', src: '/images/jerk-salmon-close.jpg', alt: 'Glistening Jerk Salmon', size: 'square' },
  { type: 'vibe', src: '/images/storefront-action.jpg', alt: 'Busy night at Jus Fishy', size: 'wide' },
  { type: 'face', src: '/images/smiling-service.jpg', alt: 'Friendly face at the counter', size: 'square' },
];

export default function CommunityGallery() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="mb-12">
        <h2 className="text-[#1B4D3E] font-serif italic text-4xl mb-2">Soul of the Neighborhood</h2>
        <p className="text-stone-400 text-[10px] tracking-[0.3em] uppercase">People • Passion • Plates</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
        {galleryItems.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 0.98 }}
            className={`relative rounded-3xl overflow-hidden bg-stone-100 ${
              item.size === 'tall' ? 'row-span-2' : 
              item.size === 'wide' ? 'col-span-2' : ''
            }`}
          >
            <img 
              src={item.src} 
              alt={item.alt} 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
            />
            {/* SEO Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity p-6 flex flex-col justify-end">
               <p className="text-white text-[10px] font-bold tracking-widest uppercase">{item.type}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}