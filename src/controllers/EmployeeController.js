const employeeService = require("../services/EmployeeService");

exports.get = async (req, res) => {
  const employees = await employeeService.getEmployees();
  res.json(employees);
};

exports.create = async (req, res, next) => {
  const employee = await employeeService.createEmployee(req.body);
  res.json(employee);
};
