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

  it("GET /blogs reads titles of all blogs in array", () => {
    return request(app).get("/blogs").expect(200, ["Blog Post One", "Blog Post Two", "Blog Post Three"]);
  });

  it("GET /blogs/1 reads title of first blog", () => {
    return request(app).get("/blogs/1").expect(200, "Blog Post One");
  });

  it("POST /blogs creates blog in db and returns added blog title", () => {
    return request(app)
      .post("/blogs")
      .set("Accept", "application/json")
      .send({
        title: "Blog Post Four",
        author: "Bobby",
        content: "This is the fourth blog.",
      })
      .expect(201, "Blog Post Four");
  });

  it("PATCH /blogs/1 updates first blog by changing content", () => {
    return request(app)
      .patch("/blogs/1")
      .send({
        content: "This first blog has been updated!"
      })
      .expect(200, "This first blog has been updated!");
  });

  it("DELETE /blogs/4 deletes fourth blog", () => {
    return request(app)
      .delete("/blogs/4")
      .expect(200, "Blog Post Four DELETED");
  });
});
