'use strict';

const category = require('../models/category');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      pname: {
        type: Sequelize.STRING,
        allowNull:false
      },
      desc: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.FLOAT,
        allowNull:false
      },
      image: {
        type: Sequelize.STRING,
        allowNull:false
      },
      category:{
        type:Sequelize.INTEGER,
        allowNull:false,
        refrences:{
          model:'Categories',
          key:'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  }
};