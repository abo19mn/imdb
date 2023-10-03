exports.up = function (knex) {
  return knex.schema.createTable("movie", (table) => {
    table.increment("id");
    table.string("email").notNullable().unique();
    table.string("first_Name").notNullable().unique();
    table.string("last_Name").notNullable().unique();
    table.timeStamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("person");
};
