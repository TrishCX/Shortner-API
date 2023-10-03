"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const ShorterSchema = new mongoose_1.default.Schema({
    urlID: String,
    originalURL: String,
    clicks: Number,
    date: String,
    aliases: String,
});
exports.default = mongoose_1.default.model("Shortener-Schemas", ShorterSchema);
