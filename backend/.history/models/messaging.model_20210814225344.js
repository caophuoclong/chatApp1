const mongoose = require("mongoose");
const { Schema } = mongoose;

const messageSchema = new Schema({});

const message = mongoose.model("message", messageSchema);
module.exports = message;
