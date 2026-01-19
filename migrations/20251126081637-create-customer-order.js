'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CustomerOrders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      orderdate: {
        type: Sequelize.DATE,
        allowNull:false
      },
      amount: {
        type: Sequelize.FLOAT,
        allowNull:false
      },
      customer:{
        type:Sequelize.INTEGER,
        allowNull:false,
        References:{
          model:'Users',
          key:'id'
        }
      },
      isdeliver: {
        type: Sequelize.BOOLEAN,
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
    await queryInterface.dropTable('CustomerOrders');
  }
};