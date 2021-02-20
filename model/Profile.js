const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  mobile: {
    type: String,
    required: true,
    unique: true,
  },
  about: {
    type: String,
  },
  gmail: {
    type: String,
  },
  state: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
  selling: [
    {
      item: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "item",
      },
    },
  ],
  // items requested for purchasing
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("profile", ProfileSchema);
