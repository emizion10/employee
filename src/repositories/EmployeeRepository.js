const Employee = require("../entities/Employee");

module.exports.getAllEmployees = async () => {
  return Employee.findAll({});
};

module.exports.createEmployee = async ({
  name,
  gender,
  department,
  address,
  phone,
}) => {
  return Employee.create({
    name,
    department,
    gender,
    address,
    phone,
  });
};
