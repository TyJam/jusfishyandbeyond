"use client";
"use strict";
exports.__esModule = true;
var framer_motion_1 = require("framer-motion");
var image_1 = require("next/image");
function AboutContent() {
    return (React.createElement("div", { className: "max-w-6xl mx-auto" },
        React.createElement(framer_motion_1.motion.p, { initial: { opacity: 0 }, animate: { opacity: 1 }, className: "text-[#A8B475] font-black tracking-[0.5em] text-[10px] uppercase mb-12" }, "Established 2018"),
        React.createElement(framer_motion_1.motion.h1, { initial: { y: 20, opacity: 0 }, animate: { y: 0, opacity: 1 }, className: "text-6xl md:text-8xl font-serif text-[#1B4D3E] leading-[1.1] mb-16" },
            "A Legacy of ",
            React.createElement("span", { className: "italic text-[#A8B475]" }, "Flavor"),
            " & Soul."),
        React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center" },
            React.createElement("div", { className: "space-y-8" },
                React.createElement("p", { className: "text-[#1B4D3E] text-xl font-serif italic leading-relaxed border-l-4 border-[#A8B475] pl-8" }, "Jus Fishy & Beyond isn't just a restaurant; it's a Brooklyn landmark built on the traditions of the Caribbean."),
                React.createElement("p", { className: "text-stone-500 leading-[2] text-sm font-light" }, "Since 2018, we have stood on Flatbush Avenue as a testament to quality. Our founder believed that seafood should be prepared with the same respect it was caught with. Today, we continue that mission by sourcing only the freshest catch and seasoning it with the soul of the islands."),
                React.createElement("div", { className: "pt-8" },
                    React.createElement("p", { className: "text-[10px] font-black tracking-widest text-[#1B4D3E] uppercase underline decoration-[#A8B475] underline-offset-8" }, "Flatbush Ave \u2022 Brooklyn Soul"))),
            React.createElement(framer_motion_1.motion.div, { initial: { opacity: 0, scale: 0.95 }, whileInView: { opacity: 1, scale: 1 }, transition: { duration: 0.8 }, className: "relative aspect-[3/4] rounded-[3rem] overflow-hidden bg-stone-100 shadow-2xl" },
                React.createElement(image_1["default"], { src: "/images/prettyface/jus-fishy-branding-brooklyn-flatbush-resturant.jpg", alt: "The heritage and branding of Jus Fishy & Beyond on Flatbush Ave", fill: true, sizes: "(max-width: 768px) 100vw, 50vw", className: "object-cover grayscale hover:grayscale-0 transition-all duration-1000", unoptimized: true })))));
}
exports["default"] = AboutContent;
