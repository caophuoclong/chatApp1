const casual = require("casual");
const user = require("../models/user.model");
const hashPassword = require("../hashPassword");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();
const serectKey = process.env.SERECT_KEY;
module.exports = {
  register: async (req, res) => {
    const { username, password, email } = req.body;
    const salt = casual.uuid;
    try {
      const newUser = new user({
        username,
        password: hashPassword.encrypt(password, salt),
        email,
      });
      newUser.salt = salt;
      await newUser.save((err) => {
        if (err) {
          return res.status(409).send("Loi");
        } else {
          return res.sendStatus(200);
        }
      });
    } catch (error) {
      console.log(error);
    }
  },
  login: async (req, res) => {
    try {
      const { username, password } = req.body;
      const getId = await user.findOne({ username });
      if (getId) {
        const token = jwt.sign(
          { id: getId._id, username, avatar: getId.avatar },
          serectKey,
          {
            expiresIn: "10m",
          }
        );
        const salt = getId.salt;
        const passwordDb = getId.password;
        const passwordHashed = hashPassword.encrypt(password, salt);
        if (passwordHashed === passwordDb) {
          res.status(200).send(token);
        } else {
          res.sendStatus(403).send("Sai tai khoan hoac mat khau nha");
        }
      } else {
        res.sendStatus(403);
      }
    } catch (error) {
      console.log(error);
    }
  },
  refreshToken: (req, res) => {
    const token = req.headers["authorization"];
    jwt.verify(token, serectKey, (error, data) => {
      if (error) throw error;
      const { id, username, avatar } = data;
      const tokenRefreshed = jwt.sign({ id, username, avatar }, serectKey, {
        expiresIn: "10m",
      });
      return res.status(200).send(tokenRefreshed);
    });
  },
};
