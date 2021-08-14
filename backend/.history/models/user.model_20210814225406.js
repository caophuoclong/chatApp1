const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  username: {
    type: "string",
    require: true,
    unique: true,
  },
  password: {
    type: "string",
    require: true,
  },
  email: {
    type: "string",
    require: true,
  },
  salt: {
    type: "string",
    require: true,
  },
  message: [
    {
      type: Schema.Types.ObjectId,
      ref: "message",
    },
  ],
  listMusic: [],
  listFriend: [
    {
      type: Schema.Types.ObjectId,
      ref: "friend",
    },
  ],
  listRoom: [
    {
      type: Schema.Types.ObjectId,
      ref: "room",
    },
  ],
});

const User = mongoose.model("user", userSchema);
module.exports = User;
