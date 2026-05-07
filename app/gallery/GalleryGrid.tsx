"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function GalleryGrid({ foodImages, faceImages }: any) {
  const [foodIndex, setFoodIndex] = useState(-1);
  const [faceIndex, setFaceIndex] = useState(-1);

  // Show only 4 thumbnails on the grid, but keep all in the lightbox loop
  const visibleFood = foodImages.slice(0, 4);
  const visibleFaces = faceImages.slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto">
      {/* SECTION 1: THE CRAFT */}
      <section className="mb-32">
        <h2 className="text-4xl font-serif italic text-[#1B4D3E] mb-12 border-b border-stone-100 pb-4 w-fit">The Craft.</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {visibleFood.map((img: any, index: number) => (
            <motion.figure 
              key={img._id} 
              whileHover={{ scale: 0.98 }}
              onClick={() => setFoodIndex(index)}
              className="cursor-pointer overflow-hidden rounded-[2.5rem] bg-stone-100 aspect-square group relative"
            >
              <Image src={img.src} alt={img.title} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" unoptimized />
              {index === 3 && foodImages.length > 4 && (
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-white text-[10px] font-black tracking-widest uppercase z-10">
                  + {foodImages.length - 4} More Plates
                </div>
              )}
            </motion.figure>
          ))}
        </div>
      </section>

      {/* SECTION 2: THE CULTURE */}
      <section>
        <h2 className="text-4xl font-serif italic text-[#1B4D3E] mb-12 border-b border-stone-100 pb-4 w-fit">The Culture.</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {visibleFaces.map((img: any, index: number) => (
            <motion.figure 
              key={img._id} 
              whileHover={{ scale: 0.98 }}
              onClick={() => setFaceIndex(index)}
              className="cursor-pointer overflow-hidden rounded-[2.5rem] bg-stone-100 aspect-square group relative"
            >
              <Image src={img.src} alt={img.title} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" unoptimized />
              {index === 3 && faceImages.length > 4 && (
                <div className="absolute inset-0 bg-[#1B4D3E]/90 flex items-center justify-center text-white text-[10px] font-black tracking-widest uppercase z-10">
                  + {faceImages.length - 4} More Faces
                </div>
              )}
            </motion.figure>
          ))}
        </div>
      </section>

      <Lightbox index={foodIndex} open={foodIndex >= 0} close={() => setFoodIndex(-1)} slides={foodImages.map((i:any) => ({src: i.src}))} />
      <Lightbox index={faceIndex} open={faceIndex >= 0} close={() => setFaceIndex(-1)} slides={faceImages.map((i:any) => ({src: i.src}))} />
    </div>
  );
}