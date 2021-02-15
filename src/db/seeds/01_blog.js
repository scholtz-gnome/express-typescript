
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('blog').del()
    .then(function () {
      // Inserts seed entries
      return knex('blog').insert([
        { id: 1, title: 'Blog Post One', author: "Steve", content: "How to write your first blog." },
        { id: 2, title: 'Blog Post Two', author: "Bob", content: "Following on from the first blog." },
        { id: 3, title: 'Blog Post Three', author: "Mike", content: "This is the third blog you know." }
      ]);
    });
};
