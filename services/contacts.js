const { Contact } = require("../model");

const getAll = (pagination, filter) => {
  const { page, limit } = pagination;
  const skip = page * limit - limit;
  return Contact.find(filter, "_id name", { skip, limit: +limit });
};

const getById = (contactID) => {
  return Contact.findById(contactID);
};

const addContact = (newContact) => {
  return Contact.create(newContact);
};

const updateById = (contactID, data) => {
  return Contact.findByIdAndUpdate(contactID, data, { new: true });
};

const removeContact = (contactID) => {
  return Contact.findByIdAndDelete(contactID);
};

module.exports = {
  addContact,
  getAll,
  getById,
  updateById,
  removeContact,
};
