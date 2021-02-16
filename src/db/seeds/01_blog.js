exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("blog")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("blog").insert([
        {
          title: "Blog Post One",
          author: "Steve",
          content: "How to write your first blog."
        },
        {
          title: "Blog Post Two",
          author: "Bob",
          content: "Following on from the first blog."
        },
        {
          title: "Blog Post Three",
          author: "Mike",
          content: "This is the third blog you know."
        }
      ]);
    });
};
