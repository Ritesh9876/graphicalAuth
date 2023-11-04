/** @format */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const { ObjectId } = require("mongodb");

const UserSchema = new Schema(
  {
    firstName: {
      type: String,
      required: false,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
    age: {
      type: Number,
      required: true,
      trim: true,
    },
    password: []
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("users", UserSchema);
