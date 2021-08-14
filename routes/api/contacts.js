const express = require("express");
const router = express.Router();
const { validateContact } = require("../../middleware");

const { contacts: ctrl } = require("../../controllers");

router.get("/", ctrl.getAll);

router.get("/:contactId", ctrl.getById);

router.post("/", validateContact, ctrl.addContact);

router.delete("/:contactId", ctrl.removeContact);

router.put("/:contactId", validateContact, ctrl.update);

module.exports = router;
