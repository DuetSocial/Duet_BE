'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "genres",
      [
        {
          user_id: 1,
          name: "Pop",
          genreId: 1,
          liked: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: 2,
          name: "Rap",
          genreId: 2,
          liked: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: 3,
          name: "R&B",
          genreId: 3,
          liked: true,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]
  )},

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("genres")
  }
};
