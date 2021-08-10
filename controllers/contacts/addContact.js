/* eslint-disable semi */
/* eslint-disable quotes */
const contacts = require("../../model/contacts");
const { v4 } = require("uuid");

const addContact = (req, res) => {
  const newContact = { id: v4(), ...req.body };
  contacts.push(newContact);

  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      result: newContact,
    },
  });
};

module.exports = addContact;
