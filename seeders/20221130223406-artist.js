"use strict"

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("artists", [
      {
        user_id: 1,
        name: "Drake",
        artistId: 1,
        liked: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2,
        name: "Billie Eilish",
        artistId: 2,
        liked: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 3,
        name: "The Weeknd",
        artistId: 3,
        liked: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 4,
        name: "The Beatles",
        artistId: 4,
        liked: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 5,
        name: "Metallica",
        artistId: 5,
        liked: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 6,
        name: "Twice",
        artistId: 6,
        liked: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 7,
        name: "Britney Spears",
        artistId: 7,
        liked: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 8,
        name: "Adele",
        artistId: 8,
        liked: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 9,
        name: "Ghost",
        artistId: 9,
        liked: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 10,
        name: "Beethoven",
        artistId: 10,
        liked: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 11,
        name: "The Clash",
        artistId: 11,
        liked: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 12,
        name: "James Brown",
        artistId: 12,
        liked: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 13,
        name: "Brian Eno",
        artistId: 13,
        liked: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 14,
        name: "deadmau5",
        artistId: 14,
        liked: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 15,
        name: "Kendrick Lamar",
        artistId: 15,
        liked: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 16,
        name: "John Coltrane",
        artistId: 16,
        liked: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 17,
        name: "Black Flag",
        artistId: 17,
        liked: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 18,
        name: "Boards of Canada",
        artistId: 18,
        liked: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 19,
        name: "Bob Marley",
        artistId: 19,
        liked: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 20,
        name: "Bad Bunny",
        artistId: 20,
        liked: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 21,
        name: "BTS",
        artistId: 21,
        liked: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 22,
        name: "ITZY",
        artistId: 3,
        liked: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 23,
        name: "The Weeknd",
        artistId: 23,
        liked: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 24,
        name: "John Legend",
        artistId: 24,
        liked: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 25,
        name: "Alicia Keys",
        artistId: 25,
        liked: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 26,
        name: "The Weeknd",
        artistId: 26,
        liked: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 27,
        name: "TOOL",
        artistId: 27,
        liked: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 28,
        name: "Johnny Cash",
        artistId: 28,
        liked: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 29,
        name: "Simon & Garfunkel",
        artistId: 29,
        liked: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 30,
        name: "Black Sabbath",
        artistId: 30,
        liked: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 31,
        name: "Two Door Cinema Club",
        artistId: 31,
        liked: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("artists")
  },
}
