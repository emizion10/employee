const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../config/sequelize");
class Employee extends Model {}

Employee.init(
  {
    name: DataTypes.STRING,
    department: DataTypes.STRING,
    gender: DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.STRING,
    isDeleted: {
      type: DataTypes.BOOLEAN,
      field: "is_deleted",
      defaultValue: false,
    },
  },
  {
    sequelize,
    modelName: "Employee",
  }
);
module.exports = Employee;
