const express = require("express");
const router = express.Router();
const messagingController = require("../controllers/message.controller");

router.post("/add", messagingController.add);
router.get("/get", messagingController.get);

module.exports = router;
