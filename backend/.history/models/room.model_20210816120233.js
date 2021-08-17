const mongoose = require("mongoose");
const { Schema } = mongoose;

const roomSchema = new Schema({
  name: { type: "string", required: true },
  owner: { type: Schema.Types.ObjectId, ref: "users" },
  avatart: { type: "string", default: "https://picsum.photos/48" },
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
