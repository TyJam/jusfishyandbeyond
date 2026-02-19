"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// 1. DATA: THE CRAFT (FOOD)
const foodImages = [
  { src: "/images/gallery/bbq-chicken-brooklyn-flatbush-jus-fishy.webp", alt: "Signature Grilled Snapper" },
  { src: "/images/gallery/fry-salmon-jus-fishy-flatbush-brooklyn.jpg", alt: "Jerk Salmon Platter" },
  { src: "/images/gallery/fish-wings-brooklyn-flatbush.jpg", alt: "fish wings jus fish and beyond Restaurant" },
  { src: "/images/gallery/jus-dine-meal-plate-salmon-shrimp.jpg", alt: "dine meal at jus fishy restaurant" },
  { src: "/images/gallery/mac-n-cheese-brooklyn-flatbush.jpg", alt: "Caribbean mac and cheesee" }, // Hidden
  { src: "/images/gallery/snow-crab-brooklyn-jus-fishy.jpg", alt: "snow crab Caribeen style" },    // Hidden
];

// 2. DATA: THE CULTURE (PRETTY FACES)
const faceImages = [
  { src: "/images/prettyface/jus-family-affair-brooklyn-flatbush-restaurant.jpg", alt: "family affair brooklyn flatbush restaurant" },
  { src: "/images/prettyface/jus-fishy-branding-brooklyn-flatbush-resturant.jpg", alt: "A warm welcome" },
  { src: "/images/prettyface/jus-fishy-family-affair.jpg", alt: "The vibe at the bar" },
  { src: "/images/prettyface/jus-fishy-restaurant-events.jpg", alt: "Local regulars" },
  { src: "/images/prettyface/istockphoto-2000117676-612x612.jpg", alt: "Kitchen focus" }, // Hidden
];

export default function GalleryPage() {
  // 3. STATE: Separate index for each gallery
  const [foodIndex, setFoodIndex] = useState(-1);
  const [faceIndex, setFaceIndex] = useState(-1);

  // We only show the first 4 of each on the grid
  const visibleFood = foodImages.slice(0, 4);
  const visibleFaces = faceImages.slice(0, 4);

  return (
    <div className="p-10 md:p-20 bg-[#fdfcf8] min-h-screen pb-40">
      <header className="mb-20">
        <h1 className="text-7xl font-serif text-[#1B4D3E] mb-4 underline decoration-[#A8B475]/30">The Gallery</h1>
        <p className="text-[#A8B475] text-[10px] tracking-[0.5em] font-black uppercase">Brooklyn Soul • The Craft & Culture</p>
      </header>

      {/* --- SECTION 1: THE CRAFT (FOOD) --- */}
      <section className="mb-32">
        <h2 className="text-4xl font-serif text-[#1B4D3E] mb-12 italic border-b border-stone-200 pb-4 w-fit">The Craft.</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {visibleFood.map((img, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 0.98 }}
              onClick={() => setFoodIndex(index)}
              className="cursor-pointer overflow-hidden rounded-[2.5rem] bg-stone-100 aspect-square group relative"
            >
              <img src={img.src} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt={img.alt} />
              
              {/* + MORE for Food */}
              {index === 3 && foodImages.length > 4 && (
                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center text-white text-xs font-black tracking-widest uppercase">
                  + {foodImages.length - 4} More Plates
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- SECTION 2: THE CULTURE (PRETTY FACES) --- */}
      <section>
        <h2 className="text-4xl font-serif text-[#1B4D3E] mb-12 italic border-b border-stone-200 pb-4 w-fit">The Culture.</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {visibleFaces.map((img, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 0.98 }}
              onClick={() => setFaceIndex(index)}
              className="cursor-pointer overflow-hidden rounded-[2.5rem] bg-stone-100 aspect-square group relative"
            >
              <img src={img.src} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt={img.alt} />
              
              {/* + MORE for Faces */}
              {index === 3 && faceImages.length > 4 && (
                <div className="absolute inset-0 bg-jusGreen/80 backdrop-blur-sm flex items-center justify-center text-white text-xs font-black tracking-widest uppercase">
                  + {faceImages.length - 4} More Faces
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- SEPARATE LIGHTBOXES --- */}
      <Lightbox
        index={foodIndex}
        open={foodIndex >= 0}
        close={() => setFoodIndex(-1)}
        slides={foodImages}
        styles={{ container: { backgroundColor: "rgba(0, 0, 0, .9)" } }}
      />

      <Lightbox
        index={faceIndex}
        open={faceIndex >= 0}
        close={() => setFaceIndex(-1)}
        slides={faceImages}
        styles={{ container: { backgroundColor: "rgba(27, 77, 62, .95)" } }} // Green tint for team photos
      />
    </div>
  );
}