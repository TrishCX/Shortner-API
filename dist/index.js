"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const classes_1 = require("./classes");
const initialApp_1 = __importDefault(require("./app/initialApp"));
const server = new classes_1.Express(initialApp_1.default);
server.register();
