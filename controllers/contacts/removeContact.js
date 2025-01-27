const { NotFound } = require("http-errors");
const { contacts: service } = require("../../services");

const removeContact = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await service.removeContact(contactId);
  if (!result) {
    throw new NotFound(`Contact with id=${contactId} not found`);
  }
  res.json({
    status: "success",
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = removeContact;
