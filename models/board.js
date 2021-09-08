const { Schema, model, Types } = require("mongoose");
const boardSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
      unique: false,
    },
    title: {
      type: String,
      required: true,
      unique: false,
    },
    columns: {
      type: Array,
      required: true,
      unique: false,
      default: [[], [], []],
    },
    type: {
      type: String,
      required: true,
      unique: false,
    },
  },
  { versionKey: false },
);

module.exports = model("board", boardSchema);
