'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "genres",
      [
        {
          userId: 1,
          name: "Pop",
          genreId: 1
        },
        {
          userId: 2,
          name: "Rap",
          genreId: 2
        },
        {
          userId: 3,
          name: "R&B",
          genreId: 3
        }
      ]
  )},

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("genres")
  }
};
