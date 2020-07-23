const _ = require("lodash");
const employeeService = require("../services/EmployeeService");

exports.get = async (req, res) => {
  const employees = await employeeService.getEmployees();
  res.json(employees);
};

exports.create = async (req, res, next) => {
  const employee = await employeeService.createEmployee(req.body);
  res.json(employee);
};

exports.getSpecific = async (req, res, next) => {
  const employee = await employeeService.getSpecificEmployee(
    req.params.employeeId
  );
  if (_.isNull(employee)) {
    next(new Error("Invalid Query"));
  } else {
    res.json(employee);
  }
};

exports.update = async (req, res, next) => {
  const updatedEmployee = await employeeService.updateEmployee(
    req.params.employeeId,
    req.body
  );
  if (_.isNull(updatedEmployee)) {
    next(new Error("Invalid Query"));
  } else {
    res.json(updatedEmployee);
  }
};

exports.delete = async (req, res, next) => {
  const [deleteEmployee] = await employeeService.deleteEmployee(
    req.params.employeeId
  );
  if (deleteEmployee === 0) {
    next(new Error("Invalid Query"));
  } else {
    res.json({ message: "Deletion Successful!" });
  }
};
