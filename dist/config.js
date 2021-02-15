"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NODE_ENV = exports.port = void 0;
require("dotenv/config");
exports.port = process.env.PORT;
exports.NODE_ENV = process.env.NODE_ENV;
