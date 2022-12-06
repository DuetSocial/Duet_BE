"use strict"

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("artists", "photo", {
      type: Sequelize.INTEGER,
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("artists", "photo")
  },
}
