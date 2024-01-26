'use strict';



const {Insect} = require('../models')
module.exports = {
  up: async (queryInterface, Sequelize) => {
  
   await Insect.bulkCreate([
    Mike,
   ],{validate:true})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
