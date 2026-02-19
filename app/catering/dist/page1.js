"use client";
"use strict";
exports.__esModule = true;
var cateringData_1 = require("@/lib/cateringData");
var framer_motion_1 = require("framer-motion");
var lucide_react_1 = require("lucide-react");
function CateringPage() {
    return (React.createElement("div", { className: "bg-[#fdfcf8] min-h-screen p-6 md:p-20 pb-40" },
        React.createElement("header", { className: "mb-20 max-w-7xl mx-auto" },
            React.createElement("h1", { className: "text-6xl md:text-8xl font-serif text-[#1B4D3E] mb-4" }, "Catering."),
            React.createElement("p", { className: "text-[#A8B475] text-[10px] font-black tracking-[0.4em] uppercase" }, "Brooklyn Events \u2022 Large & Small Trays")),
        React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto relative" }, cateringData_1.cateringSections.map(function (section, idx) { return (React.createElement(framer_motion_1.motion.div, { key: section.id, initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: idx * 0.1 }, className: (section.size === 'large' ? 'md:col-span-2' : '') + " relative group bg-white border border-stone-200 rounded-[3rem] overflow-hidden shadow-sm hover:shadow-md transition-all" },
            section.image && (React.createElement("div", { className: "absolute inset-0 z-0" },
                React.createElement("img", { src: section.image, alt: section.title, className: "w-full h-full object-cover grayscale opacity-30 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000 ease-in-out" }),
                React.createElement("div", { className: "absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent group-hover:opacity-0 transition-opacity duration-500" }))),
            React.createElement("div", { className: "relative z-10 p-10 flex flex-col h-full min-h-[300px]" },
                React.createElement("h2", { className: "text-[#1B4D3E] group-hover:text-white group-hover:drop-shadow-md transition-colors font-black tracking-[0.2em] uppercase text-[11px] mb-8 border-b border-stone-100 pb-4 w-fit" }, section.title),
                React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4" }, section.items.map(function (item) { return (React.createElement("div", { key: item.name, className: "flex items-center gap-3" },
                    React.createElement(lucide_react_1.CheckCircle, { size: 14, className: "text-[#A8B475] group-hover:text-white transition-colors" }),
                    React.createElement("span", { className: "text-stone-800 group-hover:text-white transition-colors text-sm font-serif italic" }, item.name))); })),
                React.createElement("div", { className: "mt-auto pt-10 flex justify-between text-[9px] font-bold text-stone-400 group-hover:text-white/50 transition-colors uppercase tracking-widest" },
                    React.createElement("span", null, "SM / LG Trays Available"),
                    React.createElement("span", { className: "text-[#A8B475] group-hover:text-white font-black" }, "Book Now"))))); }))));
}
exports["default"] = CateringPage;
