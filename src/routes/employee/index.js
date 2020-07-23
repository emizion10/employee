const express = require("express");
const employeeController = require("../../controllers/EmployeeController");
const validator = require("express-joi-validation").createValidator({
  passError: true,
});
const { handleRequest } = require("../../helpers/requestHandler");
const { createEmployee } = require("../../validations/employee");

const router = express.Router();

router
  .route("/")
  .get(handleRequest(employeeController.get))
  .post(
    validator.body(createEmployee),
    handleRequest(employeeController.create)
  );

router
  .route("/:employeeId")
  .get(handleRequest(employeeController.getSpecific))
  .put(validator.body(createEmployee), handleRequest(employeeController.update))
  .delete(handleRequest(employeeController.delete));

module.exports = router;
