const express = require("express");
const employeeRoute = require("./employee/index");

const router = express.Router();

router.get("/status", (req, res) => res.send("OK!"));

router.use("/employees", employeeRoute);

module.exports = router;
