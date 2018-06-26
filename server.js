const config = require("./knexfile");
const env = "development";
const knex = require("knex")(config[env]);

const displayResult = result => {
  let outputStr = "- ";
  for (const currentElement of result) {
    for (const property in currentElement) {
      outputStr += `${property}: ${currentElement[property]} `;
    }
    outputStr += "\n";
  }
  console.log(outputStr);
};

// knex select statement

knex
  .select("first_name", "last_name", "email")
  .from("customers")
  .then(result => {
    console.log("SELECT STATEMENT ... ");
    displayResult(result);
  })
  .catch(error => {
    console.log("Error: ", error);
    return Promise.resolve();
  })
  .finally(() => {
    console.log("Query is completed!");
    knex.destroy();
  });

// select with where

knex
  .select("first_name", "last_name", "email")
  .from("customers")
  .where({ first_name: "Aubrey" })
  .then(result => {
    console.log("SELECT WITH WHERE ... ");
    displayResult(result);
  })
  .catch(error => {
    console.log("Error: ", error);
    return Promise.resolve();
  })
  .finally(() => {
    console.log("Query is completed!");
    knex.destroy();
  });

// Join

knex
  .select("first_name", "last_name", "email", "order_date")
  .from("customers")
  .innerJoin("orders", "customers.id", "orders.customer_id")
  .then(result => {
    console.log("SELECT WITH A JOIN ... ");
    displayResult(result);
  })
  .catch(error => {
    console.log("Error: ", error);
    return Promise.resolve();
  })
  .finally(() => {
    console.log("Query is completed!");
    knex.destroy();
  });
