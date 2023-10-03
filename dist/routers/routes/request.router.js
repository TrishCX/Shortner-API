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
const index_js_1 = require("../../functions/index.js");
const router = express_1.default.Router();
router.get("/:alias", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const alias = request === null || request === void 0 ? void 0 : request.params.alias;
    const db = yield (0, index_js_1.findURL)(alias);
    const url = db === null || db === void 0 ? void 0 : db.originalURL;
    yield (0, index_js_1.validDateShortenURL)({
        schema: db,
        response,
        url,
        alias,
    });
}));
exports.default = router;
