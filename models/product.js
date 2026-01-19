'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      Product.belongsTo(models.Category,{
        foreignKey : "category"
      });
    }
  }
  Product.init({
    pname:{
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull : { msg : "Product Name Can't be NULL." },
        notEmpty : { msg : "Product Name Can't be Empty." }
      }
    },
    desc: DataTypes.STRING,
    price: {
      type: DataTypes.FLOAT,
      allowNull:false,
      validate:{
        notNull : { msg : "Price Can't be NULL." },
        isNumeric : { msg : "Price Can't be String." }
      }
    },
    image: {
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull : { msg : "Product Image Can't be NULL." }
      }
    }
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};