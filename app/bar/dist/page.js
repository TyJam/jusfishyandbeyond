"use strict";
exports.__esModule = true;
exports.metadata = void 0;
var BarGrid_1 = require("./BarGrid");
// 1. ADVANCED METADATA (Nightlife & Local Keywords)
exports.metadata = {
    title: "The Bar & Lounge | Cocktails & Happy Hour | Jus Fishy & Beyond",
    description: "Experience the best signature rum punch, classic mojitos, and happy hour in Flatbush, Brooklyn. A modern Caribbean lounge vibe with soul. Open daily.",
    keywords: ["Brooklyn Lounge", "Flatbush Happy Hour", "Caribbean Cocktails NYC", "Best Rum Punch Brooklyn", "Flatbush Nightlife"],
    openGraph: {
        title: "Vibe & Flow: The Bar at Jus Fishy & Beyond",
        description: "Signature cocktails and the best Golden Hour in Brooklyn.",
        images: [{ url: "/images/prettyface/jus-fishy-branding-brooklyn-flatbush-resturant.jpg" }]
    }
};
function BarPage() {
    // 2. JSON-LD BAR SCHEMA
    var jsonLd = {
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
    return (React.createElement("main", { className: "bg-black min-h-screen p-6 md:p-20 pb-40 overflow-hidden" },
        React.createElement("script", { type: "application/ld+json", dangerouslySetInnerHTML: { __html: JSON.stringify(jsonLd) } }),
        React.createElement("header", { className: "mb-20 max-w-6xl mx-auto" },
            React.createElement("p", { className: "text-[#C5A059] font-bold tracking-[0.5em] text-[10px] uppercase mb-4" }, "the bar & lounge"),
            React.createElement("h1", { className: "text-6xl md:text-9xl font-serif text-white italic leading-none" },
                "Vibe & ",
                React.createElement("span", { className: "text-white/10 underline decoration-[#C5A059] underline-offset-8" }, "Flow."))),
        React.createElement(BarGrid_1["default"], null)));
}
exports["default"] = BarPage;
