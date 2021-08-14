const contacts = require("../../model/contacts");

const removeContact = (req, res) => {
  const { contactId } = req.params;

  const idx = contacts.findIndex(({ id }) => contactId === id);
  if (idx === -1) {
    return res.status(404).json({
      status: "error",
      code: 404,
      message: "Not found",
    });
  }
  const deleteContact = contacts[idx];
  contacts.splice(idx, 1);
  res.json({
    status: "success",
    code: 200,
    message: "contact deleted",
    data: {
      result: deleteContact,
    },
  });
};

module.exports = removeContact;
