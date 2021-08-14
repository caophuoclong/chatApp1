const express = require("express");
const Router = express.Router();
const loginController = require("controllers/auth.controller.js");

router.get("/login", loginController.login);

module.exports = Router;
