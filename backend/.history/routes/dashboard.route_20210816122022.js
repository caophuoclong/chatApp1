const express = require("express");
const router = express.Router();
const dashboardController = require("../controllers/dashboard.controller");

router.post("/setmusic", dashboardController.setMusicList);
router.post("/remove", dashboardController.removeMusic);

router.get("/getmusic", dashboardController.getMusicList);
router.get("/getuser", dashboardController.getUser);
router.get("/finduser", dashboardController.findUser);
module.exports = router;
