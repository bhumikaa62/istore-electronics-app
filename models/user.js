'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    
    static associate(models) {
      // define association here
    }
  }
  User.init({
    name: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{notNull:{msg:"Name is requires"},
      notEmpty:{msg:"name should not be empty"}
    }},
    email:
    {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{notNull:{msg:"Email is requires"},
      notEmpty:{msg:"Email hould not be empty"},
      isEmail:{msg:"must be a valid email address"}
    }},
    password: 
    {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{notNull:{msg:"Password is requires"},
      notEmpty:{msg:"Password should not be empty"}
    }
    },
    role: DataTypes.STRING,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};