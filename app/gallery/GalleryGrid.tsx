"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image"; // Senior Move: High-performance Image component
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// 1. DATA: THE CRAFT (FOOD)
const foodImages = [
  { src: "/images/gallery/bbq-chicken-brooklyn-flatbush-jus-fishy.webp", alt: "Authentic BBQ Chicken Tray - Jus Fishy Brooklyn" },
  { src: "/images/gallery/fry-salmon-jus-fishy-flatbush-brooklyn.jpg", alt: "Crispy Fried Salmon Platter" },
  { src: "/images/gallery/fish-wings-brooklyn-flatbush.jpg", alt: "Signature Fish Wings - Flatbush Seafood" },
  { src: "/images/gallery/jus-dine-meal-plate-salmon-shrimp.jpg", alt: "Seafood Combo: Salmon and Shrimp" },
  { src: "/images/gallery/mac-n-cheese-brooklyn-flatbush.jpg", alt: "Caribbean Style Mac and Cheese" },
  { src: "/images/gallery/snow-crab-brooklyn-jus-fishy.jpg", alt: "Snow Crab Legs - Jus Fishy Special" },
];

// 2. DATA: THE CULTURE (PRETTY FACES)
const faceImages = [
  { src: "/images/prettyface/jus-family-affair-brooklyn-flatbush-restaurant.jpg", alt: "The Jus Fishy Family on Flatbush Ave" },
  { src: "/images/prettyface/jus-fishy-branding-brooklyn-flatbush-resturant.jpg", alt: "Bespoke Branding and Soulful Service" },
  { src: "/images/prettyface/jus-fishy-family-affair.jpg", alt: "Community and Culture at Jus Fishy" },
  { src: "/images/prettyface/jus-fishy-restaurant-events.jpg", alt: "Events and Neighborhood Vibes" },
  { src: "/images/prettyface/istockphoto-2000117676-612x612.jpg", alt: "Inside the Jus Fishy Kitchen" },
];

export default function GalleryGrid() {
  const [foodIndex, setFoodIndex] = useState(-1);
  const [faceIndex, setFaceIndex] = useState(-1);

  const visibleFood = foodImages.slice(0, 4);
  const visibleFaces = faceImages.slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-0">
      
      {/* --- SECTION 1: THE CRAFT --- */}
      <section className="mb-32" aria-labelledby="craft-heading">
        <h2 id="craft-heading" className="text-4xl font-serif text-[#1B4D3E] mb-12 italic border-b border-stone-200 pb-4 w-fit">The Craft.</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {visibleFood.map((img, index) => (
            <motion.figure 
              key={index}
              whileHover={{ scale: 0.98 }}
              onClick={() => setFoodIndex(index)}
              className="cursor-pointer overflow-hidden rounded-[2.5rem] bg-stone-100 aspect-square group relative"
            >
              <Image 
                src={img.src} 
                alt={img.alt}
                fill // Automatically fills the aspect-square container
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                unoptimized={true} // Required for 'output: export' static builds
              />
              {index === 3 && foodImages.length > 4 && (
                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center text-white text-xs font-black tracking-widest uppercase z-10">
                  + {foodImages.length - 4} More Plates
                </div>
              )}
            </motion.figure>
          ))}
        </div>
      </section>

      {/* --- SECTION 2: THE CULTURE --- */}
      <section aria-labelledby="culture-heading">
        <h2 id="culture-heading" className="text-4xl font-serif text-[#1B4D3E] mb-12 italic border-b border-stone-200 pb-4 w-fit">The Culture.</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {visibleFaces.map((img, index) => (
            <motion.figure 
              key={index}
              whileHover={{ scale: 0.98 }}
              onClick={() => setFaceIndex(index)}
              className="cursor-pointer overflow-hidden rounded-[2.5rem] bg-stone-100 aspect-square group relative"
            >
              <Image 
                src={img.src} 
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                unoptimized={true}
              />
              {index === 3 && faceImages.length > 4 && (
                <div className="absolute inset-0 bg-[#1B4D3E]/80 backdrop-blur-sm flex items-center justify-center text-white text-xs font-black tracking-widest uppercase z-10">
                  + {faceImages.length - 4} More Faces
                </div>
              )}
            </motion.figure>
          ))}
        </div>
      </section>

      {/* LIGHTBOXES */}
      <Lightbox 
        index={foodIndex} 
        open={foodIndex >= 0} 
        close={() => setFoodIndex(-1)} 
        slides={foodImages.map(img => ({ src: img.src, alt: img.alt }))} 
      />
      
      <Lightbox 
        index={faceIndex} 
        open={faceIndex >= 0} 
        close={() => setFaceIndex(-1)} 
        slides={faceImages.map(img => ({ src: img.src, alt: img.alt }))} 
      />
    </div>
  );
}