'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CustomerOrder extends Model {
    
    static associate(models) {
      // define association here
      CustomerOrder.belongsTo(models.User,{
        foreignKey:"customer"
      })
    }
  }
  CustomerOrder.init({
    orderdate: 
    {
      type:DataTypes.DATE,
      allowNull:false,
      validate:{
        notnull:{msg:"order date can't be null"}
      }
    },
    amount: 
    {
      type:DataTypes.FLOAT,
      allowNull:false,
      validate:{
        notnull:{msg:"amount can't be null"}
      }
    },
    isdeliver: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'CustomerOrder',
  });
  return CustomerOrder;
};