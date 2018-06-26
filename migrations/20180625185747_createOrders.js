exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable("orders", table => {
      table.increments("id").primary();
      table.date("order_date");
      table.string("shipVia");
    }),

    knex.schema.createTable("order_details", table => {
      table.integer("order_id");
      table.integer("product_id");
      table.primary(["order_id", "product_id"]);
      table.decimal("unit_price", 14, 2);
      table.integer("quantity");
      table
        .foreign("order_id")
        .references("id")
        .on("orders")
        .onDelete("CASCADE");
      table
        .foreign("product_id")
        .references("id")
        .on("products")
        .onDelete("CASCADE");
    })
  ]);
};

// watch for the order of the drop tables
exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable("order_details"),
    knex.schema.dropTable("orders")
  ]);
};
