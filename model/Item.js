const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Category like dals,food grains etc
// Subcategory ie wheat,rice etc
// Quantity
// Quality description
// Price
// Other details (optional)

const ItemSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  seller: {
    type: String,
  },
  category: {
    type: String,
    required: true,
  },
  subcategory: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  quality: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  detail: {
    type: String,
  },
  avatar: {
    type: String,
  },
  views: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "user",
      },
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("item", ItemSchema);
