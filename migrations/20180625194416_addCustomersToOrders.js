exports.up = function(knex, Promise) {
  return knex.schema.table("orders", table => {
    table.integer("customer_id");
    table
      .foreign("customer_id")
      .references("id")
      .on("customers")
      .onDelete("CASCADE");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table("orders", table => {
    table.dropColumn("customer_id");
  });
};
