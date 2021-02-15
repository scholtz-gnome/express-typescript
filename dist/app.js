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
exports.newApp = void 0;
const express = require("express");
const bodyParser = require("body-parser");
const compression = require("compression");
const db_connection_1 = require("./db/db.connection");
function newApp() {
    const app = express();
    app.use(compression());
    app.use(bodyParser.json());
    app.get("/", (_, res) => {
        res.send("Hello World!");
    });
    app.get("/blogs", (_, res) => __awaiter(this, void 0, void 0, function* () {
        const blogs = yield db_connection_1.default("blog").select("title");
        res.send(blogs.map(blog => blog.title));
    }));
    return app;
}
exports.newApp = newApp;
