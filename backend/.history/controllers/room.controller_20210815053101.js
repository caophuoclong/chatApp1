const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();
const serectKey = process.env.SERECT_KEY;
const User = require("../models/user.model");
const Room = require("../models/room.model");
module.exports = {
  create: (req, res, next) => {
    const token = req.headers["authorization"];
    const { roomName } = req.body;
    jwt.verify(token, serectKey, async (error, data) => {
      if (error) {
        return res.status(403).send("Loi xac thuc");
      } else {
        const id = data.id;
        const room = new Room({
          name: roomName,
          members: id,
        });
        room.owner = id;
        await room.save();
        await User.findByIdAndUpdate(
          {
            _id: id,
          },
          {
            $addToSet: {
              listRoom: room,
            },
          },
          { upsert: true, new: true }
        );

        res.sendStatus(200);
      }
    });
  },
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
    const { link } = req.body;
    const token = req.headers["authorization"];
    jwt.verify(token, serectKey, async (error, data) => {
      if (error) {
        console.log(error);
        return res.status(403).send("Loi xac thuc");
      } else {
        const id = data.id;
        try {
          const user = await User.findById(id).populate("messages");
          console.log(user.messages);
          return res.sendStatus(200);
        } catch (error) {
          res.status(422).send("Loi khong xac dinh", error);
        }
      }
    });
  },
};
