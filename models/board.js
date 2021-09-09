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
      default: [
        { id: "to-do", cards: [], title: "To Do" },
        { id: "ready-to-check", cards: [], title: "Ready to check" },
        { id: "done", cards: [], title: "Done" },
      ],
    },
    type: {
      type: String,
      required: true,
      unique: false,
      default: "existed",
    },
  },
  { versionKey: false },
);

module.exports = model("board", boardSchema);
