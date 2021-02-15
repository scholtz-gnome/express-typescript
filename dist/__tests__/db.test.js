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
const db_connection_1 = require("../db/db.connection");
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
