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
        },
        {
          userId: 2,
          userName: "Matt Sweeney",
          password: "admin2",
          photo: "img.jpg",
          genreInterest: "Pop",
          artistInterest: "Billie Eilish",
          commentId: 2,
        },
        {
          userId: 3,
          userName: "Jack Viana",
          password: "admin3",
          photo: "img.jpg",
          genreInterest: "Pop",
          artistInterest: "Ariana Grande",
          commentId: 3,
        },
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users")
  },
}
