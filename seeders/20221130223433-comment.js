'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "comments",
      [
        {
          userId: 1,
          name: "Justin Harris",
          photo: "img.png",
          content: "Yo this band is awesome! any other recs?",
          commentId: 1
        },
        {
          userId: 2,
          name: "Matt Sweeney",
          photo: "img.png",
          content: "Billies new album is my fav of the year",
          commentId: 2
        },
        {
          userId: 3,
          name: "Jack Viana",
          photo: "img.png",
          content: "The Weeknd sure can sing",
          commentId: 3
        }
      ]
  )},

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("comments")
  }
};
