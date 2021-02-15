"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const http = require("http");
const config = require("./config");
const app = app_1.newApp();
const port = config.port;
http.createServer({}, app).listen(port, () => {
    console.log(`Listening for requests on port ${port}`);
    console.log(`Running in ${config.NODE_ENV} environment`);
});
