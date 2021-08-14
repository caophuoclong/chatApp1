const mongoose = require("mongoose");
const { Schema } = mongoose;

const roomSchema = new Schema({
  name: { type: "string", required: true },
  id: { type: number, required: true },
});

const Room = mongoose.model("room", roomSchema);
module.exports = Room;
