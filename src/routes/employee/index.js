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

router.get("/testerror", (req, res, next) => {
  next(new Error("No Data"), req, res);
});

module.exports = router;
