"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.metadata = void 0;
var sanity_1 = require("@/lib/sanity");
var link_1 = require("next/link");
// 1. ADVANCED METADATA (Static for the List Page)
exports.metadata = {
    title: "Brooklyn Seafood Stories & Catering Insights | Jus Fishy & Beyond",
    description: "Explore the authentic flavors of Flatbush. From our famous BBQ salmon secrets to corporate catering guides, read the stories behind the soul of Brooklyn seafood.",
    alternates: {
        canonical: "https://www.jusfishyandbeyond.com/stories"
    },
    openGraph: {
        title: "Seafood & Soul: The Jus Fishy Stories",
        description: "Authentic Caribbean flavors and Brooklyn heritage.",
        url: "https://www.jusfishyandbeyond.com/stories",
        type: "website"
    }
};
function BlogStories() {
    return __awaiter(this, void 0, void 0, function () {
        var posts, jsonLd;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, sanity_1.client.fetch("*[_type == \"post\"] | order(_createdAt desc)")];
                case 1:
                    posts = _a.sent();
                    jsonLd = {
                        "@context": "https://schema.org",
                        "@type": "CollectionPage",
                        "name": "Jus Fishy Seafood Stories",
                        "description": "A collection of articles about Caribbean seafood, BBQ salmon, and catering in Brooklyn.",
                        "url": "https://www.jusfishyandbeyond.com/stories",
                        "hasPart": posts.map(function (post) { return ({
                            "@type": "BlogPosting",
                            "headline": post.title,
                            "url": "https://www.jusfishyandbeyond.com/stories/" + post.slug.current
                        }); })
                    };
                    return [2 /*return*/, (React.createElement("div", { className: "bg-white min-h-screen p-6 md:p-20 pb-40" },
                            React.createElement("script", { type: "application/ld+json", dangerouslySetInnerHTML: { __html: JSON.stringify(jsonLd) } }),
                            React.createElement("header", { className: "max-w-6xl mx-auto mb-20" },
                                React.createElement("h1", { className: "text-7xl font-serif text-[#1B4D3E] mb-6 border-b border-stone-100 pb-10" },
                                    "Stories",
                                    React.createElement("span", { className: "text-[#A8B475]" }, ".")),
                                React.createElement("p", { className: "text-stone-400 text-xs tracking-[0.3em] uppercase font-bold" }, "The Craft \u2022 The Culture \u2022 The Catch")),
                            React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24 max-w-6xl mx-auto" }, posts.map(function (post) { return (React.createElement("article", { key: post._id, className: "group flex flex-col items-start" },
                                React.createElement(link_1["default"], { href: "/stories/" + post.slug.current, className: "w-full" },
                                    React.createElement("div", { className: "overflow-hidden rounded-[2.5rem] bg-stone-100 aspect-video mb-8 shadow-sm group-hover:shadow-md transition-all duration-500" },
                                        React.createElement("div", { className: "w-full h-full bg-[#1B4D3E]/5 flex items-center justify-center group-hover:scale-105 transition-transform duration-700" },
                                            React.createElement("span", { className: "text-[10px] font-black tracking-widest text-[#1B4D3E]/20 uppercase" }, "TyWebStudio Engine"))),
                                    React.createElement("header", null,
                                        React.createElement("time", { dateTime: post._createdAt, className: "text-[10px] font-black tracking-[0.4em] text-[#A8B475] uppercase mb-4 block" }, new Date(post._createdAt).toLocaleDateString('en-US', {
                                            month: 'long',
                                            day: 'numeric',
                                            year: 'numeric'
                                        })),
                                        React.createElement("h2", { className: "text-4xl font-serif italic text-jusBlack group-hover:text-[#1B4D3E] transition-colors leading-tight mb-4" }, post.title)),
                                    React.createElement("p", { className: "text-stone-500 text-sm leading-relaxed mb-6 line-clamp-3" }, post.description),
                                    React.createElement("div", { className: "flex items-center gap-4 text-[10px] font-black tracking-widest text-[#1B4D3E] uppercase" },
                                        React.createElement("span", null, "Read Story"),
                                        React.createElement("div", { className: "h-[1px] w-8 bg-[#A8B475] group-hover:w-16 transition-all duration-500" }))))); }))))];
            }
        });
    });
}
exports["default"] = BlogStories;
