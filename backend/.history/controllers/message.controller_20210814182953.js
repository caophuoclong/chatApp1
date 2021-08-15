const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();
const serectKey = process.env.SERECT_KEY;
const user = require("../models/user.model");
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
        console.log(newMessage._id);
        await user.findByIdAndUpdate(
          { _id: id },
          {
            $push: {
              message: newMessage._id,
            },
          }
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
        await user.findByIdAndUpdate(
          {
            _id: id,
          },
          {
            $addToSet: {
              listMusic: link,
            },
          },
          { upsert: true, new: true }
        );
        return res.status(200).send("Them music thanh cong");
      }
    });
  },
};
