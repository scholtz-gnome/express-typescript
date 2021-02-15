import { newApp } from "./app";
import * as http from "http";
import * as config from "./config";

const app = newApp();
const port = config.port;

http.createServer({}, app).listen(port, () => {
  console.log(`Listening for requests on port ${port}`);
  console.log(`Running in ${config.NODE_ENV} environment`);
});