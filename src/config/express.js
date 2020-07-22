const bodyParser = require("body-parser");
const express = require("express");
const routes = require("../routes");
const { convertError, notFound } = require("../middleware/error");
/**
 * Express instance
 * @public
 */
const app = express();

// parse body params and attache them to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/v1", routes);

app.use(notFound);
app.use(convertError);

module.exports = app;
