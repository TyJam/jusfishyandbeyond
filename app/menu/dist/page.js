"use strict";
exports.__esModule = true;
exports.metadata = void 0;
var MenuGrid_1 = require("./MenuGrid");
var menuData_1 = require("@/lib/menuData");
// 1. ADVANCED METADATA
exports.metadata = {
    title: "Our Signature Menu | Fresh Brooklyn Seafood | Jus Fishy & Beyond",
    description: "Explore the best BBQ salmon, steamed snapper, and Caribbean specialties in Flatbush. High-performance, made-to-order seafood menu with Brooklyn soul.",
    keywords: ["Seafood Flatbush", "BBQ Salmon Brooklyn", "Jus Fishy Menu", "Caribbean Catering Brooklyn"],
    openGraph: {
        title: "The Signature Menu | Jus Fishy & Beyond",
        description: "Authentic, fresh, and made-to-order seafood on Flatbush Ave.",
        images: [{ url: "/jus-fishy-seafood-restaurant-brooklyn.jpg" }]
    }
};
function MenuPage() {
    // 2. JSON-LD STRUCTURED DATA (The Secret SEO Engine)
    // This tells Google exactly what items we sell so they can show them in search
    var jsonLd = {
        "@context": "https://schema.org",
        "@type": "Menu",
        "name": "Jus Fishy & Beyond Signature Menu",
        "description": "Authentic Caribbean and Brooklyn seafood menu",
        "hasMenuSection": menuData_1.menuSections.map(function (section) { return ({
            "@type": "MenuSection",
            "name": section.title,
            "hasMenuItem": section.items.map(function (item) { return ({
                "@type": "MenuItem",
                "name": item,
                "description": "Freshly prepared " + item + " at Jus Fishy Brooklyn."
            }); })
        }); })
    };
    return (React.createElement("main", { className: "bg-[#fdfcf8] min-h-screen p-6 md:p-12 pb-40" },
        React.createElement("script", { type: "application/ld+json", dangerouslySetInnerHTML: { __html: JSON.stringify(jsonLd) } }),
        React.createElement("header", { className: "mb-12 max-w-7xl mx-auto" },
            React.createElement("h1", { className: "text-5xl font-serif text-[#1B4D3E] mb-2" }, "Our Signature Menu"),
            React.createElement("p", { className: "text-[#A8B475] text-[10px] font-black tracking-[0.3em] uppercase" }, "Flatbush Avenue \u2022 Brooklyn Soul \u2022 Made To Order")),
        React.createElement(MenuGrid_1["default"], null)));
}
exports["default"] = MenuPage;
