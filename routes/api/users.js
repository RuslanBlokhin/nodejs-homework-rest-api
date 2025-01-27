const express = require("express");
const router = express.Router();

const { validation, authenicate } = require("../../middleware");
const { uploadMiddleware } = require("../../middleware");
const { joiSchemaUser } = require("../../model/schemas/user");
const { auth: ctrl } = require("../../controllers");

router.post("/signup", validation(joiSchemaUser), ctrl.signup);

router.post("/signin", ctrl.signin);

router.get("/logout", authenicate, ctrl.logout);

router.get("/current", authenicate, ctrl.getCurrentUser);

router.patch(
  "/avatars",
  authenicate,
  uploadMiddleware.single("avatar"),
  ctrl.uploadAvatar
);

module.exports = router;
