// models/User.model.js

const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  role: {type: String, required: true, default: "user", enum: ["user", "admin", "manager"]},
  name: { type: String, required: true },
});

const User = model("User", userSchema);

module.exports = User;
