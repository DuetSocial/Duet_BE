"use strict"

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("genres", [
      {
        user_id: 1,
        name: "Pop",
        liked: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2,
        name: "R&B",
        liked: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 3,
        name: "Rock",
        liked: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 4,
        name: "Rap",
        liked: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 5,
        name: "K-Pop",
        liked: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 6,
        name: "Metal",
        liked: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 7,
        name: "Country",
        liked: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 8,
        name: "Classical",
        liked: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 9,
        name: "EDM",
        liked: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 10,
        name: "Latin",
        liked: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 11,
        name: "Jazz",
        liked: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 12,
        name: "Reggae",
        liked: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 13,
        name: "Punk",
        liked: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 14,
        name: "Folk",
        liked: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 15,
        name: "Funk",
        liked: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("genres")
  },
}
