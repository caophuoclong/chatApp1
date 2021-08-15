const mongoose = require("mongoose");
const { Schema } = mongoose;

const roomSchema = new Schema({
  name: { type: "string", required: true },
  owner: { type: "string", required: true },
  members: [
    {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
  ],
  messages: [
    {
      type: Schema.Types.ObjectId,
      ref: "messages",
    },
  ],
});

const Room = mongoose.model("rooms", roomSchema);
module.exports = Room;
