const APIError = require("../error/APIError");
const httpStatus = require("http-status-codes");

const handler = (err, req, res) => {
  const response = {
    error: {
      code: err.code,
      message: err.message,
    },
  };
  res.status(err.status);
  res.json(response);
};

const convertError = (err, req, res, next) => {
  let convertedError = err;
  console.log(err);
  if (err.error && err.error.name === "ValidationError") {
    convertedError = new APIError({
      code: "VAL-001",
      message: err.error.message,
      status: httpStatus.BAD_REQUEST,
    });
  } else if (!(err instanceof APIError)) {
    convertedError = new APIError({
      code: 500,
      message: "Something Unexpected happened!",
      status: httpStatus.INTERNAL_SERVER_ERROR,
    });
  }
  return handler(convertedError, req, res);
};

const notFound = (req, res, next) => {
  const err = new APIError({
    code: 100,
    message: "Url Not Found",
    status: httpStatus.BAD_REQUEST,
    isPublic: true,
  });
  console.log(err);
  return handler(err, req, res);
};

module.exports = {
  convertError,
  notFound,
};
