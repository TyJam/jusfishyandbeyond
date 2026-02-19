"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
var yet_another_react_lightbox_1 = require("yet-another-react-lightbox");
require("yet-another-react-lightbox/styles.css");
// 1. DATA: THE CRAFT (FOOD)
var foodImages = [
    { src: "/images/gallery/bbq-chicken-brooklyn-flatbush-jus-fishy.webp", alt: "Signature Grilled Snapper" },
    { src: "/images/gallery/fry-salmon-jus-fishy-flatbush-brooklyn.jpg", alt: "Jerk Salmon Platter" },
    { src: "/images/gallery/fish-wings-brooklyn-flatbush.jpg", alt: "fish wings jus fish and beyond Restaurant" },
    { src: "/images/gallery/jus-dine-meal-plate-salmon-shrimp.jpg", alt: "dine meal at jus fishy restaurant" },
    { src: "/images/gallery/mac-n-cheese-brooklyn-flatbush.jpg", alt: "Caribbean mac and cheesee" },
    { src: "/images/gallery/snow-crab-brooklyn-jus-fishy.jpg", alt: "snow crab Caribeen style" },
];
// 2. DATA: THE CULTURE (PRETTY FACES)
var faceImages = [
    { src: "/images/prettyface/jus-family-affair-brooklyn-flatbush-restaurant.jpg", alt: "family affair brooklyn flatbush restaurant" },
    { src: "/images/prettyface/jus-fishy-branding-brooklyn-flatbush-resturant.jpg", alt: "A warm welcome" },
    { src: "/images/prettyface/jus-fishy-family-affair.jpg", alt: "The vibe at the bar" },
    { src: "/images/prettyface/jus-fishy-restaurant-events.jpg", alt: "Local regulars" },
    { src: "/images/prettyface/istockphoto-2000117676-612x612.jpg", alt: "Kitchen focus" },
];
function GalleryPage() {
    // 3. STATE: Separate index for each gallery
    var _a = react_1.useState(-1), foodIndex = _a[0], setFoodIndex = _a[1];
    var _b = react_1.useState(-1), faceIndex = _b[0], setFaceIndex = _b[1];
    // We only show the first 4 of each on the grid
    var visibleFood = foodImages.slice(0, 4);
    var visibleFaces = faceImages.slice(0, 4);
    return (React.createElement("div", { className: "p-10 md:p-20 bg-[#fdfcf8] min-h-screen pb-40" },
        React.createElement("header", { className: "mb-20" },
            React.createElement("h1", { className: "text-7xl font-serif text-[#1B4D3E] mb-4 underline decoration-[#A8B475]/30" }, "The Gallery"),
            React.createElement("p", { className: "text-[#A8B475] text-[10px] tracking-[0.5em] font-black uppercase" }, "Brooklyn Soul \u2022 The Craft & Culture")),
        React.createElement("section", { className: "mb-32" },
            React.createElement("h2", { className: "text-4xl font-serif text-[#1B4D3E] mb-12 italic border-b border-stone-200 pb-4 w-fit" }, "The Craft."),
            React.createElement("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4" }, visibleFood.map(function (img, index) { return (React.createElement(framer_motion_1.motion.div, { key: index, whileHover: { scale: 0.98 }, onClick: function () { return setFoodIndex(index); }, className: "cursor-pointer overflow-hidden rounded-[2.5rem] bg-stone-100 aspect-square group relative" },
                React.createElement("img", { src: img.src, className: "w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700", alt: img.alt }),
                index === 3 && foodImages.length > 4 && (React.createElement("div", { className: "absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center text-white text-xs font-black tracking-widest uppercase" },
                    "+ ",
                    foodImages.length - 4,
                    " More Plates")))); }))),
        React.createElement("section", null,
            React.createElement("h2", { className: "text-4xl font-serif text-[#1B4D3E] mb-12 italic border-b border-stone-200 pb-4 w-fit" }, "The Culture."),
            React.createElement("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4" }, visibleFaces.map(function (img, index) { return (React.createElement(framer_motion_1.motion.div, { key: index, whileHover: { scale: 0.98 }, onClick: function () { return setFaceIndex(index); }, className: "cursor-pointer overflow-hidden rounded-[2.5rem] bg-stone-100 aspect-square group relative" },
                React.createElement("img", { src: img.src, className: "w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700", alt: img.alt }),
                index === 3 && faceImages.length > 4 && (React.createElement("div", { className: "absolute inset-0 bg-jusGreen/80 backdrop-blur-sm flex items-center justify-center text-white text-xs font-black tracking-widest uppercase" },
                    "+ ",
                    faceImages.length - 4,
                    " More Faces")))); }))),
        React.createElement(yet_another_react_lightbox_1["default"], { index: foodIndex, open: foodIndex >= 0, close: function () { return setFoodIndex(-1); }, slides: foodImages, styles: { container: { backgroundColor: "rgba(0, 0, 0, .9)" } } }),
        React.createElement(yet_another_react_lightbox_1["default"], { index: faceIndex, open: faceIndex >= 0, close: function () { return setFaceIndex(-1); }, slides: faceImages, styles: { container: { backgroundColor: "rgba(27, 77, 62, .95)" } } })));
}
exports["default"] = GalleryPage;
