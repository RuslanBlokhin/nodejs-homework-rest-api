const { NotFound } = require("http-errors");
const { contacts: service } = require("../../services");

const getById = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await service.getById(contactId);
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

module.exports = getById;
