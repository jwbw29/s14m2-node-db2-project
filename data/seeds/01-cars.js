// STRETCH
const cars = [
  {
    vin: "1111111111111",
    make: "toyota",
    model: "prius",
    mileage: 100000,
    title: "clean",
    transmission: "manual",
  },
  {
    vin: "22222222222222",
    make: "toyota",
    model: "corola",
    mileage: 111111,
    title: "salvage",
  },
  {
    vin: "33333333333333",
    make: "Ford",
    model: "F-150",
    mileage: 30000,
  },
];

// exports.seed = function (knex) {
//   return knex("cars")
//     .truncate()
//     .then(() => {
//       return knex("cars").insert(cars);
//     });
// };

exports.seed = async function (knex) {
  await knex("cars").truncate();
  await knex("cars").insert(cars);
};
