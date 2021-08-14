const mongoose = require("mongoose");
const { Schema } = mongoose;

const profileSchema = new Schema({
  content: {
    type: "string",
    require: true,
  },
  user: {
    type: "string",
    require: true,
  },
  time: {
    type: Date,
    required: true,
  },
  userOwner: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
});

const Profile = mongoose.model("profile", profileSchema);
module.exports = Profile;
