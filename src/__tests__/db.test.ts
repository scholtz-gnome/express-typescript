import db from "../db/db.connection";

describe("Test blog_test database", () => {
  beforeAll(async () => {
    await db.migrate.latest();
    await db.seed.run();
  });

  it("should return author from first seeded blog", async () => {
    const blogs = await db.raw(`SELECT * FROM blog;`);
    expect(blogs.rows[0].author).toBe("Steve");
  });

  afterAll(async () => {
    await db.migrate.rollback();
    await db.destroy();
  });
});
