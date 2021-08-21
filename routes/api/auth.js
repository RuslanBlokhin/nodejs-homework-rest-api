const express = require("express");
const router = express.Router();

const { validation } = require("../../middleware");
const { joiSchemaUser } = require("../../model/schemas/user");
const { auth: ctrl } = require("../../controllers");

router.post("/signup", validation(joiSchemaUser), ctrl.signup);
// router.post("/register", ctrl.register);

// router.post("./signin", ctrl.signin);
// router.get("/login", ctrl.login);

// router.get("/logout", ctrl.logout);

module.exports = router;
