"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var link_1 = require("next/link");
var navigation_1 = require("next/navigation");
var framer_motion_1 = require("framer-motion");
var image_1 = require("next/image");
var lucide_react_1 = require("lucide-react");
var jus_fishy_seafood_restaurant_brooklyn_flatbush_jpg_1 = require("../public/jus-fishy-seafood-restaurant-brooklyn-flatbush.jpg");
var navLinks = [
    { name: "MENUS", href: "/menu" },
    { name: "ABOUT", href: "/about" },
    { name: "CONTACT", href: "/contact" },
    { name: "CATERING", href: "/catering" },
    { name: "GALLERY", href: "/gallery" },
    { name: "BAR", href: "/bar" }
];
function SidebarHeader() {
    var _a = react_1.useState(false), isOpen = _a[0], setIsOpen = _a[1];
    var pathname = navigation_1.usePathname();
    return (React.createElement(React.Fragment, null,
        React.createElement("header", { className: "md:hidden fixed top-0 left-0 w-full h-20 bg-white border-b border-stone-100 z-[100] px-6 flex justify-between items-center" },
            React.createElement(link_1["default"], { href: "/", onClick: function () { return setIsOpen(false); }, className: "w-10 h-10 rounded-full bg-[#1B4D3E] flex items-center justify-center overflow-hidden" },
                React.createElement(image_1["default"], { src: jus_fishy_seafood_restaurant_brooklyn_flatbush_jpg_1["default"], alt: "Logo", width: 40, height: 40, className: "object-cover" })),
            React.createElement("div", { className: "absolute left-1/2 -translate-x-1/2" },
                React.createElement("button", { className: "bg-[#1B4D3E] text-white px-4 py-2 rounded-md text-[9px] font-black tracking-widest uppercase shadow-sm" }, "Order Online")),
            React.createElement("button", { onClick: function () { return setIsOpen(!isOpen); }, className: "flex flex-col gap-1.5 p-2 z-[110]" },
                React.createElement(framer_motion_1.motion.div, { animate: isOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }, className: "w-6 h-[1.5px] bg-[#1B4D3E]" }),
                React.createElement(framer_motion_1.motion.div, { animate: isOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }, className: "w-6 h-[1.5px] bg-[#1B4D3E]" }))),
        React.createElement(framer_motion_1.AnimatePresence, null, isOpen && (React.createElement(framer_motion_1.motion.div, { initial: { opacity: 0, x: "100%" }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, x: "100%" }, transition: { type: "spring", damping: 25, stiffness: 200 }, className: "fixed inset-0 bg-white z-[90] flex flex-col items-center justify-center gap-8 md:hidden" },
            navLinks.map(function (link) { return (React.createElement(link_1["default"], { key: link.name, href: link.href, onClick: function () { return setIsOpen(false); }, className: "text-3xl font-serif italic tracking-tighter " + (pathname === link.href ? "text-[#A8B475]" : "text-[#1B4D3E]") }, link.name)); }),
            React.createElement("div", { className: "mt-12 flex flex-col items-center gap-6" },
                React.createElement("p", { className: "text-[10px] font-black tracking-[0.3em] text-stone-300" }, "BROOKLYN SOUL"),
                React.createElement("div", { className: "flex gap-8" },
                    React.createElement(lucide_react_1.MapPin, { size: 20, className: "text-[#1B4D3E]" }),
                    React.createElement(lucide_react_1.Instagram, { size: 20, className: "text-[#1B4D3E]" })))))),
        React.createElement("header", { className: "hidden md:flex w-20 h-screen sticky top-0 flex-col items-center justify-between py-10 border-r border-stone-200 bg-white z-50" },
            React.createElement("div", { className: "flex flex-col items-center gap-4" },
                React.createElement(link_1["default"], { href: "/", className: "group" },
                    React.createElement("div", { className: "w-12 h-12 rounded-full bg-[#1B4D3E] flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform shadow-md" },
                        React.createElement(image_1["default"], { src: jus_fishy_seafood_restaurant_brooklyn_flatbush_jpg_1["default"], alt: "Jus Fishy", width: 50, height: 50, className: "object-cover" })))),
            React.createElement("nav", { className: "flex flex-col gap-12" }, navLinks.map(function (link) {
                var isActive = pathname === link.href;
                return (React.createElement(link_1["default"], { key: link.name, href: link.href, className: "relative group flex items-center justify-center" },
                    React.createElement("span", { className: "text-[10px] tracking-[0.3em] font-bold transition-colors uppercase \n                  " + (isActive ? "text-[#1B4D3E]" : "text-stone-400 group-hover:text-[#1B4D3E]") + "\n                  ", style: { writingMode: 'vertical-rl', transform: 'rotate(180deg)' } }, link.name),
                    isActive && (React.createElement(framer_motion_1.motion.div, { layoutId: "sidebar-pill", className: "absolute inset-x-[-12px] inset-y-[-15px] border border-[#1B4D3E] rounded-full" }))));
            })),
            React.createElement("div", { className: "flex flex-col items-center gap-6" },
                React.createElement("a", { href: "https://www.google.com/maps/dir/?api=1&destination=1059+Flatbush+Ave+Brooklyn+NY+11226", target: "_blank", className: "group flex flex-col items-center gap-2" },
                    React.createElement("div", { className: "p-2 rounded-full border border-stone-100 group-hover:bg-[#1B4D3E] group-hover:text-white transition-all" },
                        React.createElement(lucide_react_1.MapPin, { size: 16, className: "text-stone-400 group-hover:text-white" }))),
                React.createElement(link_1["default"], { href: "https://instagram.com", target: "_blank" },
                    React.createElement(lucide_react_1.Instagram, { size: 18, className: "text-stone-400 hover:text-[#1B4D3E] transition-colors" }))))));
}
exports["default"] = SidebarHeader;
