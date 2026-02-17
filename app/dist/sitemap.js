"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.dynamic = void 0;
exports.dynamic = 'force-static'; // <--- ADD THIS LINE
function sitemap() {
    var baseUrl = 'https://www.jusfishyandbeyond.com/';
    var posts = yield client.fetch("*[_type == \"post\"]{ \"slug\": slug.current }");
    var blogUrls = posts.map(function (post) { return ({
        url: "https://jusfishy.com/stories/" + post.slug,
        lastModified: new Date()
    }); });
    return __spreadArrays([
        { url: baseUrl, lastModified: new Date() },
        { url: baseUrl + "/menu", lastModified: new Date() },
        { url: baseUrl + "/gallery", lastModified: new Date() },
        { url: baseUrl + "/catering", lastModified: new Date() },
        { url: baseUrl + "/about", lastModified: new Date() },
        { url: baseUrl + "/bar", lastModified: new Date() }
    ], blogUrls);
}
exports["default"] = sitemap;
