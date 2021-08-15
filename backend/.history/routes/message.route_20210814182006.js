const express = require("express");
const router = express.Router();
const messagingController = require("../controllers/messaging.controller");

router.post("/add", messagingController.setMusicList);
router.get("/get", messagingController.getMusicList);

module.exports = router;
