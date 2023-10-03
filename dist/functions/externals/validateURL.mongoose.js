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
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = require("../../models/index.js");
function validDateShortenURL(props) {
    return __awaiter(this, void 0, void 0, function* () {
        const { schema, alias, response, url } = props;
        if (schema) {
            yield index_js_1.ShortenerSchema.findOneAndUpdate({
                aliases: alias,
            }, {
                $inc: { clicks: 1 },
            });
            response.redirect(`${url}`);
        }
        else {
            return response.send({
                error: "Not found",
            });
        }
    });
}
exports.default = validDateShortenURL;
