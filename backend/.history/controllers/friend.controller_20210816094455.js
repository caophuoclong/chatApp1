const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();
const serectKey = process.env.SERECT_KEY;
const User = require("../models/user.model");
const Room = require("../models/room.model");
module.exports = {
  addFriend: (req, res, next) => {
    const token = req.headers["authorization"];
    const { userId } = req.body;
    jwt.verify(token, serectKey, async (error, data) => {
      if (error) {
        return res.status(403).send("Loi xac thuc");
      } else {
        const id = data.id;

        await User.findByIdAndUpdate(
          {
            _id: id,
          },
          {
            $addToSet: {
              listFriend: userId,
            },
          },
          { usert: true, new: true }
        );
        res.sendStatus(200);
      }
    });
  },
  getListFriend: async (req, res, next) => {
    const token = req.headers["authorization"];
    jwt.verify(token, serectKey, async (error, data) => {
      if (error) {
        console.log(error);
        return res.status(403).send("Loi xac thuc");
      } else {
        const id = data.id;
        try {
          const user = await User.findById(id).populate("listFriend");
          return res.status(200).send(user.listFriend);
        } catch (error) {
          res.status(422).send("Loi khong xac dinh", error);
        }
      }
    });
  },
};
