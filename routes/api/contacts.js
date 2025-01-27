const express = require("express");
const router = express.Router();

const { validation, authenicate } = require("../../middleware");
const {
  joiSchema,
  schemaUpdateStatusContact,
} = require("../../model/schemas/contact");

const { ctrlWrapper } = require("../../helpers");
const { contacts: ctrl } = require("../../controllers");

router.get("/", authenicate, ctrl.getAll);

router.get("/:contactId", ctrlWrapper(ctrl.getById));

router.post("/", authenicate, validation(joiSchema), ctrl.addContact);

router.patch(
  "/:contactId/favorite",
  validation(schemaUpdateStatusContact),
  ctrlWrapper(ctrl.updateStatusContact)
);

router.put("/:contactId", validation(joiSchema), ctrlWrapper(ctrl.update));

router.delete("/:contactId", ctrlWrapper(ctrl.removeContact));

module.exports = router;
