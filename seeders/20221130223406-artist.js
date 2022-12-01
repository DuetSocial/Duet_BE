'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "artists",
      [
        {
          user_id: 1,
          name: "Drake",
          artistId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: 2,
          name: "Billie Eilish",
          artistId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: 3,
          name: "The Weeknd",
          artistId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]
  )},

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("artists")
  }
};
