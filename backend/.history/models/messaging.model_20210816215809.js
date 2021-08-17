const mongoose = require("mongoose");
const { Schema } = mongoose;

const messageSchema = new Schema({
  content: {
    type: "string",
    require: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  time: {
    type: "string",
    required: true,
  },
  userOwner: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
});

const Message = mongoose.model("messages", messageSchema);
module.exports = Message;
