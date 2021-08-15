const express = require("express");
const router = express.Router();
const dashboardController = require("../controllers/dashboard.controller");

router.post("/setmusic", dashboardController.setMusicList);
router.get("/getmusic", dashboardController.getMusicList);

module.exports = router;
