"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newApp = void 0;
const express = require("express");
const bodyParser = require("body-parser");
const compression = require("compression");
function newApp() {
    const app = express();
    app.use(compression());
    app.use(bodyParser.json());
    app.get("/", (_, res) => {
        res.send("Hello World!");
    });
    app.get("/ping", (_, res) => {
        res.send("Pong");
    });
    return app;
}
exports.newApp = newApp;
