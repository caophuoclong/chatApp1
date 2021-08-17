const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();
const serectKey = process.env.SERECT_KEY;
const User = require("../models/user.model");
const message = require("../models/messaging.model");
module.exports = {
  add: (req, res, next) => {
    const token = req.headers["authorization"];
    const { content, user, time } = req.body;
    jwt.verify(token, serectKey, async (error, data) => {
      if (error) {
        return res.status(403).send("Loi xac thuc");
      } else {
        const id = data.id;
        const newMessage = new message({ content, user, time });
        newMessage.userOwner = id;
        await newMessage.save();
        await User.findByIdAndUpdate(
          {
            _id: id,
          },
          {
            $addToSet: {
              messages: newMessage,
            },
          },
          { upsert: true, new: true }
        );
        res.sendStatus(200);
      }
    });
  },
  get: async (req, res, next) => {
    const token = req.headers["authorization"];
    jwt.verify(token, serectKey, async (error, data) => {
      if (error) {
        console.log(error);
        return res.status(403).send("Loi xac thuc");
      } else {
        const id = data.id;
        try {
          const user = await User.findById(id).populate("messages");
          return res.status(200).send({ message: user.messages });
        } catch (error) {
          res.status(422).send("Loi khong xac dinh", error);
        }
      }
    });
  },
};
