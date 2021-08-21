const Joi = require("joi");
const { Schema } = require("mongoose");

const userSchema = Schema({
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: 6,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  subscription: {
    type: String,
    enum: ["starter", "pro", "business"],
    default: "starter",
  },
  token: {
    type: String,
    default: null,
  },
});

const joiSchemaUser = Joi.object({
  password: Joi.string()
    .min(6)
    .required()
    .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
  email: Joi.string()
    .required()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net", "ru", "ukr"] },
    }),
  subscription: Joi.string(),
  token: Joi.string(),
});

module.exports = { userSchema, joiSchemaUser };
