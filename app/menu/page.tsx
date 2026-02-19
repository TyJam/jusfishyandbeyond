import { Metadata } from "next";
import MenuGrid from "./MenuGrid";
import { menuSections } from "@/lib/menuData";

// 1. ADVANCED METADATA
export const metadata: Metadata = {
  title: "Our Signature Menu | Fresh Brooklyn Seafood | Jus Fishy & Beyond",
  description: "Explore the best BBQ salmon, steamed snapper, and Caribbean specialties in Flatbush. High-performance, made-to-order seafood menu with Brooklyn soul.",
  keywords: ["Seafood Flatbush", "BBQ Salmon Brooklyn", "Jus Fishy Menu", "Caribbean Catering Brooklyn"],
  openGraph: {
    title: "The Signature Menu | Jus Fishy & Beyond",
    description: "Authentic, fresh, and made-to-order seafood on Flatbush Ave.",
    images: [{ url: "/jus-fishy-seafood-restaurant-brooklyn.jpg" }],
  }
};

export default function MenuPage() {
  // 2. JSON-LD STRUCTURED DATA (The Secret SEO Engine)
  // This tells Google exactly what items we sell so they can show them in search
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Menu",
    "name": "Jus Fishy & Beyond Signature Menu",
    "description": "Authentic Caribbean and Brooklyn seafood menu",
    "hasMenuSection": menuSections.map((section) => ({
      "@type": "MenuSection",
      "name": section.title,
      "hasMenuItem": section.items.map((item) => ({
        "@type": "MenuItem",
        "name": item,
        "description": `Freshly prepared ${item} at Jus Fishy Brooklyn.`
      }))
    }))
  };

  return (
    <main className="bg-[#fdfcf8] min-h-screen p-6 md:p-12 pb-40">
      {/* Inject Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="mb-12 max-w-7xl mx-auto">
        <h1 className="text-5xl font-serif text-[#1B4D3E] mb-2">Our Signature Menu</h1>
        <p className="text-[#A8B475] text-[10px] font-black tracking-[0.3em] uppercase">
          Flatbush Avenue • Brooklyn Soul • Made To Order
        </p>
      </header>

      {/* RENDER THE CLIENT GRID */}
      <MenuGrid />
    </main>
  );
}