"use strict"

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("comments", [
      {
        user_id: 1,
        name: "Justin Harris",
        photo: "https://imgur.com/a/I80mVVV",
        content: "Yo this band is awesome! any other recs?",
        commentId: 1,
        liked: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2,
        name: "Matt Sweeney",
        photo: "https://imgur.com/a/I80mVVV",
        content: "Billies new album is my fav of the year",
        commentId: 2,
        liked: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 3,
        name: "Jack Viana",
        photo: "https://imgur.com/a/I80mVVV",
        content: "The Weeknd sure can sing",
        commentId: 3,
        liked: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("comments")
  },
}
