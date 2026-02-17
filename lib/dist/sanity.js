"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.writeClient = exports.client = void 0;
// lib/sanity.ts
var next_sanity_1 = require("next-sanity");
var config = {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: "production",
    apiVersion: "2024-01-01",
    useCdn: false
};
// 1. FOR FETCHING POSTS (Google/SEO Client)
// This is for reading data from Sanity
exports.client = next_sanity_1.createClient(config);
// 2. FOR PUSHING POSTS (Your Admin Dashboard Client)
// This is for writing data to Sanity
exports.writeClient = next_sanity_1.createClient(__assign(__assign({}, config), { token: process.env.SANITY_WRITE_TOKEN }));
