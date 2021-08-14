const Joi = require("joi");

const contactSchema = Joi.object({
  name: Joi.string().required(),
  phone: Joi.string().required(),
  email: Joi.string().required(),
});

const validateContact = (req, res, next) => {
  const { error } = contactSchema.validate(req.body);
  if (error) {
    res.status(400).json({
      status: "error",
      code: 400,
      message: "missing required name field",
    });
  }
  next();
};

module.exports = validateContact;
