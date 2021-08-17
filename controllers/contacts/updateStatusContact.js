const { NotFound } = require("http-errors");
const { contacts: service } = require("../../services");

const updateStatusContact = async (req, res, next) => {
  const { contactId } = req.params;
  const { favorite = false } = req.body;
  const result = await service.updateById(contactId, { favorite });

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

module.exports = updateStatusContact;
