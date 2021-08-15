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
  messages: {
    type: Schema.Types.ObjectId,
    ref: "messages",
  },

  profile: { type: Schema.Types.String, ref: "profile" },
  listMusic: [],
  listFriend: [
    {
      type: Schema.Types.ObjectId,
      ref: "friends",
    },
  ],
  listRoom: [
    {
      type: Schema.Types.ObjectId,
      ref: "rooms",
    },
  ],
});

const User = mongoose.model("users", userSchema);
module.exports = User;
