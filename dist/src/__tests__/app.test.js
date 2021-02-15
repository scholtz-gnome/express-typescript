"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
process.env.NODE_ENV = "test";
const request = require("supertest");
const app_1 = require("../app");
const db_connection_1 = require("../db/db.connection");
const app = app_1.newApp();
describe("Test public routes", () => {
    it("should respond with 200 response status code and 'Hello World!' in body at '/' route", () => {
        return request(app)
            .get("/")
            .expect(200, "Hello World!");
    });
    it("should respond with 200 response status code and 'Pong' in body at '/ping' route", () => {
        return request(app)
            .get("/ping")
            .expect(200, "Pong");
    });
});
describe("Test blog_test database", () => {
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        yield db_connection_1.default.migrate.latest();
        yield db_connection_1.default.seed.run();
    }));
    it("should return author from first seeded blog", () => __awaiter(void 0, void 0, void 0, function* () {
        const blogs = yield db_connection_1.default.raw(`SELECT * FROM blog;`);
        expect(blogs.rows[0].author).toBe("Steve");
    }));
    afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
        yield db_connection_1.default.migrate.rollback();
        yield db_connection_1.default.destroy();
    }));
});
