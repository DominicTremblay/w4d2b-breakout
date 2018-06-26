const faker = require("faker");

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("products")
    .del()
    .then(function() {
      // Inserts seed entries
      return Promise.all([
        knex.raw("ALTER SEQUENCE products_id_seq RESTART WITH 1"),
        knex("products").insert([
          { name: faker.commerce.productName() },
          { name: faker.commerce.productName() },
          { name: faker.commerce.productName() },
          { name: faker.commerce.productName() },
          { name: faker.commerce.productName() }
        ])
      ]);
    });
};
