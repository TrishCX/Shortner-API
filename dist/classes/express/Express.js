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
const index_js_1 = require("../../config/index.js");
const index_js_2 = require("../../routers/index.js");
const index_js_3 = require("../../connection/index.js");
class Express {
    constructor(app) {
        this.app = app;
        this.listen();
    }
    register() {
        this.connectDB();
        this.registerRoutes();
    }
    connectDB() {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, index_js_3.connectMongoose)();
        });
    }
    registerRoutes() {
        var _a, _b;
        (_a = this.app) === null || _a === void 0 ? void 0 : _a.use("/", index_js_2.RequestRouter);
        (_b = this.app) === null || _b === void 0 ? void 0 : _b.use("/api", index_js_2.PostRouter);
    }
    listen() {
        var _a;
        (_a = this.app) === null || _a === void 0 ? void 0 : _a.listen(index_js_1.SESSION.port, () => console.log("The server is now up and running."));
    }
}
exports.default = Express;
