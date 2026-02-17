"use strict";
exports.__esModule = true;
exports.metadata = void 0;
var google_1 = require("next/font/google");
require("./globals.css");
var SidebarHeader_1 = require("@/components/SidebarHeader");
var inter = google_1.Inter({ subsets: ["latin"] });
exports.metadata = {
    title: "Jus Fishy & Beyond | Modern Seafood",
    description: "Bespoke seafood dining experience"
};
function RootLayout(_a) {
    var children = _a.children;
    return (React.createElement("html", { lang: "en", className: "scroll-smooth" },
        React.createElement("body", { className: inter.className + " flex min-h-screen bg-[#fdfcf8] selection:bg-[#A8B475]/30", suppressHydrationWarning: true },
            React.createElement(SidebarHeader_1["default"], null),
            React.createElement("div", { className: "flex-1 relative flex flex-col min-h-screen overflow-x-hidden" },
                React.createElement("div", { className: "hidden md:block absolute top-10 right-10 z-40" },
                    React.createElement("button", { className: "bg-[#1B4D3E] text-white px-8 py-3 rounded-none text-[10px] font-black tracking-widest uppercase hover:bg-black transition-all shadow-xl" }, "Order Online")),
                React.createElement("main", { className: "w-full flex-grow pb-24 md:pb-32 pt-20 md:pt-10" }, children),
                React.createElement("div", { className: "fixed bottom-0 left-0 md:left-20 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-stone-100 px-6 md:px-10 py-5 flex justify-between items-center shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)]" },
                    React.createElement("div", { className: "flex items-center gap-4" },
                        React.createElement("div", { className: "hidden lg:block" },
                            React.createElement("p", { className: "text-[10px] font-black tracking-[0.2em] text-[#1B4D3E] uppercase" }, "Visit Us in Brooklyn"),
                            React.createElement("p", { className: "text-xs font-serif italic text-stone-900" }, "1059 Flatbush Ave, Brooklyn, NY 11226")),
                        React.createElement("div", { className: "lg:hidden" },
                            React.createElement("p", { className: "text-[10px] font-black tracking-widest text-[#1B4D3E]" }, "1059 FLATBUSH AVE"))),
                    React.createElement("div", { className: "absolute left-1/2 -translate-x-1/2 hidden xl:block" },
                        React.createElement("a", { href: "https://tywebstudio.com", target: "_blank", rel: "noopener noreferrer", className: "group" },
                            React.createElement("p", { className: "text-[8px] font-black tracking-[0.5em] text-[#1B4D3E]/60 group-hover:text-[#1B4D3E] transition-all uppercase" }, "MADE BY TYWEBSTUDIO.COM"))),
                    React.createElement("div", { className: "flex items-center gap-4 md:gap-8" },
                        React.createElement("div", { className: "flex items-center gap-2" },
                            React.createElement("div", { className: "w-2 h-2 rounded-full bg-green-500 animate-pulse" }),
                            React.createElement("span", { className: "text-[10px] font-bold tracking-widest text-stone-600 uppercase" }, "Open Until 10PM")),
                        React.createElement("a", { href: "https://www.google.com/maps/dir/?api=1&destination=1059+Flatbush+Ave+Brooklyn+NY+11226", target: "_blank", rel: "noopener noreferrer", className: "bg-black text-white px-6 py-2.5 text-[10px] font-black tracking-widest uppercase hover:bg-[#1B4D3E] transition-all rounded-none shadow-md" }, "Directions")))))));
}
exports["default"] = RootLayout;
