import db from "../db/db.connection";
import * as request from "supertest";
import { newApp } from "../app";

const app = newApp();

describe("tests for blog.controller.ts", () => {
  beforeAll(async () => {
    await db.migrate.latest();
    await db.seed.run();
  });

  afterAll(async () => {
    await db.migrate.rollback();
    await db.destroy();
  });

  it("GET /blogs returns titles of all blogs in array", () => {
    return request(app).get("/blogs").expect(200, ["Blog Post One", "Blog Post Two", "Blog Post Three"]);
  });

  it("GET /blogs/1 returns title of first blog", () => {
    return request(app).get("/blogs/1").expect(200, "Blog Post One");
  });

  it("POST /blogs adds blog to db and returns added blog title", () => {
    return request(app)
      .post("/blogs")
      .set("Accept", "application/json")
      .send({
        title: "Blog Post Three",
        author: "Bobby",
        content: "This is the third blog.",
      })
      .expect(200, "Blog Post Three");
  });
});
