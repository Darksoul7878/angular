const mongoose = require("mongoose");
// loading the model
// create schema ===> UserSchema / collection
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  name: {
    type: "string",
    required: true,
  },
  email: {
    type: "string",
    required: true,
  },
  password: {
    type: "string",
    required: true,
  },
  avatar: { type: "string" },
  date: { type: "date", default: Date.now },
});

module.exports = User1 = mongoose.model("users", UserSchema);
