'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.addColumn('genres', 'user_id',{
    type:Sequelize.INTEGER
   })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('genres', 'user_id')
  }
};

