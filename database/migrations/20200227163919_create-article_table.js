
exports.up = function(knex) {
  return knex.schema.createTable('article', function(tbl) {
    tbl.increments();

    tbl
      .string('title', 255)
      .notNullable()
      .unique()
      .index();
    
    tbl
      .string('content', 255)
      .notNullable()
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('article');
};
