"use strict"

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          userId: 1,
          userName: "Justin Harris",
          password: "admin1",
          photo: "img.jpg",
          genreInterest: "Rock",
          artistInterest: "Radiohead",
          commentId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          userName: "Matt Sweeney",
          password: "admin2",
          photo: "img.jpg",
          genreInterest: "Pop",
          artistInterest: "Billie Eilish",
          commentId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 3,
          userName: "Jack Viana",
          password: "admin3",
          photo: "img.jpg",
          genreInterest: "Pop",
          artistInterest: "Ariana Grande",
          commentId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users")
  },
}
