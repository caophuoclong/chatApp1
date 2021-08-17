const express = require("express");
const router = express.Router();
const friendController = require("../controllers/friend.controller");

router.post("/addfriend", roomController.addFriend);
router.get("/getlistfriend", roomController.getListFriend);

module.exports = router;
