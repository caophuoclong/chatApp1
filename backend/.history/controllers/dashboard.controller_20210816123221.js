const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();
const serectKey = process.env.SERECT_KEY;
const user = require("../models/user.model");

module.exports = {
  getMusicList: (req, res, next) => {
    const token = req.headers["authorization"];
    jwt.verify(token, serectKey, async (error, data) => {
      if (error) {
        return res.status(403).send("Loi xac thuc");
      } else {
        const id = data.id;
        const finded = await user.findById(id);
        const { listMusic } = finded;
        return res.status(200).send({ listMusic });
      }
    });
  },
  getUser: (req, res, next) => {
    const token = req.headers["authorization"];
    jwt.verify(token, serectKey, async (error, data) => {
      if (error) {
        return res.status(403).send("Loi xac thuc");
      } else {
        const id = data.id;
        const list = await user
          .findById(id)
          .populate("listRoom")
          .populate("listFriend")
          .populate({
            path: "listFriend",
            populate: { path: "messages" },
          });
        const result = {
          listFriend: list.listFriend,
          listRoom: list.listRoom,
          listMusic: list.listMusic,
        };
        return res.status(200).send({ result });
      }
    });
  },
  findUser: (req, res, next) => {
    const { username } = req.query;
    const token = req.headers["authorization"];
    jwt.verify(token, serectKey, async (error, data) => {
      if (error) {
        console.log(error);
        return res.status(403).send("Loi xac thuc");
      } else {
        const listUser = user
          .find({ username: { $regex: ".*" + username + ".*" } })
          .limit(10);
        listUser.getFilter();
        const listUserResult = await listUser.exec();
        return res.status(200).send({ listUserResult });
      }
    });
  },
  setMusicList: async (req, res, next) => {
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
  removeMusic: async (req, res, next) => {
    const { url } = req.body;
    const token = req.headers["authorization"];
    jwt.verify(token, serectKey, async (error, data) => {
      if (error) {
        console.log(error);
        return res.status(403).send("Loi xac thuc");
      } else {
        const id = data.id;
        const User = await user.findById(id);
        const { listMusic } = User;
        const index = listMusic.findIndex((x) => x === url);
        listMusic.splice(index, 1);
        await user.findByIdAndUpdate(
          {
            _id: id,
          },
          {
            $set: {
              listMusic: listMusic,
            },
          },
          { upsert: true, new: true }
        );
        return res.status(200).send("Them music thanh cong");
      }
    });
  },
};
