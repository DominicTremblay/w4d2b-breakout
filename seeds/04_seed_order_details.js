const faker = require("faker");

exports.seed = function(knex, Promise) {
  console.log("Seeding Product-Details...");
  return knex("order_details")
    .del()
    .then(function() {
      return Promise.all([
        // knex.raw("ALTER SEQUENCE order_details_id_seq RESTART WITH 1"),
        knex("order_details").insert([
          {
            order_id: 1,
            product_id: 1,
            unit_price: faker.commerce.price(),
            quantity: faker.random.number()
          },
          {
            order_id: 2,
            product_id: 2,
            unit_price: faker.commerce.price(),
            quantity: faker.random.number()
          },
          {
            order_id: 3,
            product_id: 3,
            unit_price: faker.commerce.price(),
            quantity: faker.random.number()
          }
        ])
      ]);
    });
};
