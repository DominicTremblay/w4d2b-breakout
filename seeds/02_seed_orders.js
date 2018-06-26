const faker = require("faker");

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  console.log("Seeding orders...");
  return Promise.all([
    knex.raw("ALTER SEQUENCE orders_id_seq RESTART WITH 1"),

    knex("orders")
      .del()
      .then(function() {
        // Inserts seed entries
        console.log("Inserting orders..");
        return knex("customers").then(customers => {
          const orders = [];
          for (const customer of customers) {
            orders.push(
              knex("orders").insert({
                customer_id: customer.id,
                order_date: new Date(),
                shipVia: faker.company.companyName()
              })
            );
            // console.log(orders);
          }
          return Promise.all(orders);
        });
      })
  ]);
};
