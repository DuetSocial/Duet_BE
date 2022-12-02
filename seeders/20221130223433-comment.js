"use strict"

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("comments", [
      {
        user_id: 1,
        name: "Justin Harris",
        photo: "https://imgur.com/ttaOi6C.jpg",
        content: "Yo this band is awesome! any other recs?",
        commentId: 1,
        liked: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2,
        name: "Matt Sweeney",
        photo: "https://imgur.com/UgtSNzz.jpg",
        content: "Billies new album is my fav of the year",
        commentId: 2,
        liked: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 3,
        name: "Matt Sweeney",
        photo: "https://imgur.com/UgtSNzz.jpg",
        content: "Adele's last album was top 10 of the year",
        commentId: 3,
        liked: 18,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 4,
        name: "Jack Viana",
        photo: "https://imgur.com/j5cmgCe.jpg",
        content:
          "Twice are incredible live. I can't wait until they tour again",
        commentId: 4,
        liked: 32,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 5,
        name: "Jordan Wolter",
        photo: "https://imgur.com/fqIK3zq.jpg",
        content: "Can't wait for tomorrow's show!",
        commentId: 5,
        liked: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 6,
        name: "Jack Viana",
        photo: "https://imgur.com/j5cmgCe.jpg",
        content: "The Weeknd sure can sing",
        commentId: 6,
        liked: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 7,
        name: "Tyler Wade",
        photo: "https://imgur.com/rXxW0wv.jpg",
        content:
          "Kendrick's Mr. Morale & the Big Steppers is my favorite album of 2022",
        commentId: 7,
        liked: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 8,
        name: "Jeremy Taubman",
        photo: "https://imgur.com/kPeYEzt.jpg",
        content: "The Beatles were one of the greatest bands of all time",
        commentId: 8,
        liked: 22,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 9,
        name: "Devon Jones",
        photo: "https://imgur.com/fMvbSbq.jpg",
        content: "Loving Metallica's new song",
        commentId: 9,
        liked: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 10,
        name: "Tylus Dawkins",
        photo: "https://i.imgur.com/GsE7PtU.jpg",
        content: "Alt Rock and Two Door Cinema Club are my go to's",
        commentId: 10,
        liked: 14,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 11,
        name: "Justin Harris",
        photo: "https://imgur.com/ttaOi6C.jpg",
        content: "Cant wait for the new Pumpkins album",
        commentId: 11,
        liked: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 12,
        name: "Brandon Chan",
        photo: "https://imgur.com/tGQjioL.jpg",
        content: "Anything Eno touches is gold",
        commentId: 12,
        liked: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("comments")
  },
}
