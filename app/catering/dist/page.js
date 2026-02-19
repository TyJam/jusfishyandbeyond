"use strict";
exports.__esModule = true;
exports.metadata = void 0;
var CateringGrid_1 = require("./CateringGrid");
var cateringData_1 = require("@/lib/cateringData");
// 1. ADVANCED METADATA (Targets Corporate & High-Ticket Keywords)
exports.metadata = {
    title: "Caribbean Event Catering Brooklyn | Oxtail, Jerk & Seafood Trays",
    description: "Elite Caribbean catering for corporate lunches and private events in Flatbush, Brooklyn. Featuring oxtail, jerk chicken, and fresh seafood trays. Authentic Brooklyn soul since 1987.",
    keywords: ["Brooklyn Event Catering", "Caribbean Catering NYC", "Corporate Lunch Brooklyn", "Oxtail Catering Tray", "Jerk Chicken Party Tray"],
    openGraph: {
        title: "Catering & Private Events | Jus Fishy & Beyond",
        description: "Professional Caribbean trays and soulful service for all NYC events.",
        images: [{ url: "/images/gallery/bbq-chicken-brooklyn-flatbush-jus-fishy.webp" }]
    }
};
function CateringPage() {
    // 2. JSON-LD CATERING SERVICE SCHEMA (The Secret Sauce)
    var jsonLd = {
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
        "serviceOutput": cateringData_1.cateringSections.map(function (section) { return section.title; }).join(", "),
        "areaServed": "New York City"
    };
    return (React.createElement("main", { className: "bg-[#fdfcf8] min-h-screen p-6 md:p-20 pb-40" },
        React.createElement("script", { type: "application/ld+json", dangerouslySetInnerHTML: { __html: JSON.stringify(jsonLd) } }),
        React.createElement("header", { className: "mb-20 max-w-7xl mx-auto" },
            React.createElement("h1", { className: "text-6xl md:text-8xl font-serif text-[#1B4D3E] mb-4" }, "Catering."),
            React.createElement("p", { className: "text-[#A8B475] text-[10px] font-black tracking-[0.4em] uppercase" }, "Brooklyn Events \u2022 Professional Service \u2022 Family Legacy")),
        React.createElement(CateringGrid_1["default"], null),
        React.createElement("div", { className: "mt-32 max-w-4xl mx-auto text-center border-t border-stone-200 pt-20" },
            React.createElement("p", { className: "text-xl font-serif italic text-[#1B4D3E] mb-6" }, "Serving the Five Boroughs"),
            React.createElement("p", { className: "text-stone-500 text-sm leading-relaxed" }, "From our kitchen at 1059 Flatbush Ave, we provide professional catering services to Manhattan, Queens, and the Bronx. Specializing in high-volume orders for office lunches, weddings, and neighborhood gatherings."))));
}
exports["default"] = CateringPage;
