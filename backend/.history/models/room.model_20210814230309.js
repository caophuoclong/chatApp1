const mongoose = require("mongoose");
const { Schema } = mongoose;

const roomSchema = new Schema({});

const Room = mongoose.model("room", roomSchema);
module.exports = Room;
