// item name , entree app or w.e
//ingredient meta
// image?
//
const mongoose = require("mongoose");

const FoodItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  ingredients: {
    type: String,
    required: true,
  },
  course: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("FoodItems", FoodItemSchema);
