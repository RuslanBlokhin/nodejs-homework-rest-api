/* eslint-disable semi */
/* eslint-disable quotes */
const contacts = require("../../model/contacts");

const getById = (req, res) => {
  const { contactId } = req.params;
  const result = contacts.find((item) => item.id === contactId);
  if (!result) {
    return res.status(404).json({
      status: "error",
      code: 404,
      message: "Not Found",
    });
  }
  res.json({
    status: "success",
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = getById;
