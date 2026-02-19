"use strict";
exports.__esModule = true;
exports.metadata = void 0;
var GalleryGrid_1 = require("./GalleryGrid");
exports.metadata = {
    title: "The Gallery | Soul of Brooklyn Seafood | Jus Fishy & Beyond",
    description: "Experience the craft and culture of Flatbush. View our signature BBQ salmon, fried seafood platters, and the family behind Brooklyn's favorite seafood landmark.",
    openGraph: {
        title: "Seafood & Soul Gallery | Jus Fishy & Beyond",
        description: "Visual journey through the best seafood in Flatbush, Brooklyn.",
        images: [{ url: "/images/gallery/bbq-chicken-brooklyn-flatbush-jus-fishy.webp" }]
    }
};
function GalleryPage() {
    // JSON-LD IMAGE GALLERY SCHEMA
    var jsonLd = {
        "@context": "https://schema.org",
        "@type": "ImageGallery",
        "name": "Jus Fishy & Beyond Visual Gallery",
        "description": "Photos of authentic Caribbean seafood and the Brooklyn community.",
        "publisher": {
            "@type": "Restaurant",
            "name": "Jus Fishy & Beyond",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "1059 Flatbush Ave",
                "addressLocality": "Brooklyn",
                "addressRegion": "NY"
            }
        }
    };
    return (React.createElement("main", { className: "p-6 md:p-20 bg-[#fdfcf8] min-h-screen pb-40" },
        React.createElement("script", { type: "application/ld+json", dangerouslySetInnerHTML: { __html: JSON.stringify(jsonLd) } }),
        React.createElement("header", { className: "mb-20 max-w-7xl mx-auto" },
            React.createElement("h1", { className: "text-7xl font-serif text-[#1B4D3E] mb-4 underline decoration-[#A8B475]/30" }, "The Gallery"),
            React.createElement("p", { className: "text-[#A8B475] text-[10px] tracking-[0.5em] font-black uppercase" }, "Brooklyn Soul \u2022 The Craft & Culture")),
        React.createElement(GalleryGrid_1["default"], null)));
}
exports["default"] = GalleryPage;
