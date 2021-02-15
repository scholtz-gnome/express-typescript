"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = require("../config");
const knex = require("knex");
const environment = config.NODE_ENV || "development";
const knexConfig = require("../../knexfile");
const dbConfig = knexConfig[environment];
exports.default = knex(dbConfig);
