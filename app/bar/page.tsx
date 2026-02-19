import { Metadata } from "next";
import BarGrid from "./BarGrid";

// 1. ADVANCED METADATA (Nightlife & Local Keywords)
export const metadata: Metadata = {
  title: "The Bar & Lounge | Cocktails & Happy Hour | Jus Fishy & Beyond",
  description: "Experience the best signature rum punch, classic mojitos, and happy hour in Flatbush, Brooklyn. A modern Caribbean lounge vibe with soul. Open daily.",
  keywords: ["Brooklyn Lounge", "Flatbush Happy Hour", "Caribbean Cocktails NYC", "Best Rum Punch Brooklyn", "Flatbush Nightlife"],
  openGraph: {
    title: "Vibe & Flow: The Bar at Jus Fishy & Beyond",
    description: "Signature cocktails and the best Golden Hour in Brooklyn.",
    images: [{ url: "/images/prettyface/jus-fishy-branding-brooklyn-flatbush-resturant.jpg" }],
  }
};

export default function BarPage() {
  // 2. JSON-LD BAR SCHEMA
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BarOrPub",
    "name": "The Bar at Jus Fishy & Beyond",
    "description": "Premium Caribbean-inspired cocktail lounge and bar in Brooklyn.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1059 Flatbush Ave",
      "addressLocality": "Brooklyn",
      "addressRegion": "NY",
      "postalCode": "11226"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "11:00",
        "closes": "22:00"
      }
    ],
    "servesCuisine": "Caribbean Cocktails, Beer, Wine"
  };

  return (
    <main className="bg-black min-h-screen p-6 md:p-20 pb-40 overflow-hidden">
      {/* Inject Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="mb-20 max-w-6xl mx-auto">
        <p className="text-[#C5A059] font-bold tracking-[0.5em] text-[10px] uppercase mb-4">
          the bar & lounge
        </p>
        <h1 className="text-6xl md:text-9xl font-serif text-white italic leading-none">
          Vibe & <span className="text-white/10 underline decoration-[#C5A059] underline-offset-8">Flow.</span>
        </h1>
      </header>

      {/* Render the Animated Client Grid */}
      <BarGrid />
    </main>
  );
}