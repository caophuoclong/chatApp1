const mongoose = require("mongoose");
const { Schema } = mongoose;

const profileSchema = new Schema({
  fullname: {
    type: "string",
    require: true,
  },
  dateOfBirth: {
    type: "string",
    require: true,
  },
  time: {
    type: Date,
    required: true,
  },
  userOwner: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
});

const Profile = mongoose.model("profile", profileSchema);
module.exports = Profile;
