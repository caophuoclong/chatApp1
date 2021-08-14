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
  email:{
      type: "string",
      require: true,
  }
  salt:{}
});

module.exports = mongoose.model("user", userSchema);
