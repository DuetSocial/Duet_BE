'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  await queryInterface.addColumn('comments', 'liked',{
    type:Sequelize.INTEGER
  })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('comments', 'liked')
  }
};
