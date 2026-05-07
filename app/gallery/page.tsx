import { Metadata } from "next";
import { client } from "@/lib/sanity";
import GalleryGrid from "./GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery | The Craft & Culture of Jus Fishy & Beyond Brooklyn",
  description: "Explore our visual archive of authentic Caribbean seafood and the Brooklyn community. View our signature BBQ salmon, fried platters, and the faces behind the soul.",
  openGraph: {
    title: "The Visual Legacy | Jus Fishy & Beyond",
    description: "Brooklyn's #1 Seafood destination, through the lens.",
    images: [{ url: "/jus-fishy-seafood-restaurant-flatbush-brooklyn.webp" }],
  }
};

export default async function GalleryPage() {
  // FETCH ALL GALLERY IMAGES FROM SANITY
  const query = `*[_type == "gallery"] | order(_createdAt desc) {
    _id,
    title,
    category,
    "src": image.asset->url
  }`;
  
  const allImages = await client.fetch(query);

  // SPLIT IMAGES INTO CATEGORIES
  const foodImages = allImages.filter((img: any) => img.category === 'food');
  const faceImages = allImages.filter((img: any) => img.category === 'face');

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "Jus Fishy & Beyond Visual Archive",
    "description": "A collection of ${foodImages.length} food plates and ${faceImages.length} community photos.",
    "publisher": { "@type": "Restaurant", "name": "Jus Fishy & Beyond" }
  };

  return (
    <main className="p-6 md:p-20 bg-[#fdfcf8] min-h-screen pb-40">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      <header className="mb-20 max-w-7xl mx-auto">
        <h1 className="text-7xl font-serif text-[#1B4D3E] mb-4 italic tracking-tighter">The Gallery.</h1>
        <p className="text-[#A8B475] text-[10px] tracking-[0.5em] font-black uppercase">Brooklyn Soul • The Craft & Culture</p>
      </header>

      {/* Passing the live cloud data to the Grid */}
      <GalleryGrid foodImages={foodImages} faceImages={faceImages} />
    </main>
  );
}