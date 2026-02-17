"use client";
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
var react_1 = require("react");
var sanity_1 = require("@/lib/sanity");
function AdminCreatePost() {
    var _this = this;
    var _a = react_1.useState({ title: "", description: "", body: "" }), formData = _a[0], setFormData = _a[1];
    var _b = react_1.useState(false), loading = _b[0], setLoading = _b[1];
    var handleSubmit = function (e) { return __awaiter(_this, void 0, void 0, function () {
        var doc, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    setLoading(true);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, 4, 5]);
                    doc = {
                        _type: 'post',
                        title: formData.title,
                        slug: { _type: 'slug', current: formData.title.toLowerCase().replace(/\s+/g, '-') },
                        description: formData.description,
                        // For a simple start, we push the body as plain text in a block format
                        body: [{ _type: 'block', children: [{ _type: 'span', text: formData.body }] }]
                    };
                    return [4 /*yield*/, sanity_1.writeClient.create(doc)];
                case 2:
                    _a.sent();
                    alert("SEO Article Pushed to Sanity!");
                    setFormData({ title: "", description: "", body: "" });
                    return [3 /*break*/, 5];
                case 3:
                    err_1 = _a.sent();
                    console.error(err_1);
                    alert("Push Failed. Check Console.");
                    return [3 /*break*/, 5];
                case 4:
                    setLoading(false);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement("div", { className: "bg-[#1B4D3E] min-h-screen p-10 md:p-20 text-white" },
        React.createElement("div", { className: "max-w-3xl mx-auto" },
            React.createElement("h1", { className: "text-4xl font-serif italic mb-12" }, "Create SEO Content"),
            React.createElement("form", { onSubmit: handleSubmit, className: "space-y-8 bg-white/5 p-12 rounded-[3rem] backdrop-blur-md border border-white/10" },
                React.createElement("input", { value: formData.title, onChange: function (e) { return setFormData(__assign(__assign({}, formData), { title: e.target.value })); }, placeholder: "ARTICLE TITLE (e.g. Best Oxtail in Brooklyn)", className: "w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-[#A8B475] text-xl font-serif italic" }),
                React.createElement("textarea", { value: formData.description, onChange: function (e) { return setFormData(__assign(__assign({}, formData), { description: e.target.value })); }, placeholder: "SEO META DESCRIPTION (The text Google shows)", rows: 2, className: "w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-[#A8B475] text-xs tracking-widest uppercase" }),
                React.createElement("textarea", { value: formData.body, onChange: function (e) { return setFormData(__assign(__assign({}, formData), { body: e.target.value })); }, placeholder: "ARTICLE CONTENT...", rows: 10, className: "w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-[#A8B475] text-sm leading-relaxed" }),
                React.createElement("button", { type: "submit", disabled: loading, className: "w-full bg-[#A8B475] text-jusGreen py-6 rounded-full font-black tracking-[0.5em] uppercase hover:bg-white transition-all" }, loading ? "DEPLOYING TO CLOUD..." : "PUSH TO GOOGLE ENGINE")))));
}
exports["default"] = AdminCreatePost;
