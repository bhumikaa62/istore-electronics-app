'use strict';

const customerorder = require('../models/customerorder');
const product = require('../models/product');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('OrderItems', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      price: {
        type: Sequelize.FLOAT,
        allowNull:false
      },
      customerorder:{
        type:Sequelize.INTEGER,
        allowNull:false,
        References:{
          model:'CustomerOrders',
          key:'id'
        }
      },
      product:{
        type:Sequelize.INTEGER,
        allowNull:false,
        References:{
          model:'Products',
          key:'id'}
      },
      qty: {
        type: Sequelize.INTEGER,
        allowNull:false
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
    await queryInterface.dropTable('OrderItems');
  }
};