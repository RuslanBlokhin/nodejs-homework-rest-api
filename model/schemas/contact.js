const Joi = require("joi");
const { Schema } = require("mongoose");

const contactSchema = Schema({
  name: {
    type: String,
    required: [true, "Set name for contact"],
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  favorite: {
    type: Boolean,
    default: false,
  },
});

const joiSchema = Joi.object(
  {
    name: Joi.string().alphanum().min(2).max(30).required(),
    phone: Joi.string().required(),
    email: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net", "ru", "ukr"] },
    }),
  },
  { versionKey: false, timestamps: true }
);

module.exports = { contactSchema, joiSchema };
