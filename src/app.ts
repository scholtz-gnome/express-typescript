import * as express from "express";
import { Express, Request, Response } from "express";
import * as bodyParser from "body-parser";
import * as compression from "compression";
import db from "./db/db.connection";
import blogRouter from "./blog/blog.router";

export function newApp(): Express {
  const app = express();

  app.use(compression());
  app.use(bodyParser.json());

  app.get("/", (_, res: Response) => {
    res.send("Hello World!");
  });

  app.use("/blogs", blogRouter);
  
  return app;
}