'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderItems extends Model {
   
    static associate(models) {
      // define association here
      OrderItems.belongsTo(models.CustomerOrder,
        {foreignKey:"customerorder"});
        OrderItems.belongsTo(models.Product,{
          foreignKey:"product"
        })
    }
  }
  OrderItems.init({
    price: 
    {
      type:DataTypes.FLOAT,
      allowNull:false,
      validate:{
        notNull:{msg:"price cant be null"}
      }
    },
    qty: 
     {
      type:DataTypes.INTEGER,
      allowNull:false,
      validate:{
        notNull:{msg:"Quantity cant be null"}
      }
    },
  }, {
    sequelize,
    modelName: 'OrderItems',
  });
  return OrderItems;
};