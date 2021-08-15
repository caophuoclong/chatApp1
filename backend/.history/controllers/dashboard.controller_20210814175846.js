const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();
const serectKey = process.env.SERECT_KEY;

module.exports = {
  getMusicList: (req, res, next) => {},
  setMusicList: (req, res, next) => {
    const token = req.headers["authorization"];
    jwt.verify(token, serectKey, (data, error) => {
      if (error) {
        return res.status(403).send("Loi xac thuc");
      } else {
        console.log(data);

        return res.status(200).send("Thanh cong");
      }
    });
  },
};
