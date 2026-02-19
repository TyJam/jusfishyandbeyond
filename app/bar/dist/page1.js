"use client";
"use strict";
exports.__esModule = true;
var framer_motion_1 = require("framer-motion");
var lucide_react_1 = require("lucide-react");
// CATEGORY 1: SIGNATURE COCKTAILS
var cocktails = [
    { name: "Signature Rum Punch", price: "$12", desc: "House secret blend with Caribbean dark rum." },
    { name: "Classic Mojito", price: "$12", desc: "Fresh mint, lime, and white rum." },
    { name: "The Margarita", price: "$12", desc: "Premium tequila, agave, and lime." },
    { name: "Long Island Iced Tea", price: "$14", desc: "The heavy hitter. Five spirits, one glass." },
];
// CATEGORY 2: BREWS & VINES (New Section to replace Tonics)
var brewsAndVines = [
    { name: "Red Stripe (Jamaican Lager)", price: "$7" },
    { name: "Heineken / Corona", price: "$7" },
    { name: "House Red / White Wine", price: "$9" },
    { name: "Guinness", price: "$8" },
];
function BarPage() {
    return (React.createElement("div", { className: "bg-black min-h-screen p-6 md:p-20 text-white pb-40" },
        React.createElement("header", { className: "mb-20" },
            React.createElement(framer_motion_1.motion.p, { initial: { opacity: 0, x: -10 }, animate: { opacity: 1, x: 0 }, className: "text-[#A8B475] font-bold tracking-[0.5em] text-[10px] uppercase mb-4" }, "the bar & lounge"),
            React.createElement("h1", { className: "text-6xl md:text-8xl font-serif italic leading-none" },
                "Vibe & ",
                React.createElement("span", { className: "text-white/20 underline decoration-[#A8B475] underline-offset-8 transition-all hover:text-white" }, "Flow."))),
        React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto" },
            React.createElement(framer_motion_1.motion.div, { whileHover: { y: -5 }, className: "bg-stone-900/40 backdrop-blur-2xl border border-white/10 rounded-[3.5rem] p-12 flex flex-col justify-between" },
                React.createElement("div", null,
                    React.createElement("div", { className: "flex justify-between items-center mb-16" },
                        React.createElement("h2", { className: "text-4xl font-serif italic text-[#A8B475]" }, "Signature Cocktails"),
                        React.createElement(lucide_react_1.GlassWater, { className: "text-[#A8B475]", size: 24 })),
                    React.createElement("div", { className: "space-y-10" }, cocktails.map(function (item) { return (React.createElement("div", { key: item.name, className: "group cursor-default" },
                        React.createElement("div", { className: "flex justify-between items-baseline" },
                            React.createElement("h4", { className: "font-bold tracking-[0.2em] uppercase text-xs group-hover:text-[#A8B475] transition-colors" }, item.name),
                            React.createElement("span", { className: "font-serif italic text-stone-500" }, item.price)),
                        React.createElement("p", { className: "text-[10px] text-white/30 mt-2 italic tracking-widest" }, item.desc))); })))),
            React.createElement("div", { className: "flex flex-col gap-8" },
                React.createElement(framer_motion_1.motion.div, { whileHover: { y: -5 }, className: "bg-[#1B4D3E] rounded-[3.5rem] p-12 flex-1" },
                    React.createElement("div", { className: "flex justify-between items-center mb-12" },
                        React.createElement("h2", { className: "text-3xl font-serif italic text-white" }, "Brews & Vines"),
                        React.createElement("div", { className: "flex gap-2 opacity-30" },
                            React.createElement(lucide_react_1.Beer, { size: 18 }),
                            React.createElement(lucide_react_1.Wine, { size: 18 }))),
                    React.createElement("div", { className: "space-y-6" }, brewsAndVines.map(function (item) { return (React.createElement("div", { key: item.name, className: "flex justify-between items-baseline" },
                        React.createElement("h4", { className: "font-bold tracking-widest uppercase text-[10px] text-white/90" }, item.name),
                        React.createElement("span", { className: "font-serif italic text-white/40" }, item.price))); }))),
                React.createElement("div", { className: "bg-stone-900/60 rounded-[2.5rem] p-8 border border-white/5" },
                    React.createElement("div", { className: "flex items-center gap-4" },
                        React.createElement(lucide_react_1.Star, { size: 14, className: "text-[#A8B475]" }),
                        React.createElement("p", { className: "text-[10px] font-bold tracking-[0.4em] uppercase text-white/60" }, "Sodas $3 \u2022 Water $1.75")))),
            React.createElement(framer_motion_1.motion.div, { whileHover: { scale: 0.99 }, className: "md:col-span-2 bg-[#C5A059] rounded-[3.5rem] p-12 text-jusBlack flex flex-col md:flex-row justify-between items-center shadow-xl" },
                React.createElement("div", { className: "flex items-center gap-8 mb-8 md:mb-0" },
                    React.createElement(lucide_react_1.Timer, { size: 48, strokeWidth: 1, className: "opacity-40" }),
                    React.createElement("div", null,
                        React.createElement("h3", { className: "text-5xl font-serif italic" }, "The Golden Hour"),
                        React.createElement("p", { className: "text-[10px] font-black tracking-[0.3em] uppercase opacity-60" }, "Mon - Fri \u2022 Flatbush Favorite"))),
                React.createElement("div", { className: "text-center md:text-right border-t md:border-t-0 md:border-l border-jusBlack/10 pt-8 md:pt-0 md:pl-12" },
                    React.createElement("p", { className: "text-6xl font-serif italic" }, "4PM \u2014 7PM"),
                    React.createElement("p", { className: "text-[11px] font-black tracking-widest uppercase mt-2" }, "Select Mixed Drinks $8"))))));
}
exports["default"] = BarPage;
