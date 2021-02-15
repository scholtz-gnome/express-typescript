import * as config from "../config";
import * as knex from "knex";
const environment = config.NODE_ENV || "development";
import * as knexConfig from "../../knexfile";
const dbConfig = knexConfig[environment];

export default knex(dbConfig);
