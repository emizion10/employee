const Employee = require("../entities/Employee");

module.exports.getAllEmployees = async () => {
  return Employee.findAll({
    where: {
      isDeleted: false,
    },
  });
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

module.exports.getEmployee = async (employeeId) => {
  return Employee.findOne({
    where: {
      id: employeeId,
      isDeleted: false,
    },
  });
};

module.exports.updateEmployee = async (
  employeeId,
  { name, department, gender, address, phone }
) => {
  return Employee.update(
    {
      name,
      department,
      gender,
      address,
      phone,
    },
    { where: { id: employeeId, isDeleted: false } }
  ).then(() => {
    return Employee.findOne({ where: { id: employeeId, isDeleted: false } });
  });
};

module.exports.deleteEmployee = async (employeeId) => {
  return Employee.update(
    { isDeleted: true },
    { where: { id: employeeId, isDeleted: false } }
  );
};
