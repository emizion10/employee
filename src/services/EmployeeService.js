const employeeRepository = require("../repositories/EmployeeRepository");

exports.createEmployee = async ({
  name,
  department,
  gender,
  address,
  phone,
}) => {
  return employeeRepository.createEmployee({
    name,
    department,
    gender,
    address,
    phone,
  });
};

exports.getEmployees = async () => {
  return employeeRepository.getAllEmployees();
};
