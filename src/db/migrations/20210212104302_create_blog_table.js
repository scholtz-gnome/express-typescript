exports.up = function (knex) {
  return knex.schema.createTable("blog", (table) => {
    table.increments().primary();
    table.string("title");
    table.string("author");
    table.string("content");
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("blog");
};
