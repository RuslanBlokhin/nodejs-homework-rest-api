const { contacts: service } = require("../../services");

const addContact = async (req, res, next) => {
  try {
    const newContact = { ...req.body, owner: req.user._id };
    const result = await service.addContact(newContact);
    res.status(201).json({
      status: "sucess",
      code: 201,
      data: {
        result,
      },
    });
  } catch (error) {
    next(error);
  }
};

// const addContact = (req, res) => {
//   const newContact = { id: v4(), ...req.body };
//   contacts.push(newContact);

//   res.status(201).json({
//     status: "success",
//     code: 201,
//     data: {
//       result: newContact,
//     },
//   });
// };

module.exports = addContact;
