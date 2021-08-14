const mongoose = require("mongoose");
const { Schema } = mongoose;

const messageSchema = new Schema({
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

const Message = mongoose.model("message", messageSchema);
module.exports = Message;
