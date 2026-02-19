"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
var image_1 = require("next/image"); // Senior Move: High-performance Image component
var yet_another_react_lightbox_1 = require("yet-another-react-lightbox");
require("yet-another-react-lightbox/styles.css");
// 1. DATA: THE CRAFT (FOOD)
var foodImages = [
    { src: "/images/gallery/bbq-chicken-brooklyn-flatbush-jus-fishy.webp", alt: "Authentic BBQ Chicken Tray - Jus Fishy Brooklyn" },
    { src: "/images/gallery/fry-salmon-jus-fishy-flatbush-brooklyn.jpg", alt: "Crispy Fried Salmon Platter" },
    { src: "/images/gallery/fish-wings-brooklyn-flatbush.jpg", alt: "Signature Fish Wings - Flatbush Seafood" },
    { src: "/images/gallery/jus-dine-meal-plate-salmon-shrimp.jpg", alt: "Seafood Combo: Salmon and Shrimp" },
    { src: "/images/gallery/mac-n-cheese-brooklyn-flatbush.jpg", alt: "Caribbean Style Mac and Cheese" },
    { src: "/images/gallery/snow-crab-brooklyn-jus-fishy.jpg", alt: "Snow Crab Legs - Jus Fishy Special" },
];
// 2. DATA: THE CULTURE (PRETTY FACES)
var faceImages = [
    { src: "/images/prettyface/jus-family-affair-brooklyn-flatbush-restaurant.jpg", alt: "The Jus Fishy Family on Flatbush Ave" },
    { src: "/images/prettyface/jus-fishy-branding-brooklyn-flatbush-resturant.jpg", alt: "Bespoke Branding and Soulful Service" },
    { src: "/images/prettyface/jus-fishy-family-affair.jpg", alt: "Community and Culture at Jus Fishy" },
    { src: "/images/prettyface/jus-fishy-restaurant-events.jpg", alt: "Events and Neighborhood Vibes" },
    { src: "/images/prettyface/istockphoto-2000117676-612x612.jpg", alt: "Inside the Jus Fishy Kitchen" },
];
function GalleryGrid() {
    var _a = react_1.useState(-1), foodIndex = _a[0], setFoodIndex = _a[1];
    var _b = react_1.useState(-1), faceIndex = _b[0], setFaceIndex = _b[1];
    var visibleFood = foodImages.slice(0, 4);
    var visibleFaces = faceImages.slice(0, 4);
    return (React.createElement("div", { className: "max-w-7xl mx-auto px-4 md:px-0" },
        React.createElement("section", { className: "mb-32", "aria-labelledby": "craft-heading" },
            React.createElement("h2", { id: "craft-heading", className: "text-4xl font-serif text-[#1B4D3E] mb-12 italic border-b border-stone-200 pb-4 w-fit" }, "The Craft."),
            React.createElement("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4" }, visibleFood.map(function (img, index) { return (React.createElement(framer_motion_1.motion.figure, { key: index, whileHover: { scale: 0.98 }, onClick: function () { return setFoodIndex(index); }, className: "cursor-pointer overflow-hidden rounded-[2.5rem] bg-stone-100 aspect-square group relative" },
                React.createElement(image_1["default"], { src: img.src, alt: img.alt, fill // Automatically fills the aspect-square container
                    : true, sizes: "(max-width: 768px) 50vw, 25vw", className: "object-cover grayscale group-hover:grayscale-0 transition-all duration-700", unoptimized: true }),
                index === 3 && foodImages.length > 4 && (React.createElement("div", { className: "absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center text-white text-xs font-black tracking-widest uppercase z-10" },
                    "+ ",
                    foodImages.length - 4,
                    " More Plates")))); }))),
        React.createElement("section", { "aria-labelledby": "culture-heading" },
            React.createElement("h2", { id: "culture-heading", className: "text-4xl font-serif text-[#1B4D3E] mb-12 italic border-b border-stone-200 pb-4 w-fit" }, "The Culture."),
            React.createElement("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4" }, visibleFaces.map(function (img, index) { return (React.createElement(framer_motion_1.motion.figure, { key: index, whileHover: { scale: 0.98 }, onClick: function () { return setFaceIndex(index); }, className: "cursor-pointer overflow-hidden rounded-[2.5rem] bg-stone-100 aspect-square group relative" },
                React.createElement(image_1["default"], { src: img.src, alt: img.alt, fill: true, sizes: "(max-width: 768px) 50vw, 25vw", className: "object-cover grayscale group-hover:grayscale-0 transition-all duration-700", unoptimized: true }),
                index === 3 && faceImages.length > 4 && (React.createElement("div", { className: "absolute inset-0 bg-[#1B4D3E]/80 backdrop-blur-sm flex items-center justify-center text-white text-xs font-black tracking-widest uppercase z-10" },
                    "+ ",
                    faceImages.length - 4,
                    " More Faces")))); }))),
        React.createElement(yet_another_react_lightbox_1["default"], { index: foodIndex, open: foodIndex >= 0, close: function () { return setFoodIndex(-1); }, slides: foodImages.map(function (img) { return ({ src: img.src, alt: img.alt }); }) }),
        React.createElement(yet_another_react_lightbox_1["default"], { index: faceIndex, open: faceIndex >= 0, close: function () { return setFaceIndex(-1); }, slides: faceImages.map(function (img) { return ({ src: img.src, alt: img.alt }); }) })));
}
exports["default"] = GalleryGrid;
