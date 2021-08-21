const { User } = require("../model");
const bcrypt = require("bcryptjs");

const getOne = (filter) => {
  return User.findOne(filter);
};

const add = (newUser) => {
  return User.create(newUser);
};

module.exports = {
  getOne,
  add,
};
