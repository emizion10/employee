const Joi = require("joi");
module.exports.createEmployee = Joi.object({
  name: Joi.string().max(128).required(),
  address: Joi.string().required(),
  gender: Joi.string().required().valid("male", "female"),
  department: Joi.string()
    .required()
    .valid("HR", "Engineering", "Administration"),
  phone: Joi.string().required(),
});
