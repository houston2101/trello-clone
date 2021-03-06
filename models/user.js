const { Schema, model, Types } = require("mongoose");
const userSchema = new Schema(
  {
    nickname: {
      type: String,
      required: true,
      unique: false,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: { type: String, required: true },
    boards: { type: Object, required: false },
  },
  { versionKey: false },
);

module.exports = model("user", userSchema);
