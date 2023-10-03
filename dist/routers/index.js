"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestRouter = exports.PostRouter = void 0;
var post_router_js_1 = require("./routes/post.router.js");
Object.defineProperty(exports, "PostRouter", { enumerable: true, get: function () { return __importDefault(post_router_js_1).default; } });
var request_router_js_1 = require("./routes/request.router.js");
Object.defineProperty(exports, "RequestRouter", { enumerable: true, get: function () { return __importDefault(request_router_js_1).default; } });
