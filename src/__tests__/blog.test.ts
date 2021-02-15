import db from "../db/db.connection";
import * as request from "supertest";
import { newApp } from "../app";

const app = newApp();

describe("CRUD operations on blog routes", () => {
  beforeAll(async () => {
    await db.migrate.latest();
    await db.seed.run();
  });

  afterAll(async () => {
    await db.migrate.rollback();
    await db.destroy();
  });

  it("get /blogs returns titles of all blogs in array", () => {
    return request(app)
      .get("/blogs")
      .expect(200, [
        "Blog Post One",
        "Blog Post Two",
        "Blog Post Three"
      ]);
  });

  it("get /blogs/1 returns title of first blog", () => {
    return request(app)
      .get("/blogs/1")
      .expect(200, "Blog Post One");
  });

  it("post /blogs adds blog to db and returns added blog title", () => {
    return request(app)
      .post("/blogs")
      .expect("Content-Type", "application/json; charset=utf-8")
      .send({
        title: "Blog Post Four",
        author: "Bobby",
        content: "This is the fourth blog."
      })
      .expect(200, "Blog Post Four");
  });
});