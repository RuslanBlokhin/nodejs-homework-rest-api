const express = require("express");
const router = express.Router();

const { validation } = require("../../middleware");
const {
  joiSchema,
  schemaUpdateStatusContact,
} = require("../../model/schemas/contact");

const { ctrlWrapper } = require("../../helpers");
const { contacts: ctrl } = require("../../controllers");

router.get("/", ctrl.getAll);

router.get("/:contactId", ctrlWrapper(ctrl.getById));

router.post("/", validation(joiSchema), ctrl.addContact);

router.patch(
  "/:contactId/favorite",
  validation(schemaUpdateStatusContact),
  ctrlWrapper(ctrl.updateStatusContact)
);

router.put("/:contactId", validation(joiSchema), ctrlWrapper(ctrl.update));

router.delete("/:contactId", ctrlWrapper(ctrl.removeContact));

module.exports = router;
