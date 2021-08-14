const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  username: {
    type: "string",
    require: true,
  },
});

module.exports = mongoose.model("user", userSchema);
