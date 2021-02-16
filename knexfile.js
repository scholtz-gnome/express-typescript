// Update with your config settings.
module.exports = {
  test: {
    client: "pg",
    connection: {
      host: "localhost",
      user: "postgres",
      password: "admin",
      database: "blog_test",
    },
    migrations: {
      directory: "./src/db/migrations",
    },
    seeds: {
      directory: "./src/db/seeds",
    },
  },

  development: {
    client: "pg",
    connection: {
      host: "localhost",
      user: "postgres",
      password: "admin",
      database: "blog_dev",
    },
    migrations: {
      directory: "./src/db/migrations",
    },
    seeds: {
      directory: "./src/db/seeds",
    },
  },

  production: {
    client: "pg",
    connection: {
      host: "localhost",
      user: "postgres",
      password: "admin",
      database: "blog",
    },
    migrations: {
      directory: "./src/db/migrations",
    },
    seeds: {
      directory: "./src/db/seeds",
    },
  },
};
