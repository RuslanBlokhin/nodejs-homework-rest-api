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
  // owner: {
  //   type: SchemaTypes.ObjectId,
  //   ref: "user",
  // },
});

const schemaUpdateStatusContact = Joi.object({
  favorite: Joi.boolean().required(),
});

const joiSchema = Joi.object(
  {
    name: Joi.string().alphanum().min(2).max(30).required(),
    phone: Joi.string(),
    email: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net", "ru", "ukr"] },
    }),
    favorite: Joi.boolean(),
  },
  { versionKey: false, timestamps: true }
);

module.exports = { contactSchema, joiSchema, schemaUpdateStatusContact };
