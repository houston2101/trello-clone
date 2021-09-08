const { Schema, model, Types } = require("mongoose");
const cardSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: false,
    },
    text: {
      type: String,
      required: true,
      unique: false,
    },
    important: {
      type: Boolean,
      required: true,
      unique: false,
      default: false,
    },
    type: {
      type: String,
      required: true,
      unique: false,
    },
    boardId: {
      type: String,
      required: true,
      unique: false,
    },
    done: {
      type: Boolean,
      required: true,
      unique: false,
      default: false,
    },
  },
  { versionKey: false },
);

module.exports = model("card", cardSchema);
