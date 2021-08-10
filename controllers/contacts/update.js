/* eslint-disable semi */
/* eslint-disable quotes */
const contacts = require("../../model/contacts");

const update = (req, res) => {
  const { contactId } = req.params;

  const idx = contacts.findIndex(({ id }) => contactId === id);
  if (idx === -1) {
    return res.status(404).json({
      status: "error",
      code: 404,
      message: "Not found",
    });
  }
  const updateProduct = { id: contactId, ...req.body };
  contacts[idx] = updateProduct;

  res.json({
    status: "success",
    code: 200,
    data: {
      result: updateProduct,
    },
  });
};

module.exports = update;
