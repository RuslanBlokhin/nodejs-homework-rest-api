/* eslint-disable semi */
/* eslint-disable quotes */
const contacts = require("../../model/contacts");

const getAll = (req, res) => {
  res.json({
    status: "success",
    code: 200,
    data: {
      result: contacts,
    },
  });
};

module.exports = getAll;