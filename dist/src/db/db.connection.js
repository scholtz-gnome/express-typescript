"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const knex = require("knex");
const environment = process.env.NODE_ENV || "development";
const knexConfig = require("../../knexfile");
const config = knexConfig[environment];
exports.default = knex(config);
