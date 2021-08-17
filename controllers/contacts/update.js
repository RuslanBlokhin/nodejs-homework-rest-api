const { NotFound } = require("http-errors");
const { contacts: service } = require("../../services");

const update = async (req, res, next) => {
  const { contactId } = req.params;
  const { body } = req.body;
  const result = await service.updateById(contactId, body);

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

module.exports = update;
