const express = require("express");
const router = express.Router();
const loginController = require("../controllers/auth.controller.js");

router.post("/login", loginController.login);
router.post("/register", loginController.register);
router.post("/refreshtoken", loginController.refreshtoken);

module.exports = router;
