'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "artists",
      [
        {
          userId: 1,
          name: "Drake",
          artistId: 1
        },
        {
          userId: 2,
          name: "Billie Eilish",
          artistId: 2
        },
        {
          userId: 3,
          name: "The Weeknd",
          artistId: 3
        }
      ]
  )},

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("artists")
  }
};
