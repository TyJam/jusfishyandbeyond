import { Metadata } from "next";
import CateringGrid from "./CateringGrid";
import { cateringSections } from "@/lib/cateringData";

// 1. ADVANCED METADATA (Targets Corporate & High-Ticket Keywords)
export const metadata: Metadata = {
  title: "Caribbean Event Catering Brooklyn | Oxtail, Jerk & Seafood Trays",
  description: "Elite Caribbean catering for corporate lunches and private events in Flatbush, Brooklyn. Featuring oxtail, jerk chicken, and fresh seafood trays. Authentic Brooklyn soul since 1987.",
  keywords: ["Brooklyn Event Catering", "Caribbean Catering NYC", "Corporate Lunch Brooklyn", "Oxtail Catering Tray", "Jerk Chicken Party Tray"],
  openGraph: {
    title: "Catering & Private Events | Jus Fishy & Beyond",
    description: "Professional Caribbean trays and soulful service for all NYC events.",
    images: [{ url: "/images/gallery/bbq-chicken-brooklyn-flatbush-jus-fishy.webp" }],
  }
};

export default function CateringPage() {
  // 2. JSON-LD CATERING SERVICE SCHEMA (The Secret Sauce)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CateringService",
    "name": "Jus Fishy & Beyond Catering",
    "description": "Authentic Caribbean and seafood catering for Brooklyn and NYC.",
    "provider": {
      "@type": "Restaurant",
      "name": "Jus Fishy & Beyond",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1059 Flatbush Ave",
        "addressLocality": "Brooklyn",
        "addressRegion": "NY",
        "postalCode": "11226"
      }
    },
    "serviceOutput": cateringSections.map(section => section.title).join(", "),
    "areaServed": "New York City"
  };

  return (
    <main className="bg-[#fdfcf8] min-h-screen p-6 md:p-20 pb-40">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="mb-20 max-w-7xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-serif text-[#1B4D3E] mb-4">Catering.</h1>
        <p className="text-[#A8B475] text-[10px] font-black tracking-[0.4em] uppercase">
          Brooklyn Events • Professional Service • Family Legacy
        </p>
      </header>

      {/* Render the Animated Client Grid */}
      <CateringGrid />

      {/* 3. LOCAL SEO FOOTER (Boosts Local Discovery) */}
      <div className="mt-32 max-w-4xl mx-auto text-center border-t border-stone-200 pt-20">
         <p className="text-xl font-serif italic text-[#1B4D3E] mb-6">Serving the Five Boroughs</p>
         <p className="text-stone-500 text-sm leading-relaxed">
            From our kitchen at 1059 Flatbush Ave, we provide professional catering services 
            to Manhattan, Queens, and the Bronx. Specializing in high-volume orders for 
            office lunches, weddings, and neighborhood gatherings.
         </p>
      </div>
    </main>
  );
}