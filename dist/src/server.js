"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const app_1 = require("./app");
const http = require("http");
const config = require("../config");
process.env.NODE_ENV = "development";
const app = app_1.newApp();
const port = config.port;
http.createServer({}, app).listen(port, () => {
    console.log(`Listening for requests on port ${port}`);
});
