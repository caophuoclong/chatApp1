const mongoose = require("mongoose");
const { Schema } = mongoose;

const messageSchema = new Schema({});

const Message = mongoose.model("message", messageSchema);
module.exports = Message;
