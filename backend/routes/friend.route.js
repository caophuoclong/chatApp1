const express = require("express");
const router = express.Router();
const friendController = require("../controllers/friend.controller");

router.post("/addfriend", friendController.addFriend);
router.get("/getlistfriend", friendController.getListFriend);

module.exports = router;
