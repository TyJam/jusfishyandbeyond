import { Metadata } from "next";
import { MapPin, Phone, Instagram } from "lucide-react";
import ContactForm from "./ContactForm";

// 1. MASTER SEO METADATA
export const metadata: Metadata = {
  title: "Contact Us | Event Catering & Dine-In | Jus Fishy & Beyond Brooklyn",
  description: "Book your next corporate event or private party at Jus Fishy & Beyond. Located at 1059 Flatbush Ave, Brooklyn. Authentic Caribbean seafood and soulful catering services.",
  keywords: ["Catering Brooklyn", "Seafood Flatbush", "Corporate Lunch NYC", "Jus Fishy Phone Number", "Private Event Space Brooklyn"],
  openGraph: {
    title: "Connect with Jus Fishy & Beyond | Brooklyn Seafood Soul",
    description: "Inquire about our premium catering services or visit our Flatbush location.",
    url: "https://www.jusfishyandbeyond.com/contact",
    images: [{ url: "/jus-fishy-seafood-restaurant-flatbush-brooklyn.webp" }]
  }
};

export default function ContactPage() {
  // 2. JSON-LD MASTER SCHEMA (The "Out of this World" SEO)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "Restaurant",
      "name": "Jus Fishy & Beyond",
      "image": "https://www.jusfishyandbeyond.com/jus-fishy-seafood-restaurant-flatbush-brooklyn.webp",
      "telephone": "+1-347-442-1172",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1059 Flatbush Ave",
        "addressLocality": "Brooklyn",
        "addressRegion": "NY",
        "postalCode": "11226",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 40.6482,
        "longitude": -73.9571
      },
      "url": "https://www.jusfishyandbeyond.com/contact"
    }
  };

  return (
    <main className="bg-[#fdfcf8] min-h-screen p-6 md:p-20 pb-40">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
        {/* INFO SIDE */}
        <div className="animate-in fade-in slide-in-from-left-4 duration-1000">
          <p className="text-[#A8B475] font-black tracking-[0.5em] text-[10px] uppercase mb-8">Get in touch</p>
          <h1 className="text-6xl md:text-8xl font-serif text-[#1B4D3E] mb-12 italic">Connect.</h1>
          
          <div className="space-y-12">
            <div className="flex items-start gap-8 group">
              <div className="p-5 bg-white rounded-full shadow-sm text-[#1B4D3E] group-hover:bg-[#1B4D3E] group-hover:text-white transition-all"><MapPin size={24} /></div>
              <div>
                <h2 className="text-[10px] font-black tracking-widest text-[#A8B475] uppercase mb-2">The Landmark</h2>
                <p className="text-xl font-serif italic text-stone-800 leading-none">1059 Flatbush Ave</p>
                <p className="text-sm text-stone-400 mt-2 uppercase tracking-widest">Brooklyn, New York</p>
              </div>
            </div>

            <div className="flex items-start gap-8 group">
              <div className="p-5 bg-white rounded-full shadow-sm text-[#1B4D3E] group-hover:bg-[#1B4D3E] group-hover:text-white transition-all"><Phone size={24} /></div>
              <div>
                <h2 className="text-[10px] font-black tracking-widest text-[#A8B475] uppercase mb-2">Catering Hotline</h2>
                <a href="tel:3474421172" className="text-2xl font-serif italic text-stone-800 hover:text-[#A8B475] transition-all">347.442.1172</a>
              </div>
            </div>

            <div className="flex items-start gap-8 group">
              <div className="p-5 bg-white rounded-full shadow-sm text-[#1B4D3E] group-hover:bg-[#1B4D3E] group-hover:text-white transition-all"><Instagram size={24} /></div>
              <div>
                <h2 className="text-[10px] font-black tracking-widest text-[#A8B475] uppercase mb-2">Join the Culture</h2>
                <p className="text-xl font-serif italic text-stone-800 leading-none">@jusfishyandbeyond</p>
              </div>
            </div>
          </div>
        </div>

        {/* FORM SIDE */}
        <div className="bg-white p-10 md:p-16 rounded-[4rem] shadow-sm border border-stone-100 h-fit animate-in fade-in slide-in-from-right-4 duration-1000 delay-200">
           <h3 className="text-3xl font-serif italic text-[#1B4D3E] mb-12">The Inquiry Engine</h3>
           <ContactForm />
        </div>
      </div>
    </main>
  );
}