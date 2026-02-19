"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var menuData_1 = require("@/lib/menuData");
var framer_motion_1 = require("framer-motion");
function MenuGrid() {
    var _a = react_1.useState(null), expandedId = _a[0], setExpandedId = _a[1];
    return (React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-4 auto-rows-[280px] gap-6 max-w-7xl mx-auto relative" }, menuData_1.menuSections.map(function (section) {
        var isExpanded = expandedId === section.id;
        var spanClass = section.size === "large" ? "md:col-span-2 md:row-span-2" :
            section.size === "wide" ? "md:col-span-2 md:row-span-1" :
                "md:col-span-1 md:row-span-1";
        return (React.createElement("section", { key: section.id, className: spanClass + " relative", "aria-label": section.title },
            React.createElement("div", { className: "relative h-full w-full bg-white border border-stone-200 rounded-[2rem] overflow-hidden shadow-sm flex flex-col group" },
                section.image && (React.createElement("div", { className: "absolute inset-0 z-0" },
                    React.createElement("img", { src: section.image, className: "w-full h-full object-cover grayscale opacity-30 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700", alt: "Authentic " + section.title + " at Jus Fishy Brooklyn" }),
                    React.createElement("div", { className: "absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent transition-opacity duration-500 group-hover:opacity-0" }))),
                React.createElement("div", { className: "relative z-10 p-8 flex flex-col h-full" },
                    React.createElement("h2", { className: "text-[#1B4D3E] group-hover:text-white group-hover:drop-shadow-md transition-colors font-black tracking-[0.3em] uppercase text-[11px] mb-6 border-b-2 border-[#1B4D3E]/10 pb-2 w-fit" }, section.title),
                    React.createElement("ul", { className: "space-y-2" }, section.items.slice(0, 4).map(function (item, i) { return (React.createElement("li", { key: i, className: "text-stone-800 group-hover:text-white group-hover:drop-shadow-sm transition-colors text-[13px] font-serif italic border-b border-dotted border-stone-200 pb-2 last:border-0" }, item)); })),
                    section.items.length > 4 && (React.createElement("button", { onClick: function (e) {
                            e.stopPropagation();
                            setExpandedId(section.id);
                        }, className: "mt-auto pt-4 text-[10px] font-black tracking-widest text-[#A8B475] group-hover:text-white uppercase text-left flex items-center gap-1" },
                        React.createElement("span", { className: "text-lg" }, "+"),
                        " ",
                        section.items.length - 4,
                        " MORE OPTIONS"))),
                React.createElement(framer_motion_1.AnimatePresence, null, isExpanded && (React.createElement(framer_motion_1.motion.div, { initial: { y: "100%" }, animate: { y: 0 }, exit: { y: "100%" }, transition: { type: "spring", damping: 25, stiffness: 200 }, className: "absolute inset-0 z-50 bg-[#1B4D3E] p-8 overflow-y-auto" },
                    React.createElement("div", { className: "flex justify-between items-center mb-8" },
                        React.createElement("h3", { className: "text-white font-black tracking-widest uppercase text-[11px] border-b-2 border-white/20 pb-2 w-fit" }, section.title),
                        React.createElement("button", { onClick: function () { return setExpandedId(null); }, className: "text-[10px] font-bold text-white/50 hover:text-white uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full" }, "Close \u2715")),
                    React.createElement("ul", { className: "space-y-4" }, section.items.map(function (item, i) { return (React.createElement("li", { key: i, className: "text-white text-[14px] font-serif italic border-b border-dotted border-white/10 pb-3 last:border-0" }, item)); }))))))));
    })));
}
exports["default"] = MenuGrid;
