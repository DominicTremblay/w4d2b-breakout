exports.up = function(knex, Promise) {
  return knex.schema.table("customers", table => {
    table.string("password");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table("customers", table => {
    table.dropColumn("password");
  });
};
