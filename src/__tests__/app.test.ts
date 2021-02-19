import * as request from "supertest";
import { newApp } from "../app";

const app = newApp();

describe.only("Test root route", () => {
  it("should respond with 200 response status code and 'Hello World!' in body at '/' route", () => {
    return request(app).get("/").expect(200, "Welcome to the Backend Blog");
  });
});
