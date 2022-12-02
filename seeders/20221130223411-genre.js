"use strict"

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("genres", [
      {
        user_id: 1,
        name: "Pop",
        genreId: 1,
        liked: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2,
        name: "R&B",
        genreId: 2,
        liked: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 3,
        name: "Rock",
        genreId: 3,
        liked: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 4,
        name: "Rap",
        genreId: 4,
        liked: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 5,
        name: "K-Pop",
        genreId: 5,
        liked: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 6,
        name: "Metal",
        genreId: 6,
        liked: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 7,
        name: "Country",
        genreId: 7,
        liked: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 8,
        name: "Classical",
        genreId: 8,
        liked: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 9,
        name: "EDM",
        genreId: 9,
        liked: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 10,
        name: "Latin",
        genreId: 10,
        liked: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 11,
        name: "Jazz",
        genreId: 11,
        liked: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 12,
        name: "Reggae",
        genreId: 12,
        liked: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 13,
        name: "Punk",
        genreId: 13,
        liked: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 14,
        name: "Folk",
        genreId: 14,
        liked: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 15,
        name: "Funk",
        genreId: 15,
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
