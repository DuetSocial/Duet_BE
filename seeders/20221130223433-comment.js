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
        likes: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2,
        name: "Matt Sweeney",
        photo: "https://imgur.com/UgtSNzz.jpg",
        content: "Billies new album is my fav of the year",
        likes: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 3,
        name: "Matt Sweeney",
        photo: "https://imgur.com/UgtSNzz.jpg",
        content: "Adele's last album was top 10 of the year",
        likes: 18,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 4,
        name: "Jack Viana",
        photo: "https://imgur.com/j5cmgCe.jpg",
        content:
          "Twice are incredible live. I can't wait until they tour again",
        likes: 32,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 5,
        name: "Jordan Wolter",
        photo: "https://imgur.com/fqIK3zq.jpg",
        content: "Can't wait for tomorrow's show!",
        likes: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 6,
        name: "Jack Viana",
        photo: "https://imgur.com/j5cmgCe.jpg",
        content: "The Weeknd sure can sing",
        likes: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 7,
        name: "Tyler Wade",
        photo: "https://imgur.com/rXxW0wv.jpg",
        content:
          "Kendrick's Mr. Morale & the Big Steppers is my favorite album of 2022",
        likes: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 8,
        name: "Jeremy Taubman",
        photo: "https://imgur.com/kPeYEzt.jpg",
        content: "The Beatles were one of the greatest bands of all time",
        likes: 22,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 9,
        name: "Devon Jones",
        photo: "https://imgur.com/fMvbSbq.jpg",
        content: "Loving Metallica's new song",
        likes: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 10,
        name: "Tylus Dawkins",
        photo: "https://i.imgur.com/GsE7PtU.jpg",
        content: "Alt Rock and Two Door Cinema Club are my go to's",
        likes: 14,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 11,
        name: "Justin Harris",
        photo: "https://imgur.com/ttaOi6C.jpg",
        content: "Cant wait for the new Pumpkins album",
        likes: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 12,
        name: "Brandon Chan",
        photo: "https://imgur.com/tGQjioL.jpg",
        content: "Anything Eno touches is gold",
        likes: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("comments")
  },
}
