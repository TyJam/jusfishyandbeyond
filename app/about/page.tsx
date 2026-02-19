import { Metadata } from "next";
import AboutContent from "./AboutContent";

// 1. ADVANCED METADATA
export const metadata: Metadata = {
  title: "Our Story | The Legacy of Jus Fishy & Beyond Brooklyn",
  description: "Founded in 2018 on Flatbush Avenue, Jus Fishy & Beyond is dedicated to authentic Caribbean seafood traditions and Brooklyn soul. Learn about our commitment to freshness and community.",
  keywords: ["Jus Fishy History", "Seafood Flatbush Brooklyn", "Caribbean Culinary Traditions", "Brooklyn Restaurant Legacy"],
  openGraph: {
    title: "The Soul of Flatbush: Our Story | Jus Fishy & Beyond",
    description: "Authentic Caribbean flavors meeting Brooklyn heritage since 2018.",
    images: [{ url: "/images/prettyface/jus-fishy-branding-brooklyn-flatbush-resturant.jpg" }],
  }
};

export default function AboutPage() {
  // 2. JSON-LD RESTAURANT SCHEMA (Strengthens Local SEO)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Jus Fishy & Beyond",
    "description": "Authentic Caribbean seafood restaurant in Flatbush, Brooklyn since 2018.",
    "openingHours": "Mo-Sa 11:00-22:00",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1059 Flatbush Ave",
      "addressLocality": "Brooklyn",
      "addressRegion": "NY",
      "postalCode": "11226"
    },
    "founder": {
      "@type": "Person",
      "name": "The Jus Fishy Team"
    }
  };

  return (
    <main className="bg-white min-h-screen p-6 md:p-20 pb-40 overflow-hidden">
      {/* Inject Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <AboutContent />

      {/* 3. SEO-DRIVEN QUOTE SECTION */}
      <div className="mt-40 max-w-4xl mx-auto text-center border-t border-stone-100 pt-20">
         <h2 className="text-3xl font-serif italic text-stone-300 mb-6">
           "Seasoned with respect, served with soul."
         </h2>
         <p className="text-[10px] font-black tracking-widest text-[#A8B475] uppercase">
           The Jus Fishy Philosophy
         </p>
      </div>
    </main>
  );
}