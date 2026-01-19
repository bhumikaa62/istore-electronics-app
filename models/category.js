'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    
    static associate(models) {
      // define association here
    }
  }
  Category.init({
    tittle: 
    {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{notNull:{msg:"tiitle is required"},
    notEmpty:{msg:"tittle should not be empty"}}
    },
    desc: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};