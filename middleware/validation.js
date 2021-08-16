const validation = (schema) => {
  const functionValidation = (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      res.status(400).json({
        status: "error",
        code: 400,
        message: "missing required field",
      });
    }
    next();
  };
  return functionValidation;
};

module.exports = validation;
