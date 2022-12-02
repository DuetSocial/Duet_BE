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
          photo: "https://imgur.com/a/I80mVVV",
          genreInterest: "Punk",
          artistInterest: "The Clash",
          commentId: 1,
          liked: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          userName: "Matt Sweeney",
          password: "admin2",
          photo: "https://imgur.com/a/I80mVVV",
          genreInterest: "Pop",
          artistInterest: "Billie Eilish",
          commentId: 2,
          liked: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          userName: "Jack Viana",
          password: "admin3",
          photo: "https://imgur.com/a/I80mVVV",
          genreInterest: "K-Pop",
          artistInterest: "Twice",
          commentId: 3,
          liked: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          userName: "Jordan Wolter",
          password: "admin4",
          photo: "https://imgur.com/a/I80mVVV",
          genreInterest: "EDM",
          artistInterest: "Ariana Grande",
          commentId: 4,
          liked: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 5,
          userName: "Jeremy Taubman",
          password: "admin5",
          photo: "https://imgur.com/a/I80mVVV",
          genreInterest: "Rock",
          artistInterest: "The Beatles",
          commentId: 5,
          liked: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 6,
          userName: "Devon Jones",
          password: "admin6",
          photo: "https://imgur.com/a/I80mVVV",
          genreInterest: "Metal",
          artistInterest: "Metallica",
          commentId: 6,
          liked: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 7,
          userName: "Tylus Dawkins",
          password: "admin7",
          photo: "https://imgur.com/a/I80mVVV",
          genreInterest: "Rock",
          artistInterest: "Two Door Cinema Club",
          commentId: 7,
          liked: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 8,
          userName: "Tim Villanueva",
          password: "admin8",
          photo: "https://imgur.com/a/I80mVVV",
          genreInterest: "Jazz",
          artistInterest: "John Coltrane",
          commentId: 8,
          liked: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 9,
          userName: "Greg Swan",
          password: "admin9",
          photo: "https://imgur.com/a/I80mVVV",
          genreInterest: "Folk",
          artistInterest: "Simon & Garfunkel",
          commentId: 9,
          liked: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 10,
          userName: "Lindsey Lawler",
          password: "admin10",
          photo: "https://imgur.com/a/I80mVVV",
          genreInterest: "Country",
          artistInterest: "Johnny Cash",
          commentId: 10,
          liked: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 11,
          userName: "Imdad Hassain",
          password: "admin11",
          photo: "https://imgur.com/a/I80mVVV",
          genreInterest: "EDM",
          artistInterest: "deadmau5",
          commentId: 11,
          liked: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 12,
          userName: "Andrew Zheng",
          password: "admin12",
          photo: "https://imgur.com/a/I80mVVV",
          genreInterest: "Metal",
          artistInterest: "Ghost",
          commentId: 12,
          liked: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 13,
          userName: "Tyler Wade",
          password: "admin13",
          photo: "https://imgur.com/a/I80mVVV",
          genreInterest: "Rap",
          artistInterest: "Kendrick Lamar",
          commentId: 13,
          liked: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 14,
          userName: "Jordan Wolter",
          password: "admin14",
          photo: "https://imgur.com/a/I80mVVV",
          genreInterest: "Pop",
          artistInterest: "Ariana Grande",
          commentId: 14,
          liked: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 15,
          userName: "Brandon Chan",
          password: "admin15",
          photo: "https://imgur.com/a/I80mVVV",
          genreInterest: "Ambient",
          artistInterest: "Brian Eno",
          commentId: 15,
          liked: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 16,
          userName: "Jeremy Villavla",
          password: "admin16",
          photo: "https://imgur.com/a/I80mVVV",
          genreInterest: "Funk",
          artistInterest: "James Brown",
          commentId: 16,
          liked: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users")
  },
}
