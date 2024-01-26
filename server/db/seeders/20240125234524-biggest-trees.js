'use strict';
const {Tree} = require('../models');

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
   await Tree.bulkCreate([
    {
        tree: 'General Sherman',
        location: 'Sequoia National Park',
        heightFt: 274.9,
        groundCircumferenceFt: 102.6
    },
    {
        tree: 'General Grant',
        location: 'Kings Canyon National Park',
        heightFt: 268.1,
        groundCircumferenceFt: 107.5
    },
    {
        tree: 'President',
        location: 'Sequoia National Park',
        heightFt: 240.9,
        groundCircumferenceFt: 93
    },
    {
        tree: 'Lincoln',
        location: 'Sequoia National Park',
        heightFt: 255.8,
        groundCircumferenceFt: 98.3
    },
    {
        tree: 'Stagg',
        location: 'Private Land',
        heightFt: 243,
        groundCircumferenceFt: 109
    },
],{validate:true})
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Trees')
  }
};
