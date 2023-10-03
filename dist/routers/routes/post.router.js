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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const uuid_1 = require("uuid");
const index_js_1 = require("../../models/index.js");
const router = express_1.default.Router();
router.post("/shorten", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { originalURL, alias } = request.body;
    const baseURL = "https://localhost:3000";
    const urlId = (0, uuid_1.v4)();
    //   const url = await findURL(urlId);
    const shortenURL = `${baseURL}/${alias}`;
    new index_js_1.ShortenerSchema({
        originalURL,
        urlID: `${urlId}`,
        clicks: 0,
        date: Date.now(),
        aliases: alias,
    }).save();
    return response.status(200).json(shortenURL);
}));
exports.default = router;