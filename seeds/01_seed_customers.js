const faker = require("faker");

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return Promise.all([
    knex.raw("ALTER SEQUENCE customers_id_seq RESTART WITH 1"),
    knex("customers")
      .del()
      .then(function() {
        // Inserts seed entries
        return knex("customers").insert([
          {
            first_name: faker.name.firstName(),
            last_name: faker.name.lastName(),
            email: faker.internet.email(),
            password: faker.internet.password()
          },
          {
            first_name: faker.name.firstName(),
            last_name: faker.name.lastName(),
            email: faker.internet.email(),
            password: faker.internet.password()
          },
          {
            first_name: faker.name.firstName(),
            last_name: faker.name.lastName(),
            email: faker.internet.email(),
            password: faker.internet.password()
          }
        ]);
      })
  ]);
};
