const mongoose = require("mongoose");

const cartItemSchema = new mongoose.Schema({

  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product"
  },

  quantity: {
    type: Number,
    default: 1
  },

  size: String,

  color: String

});

const cartSchema = new mongoose.Schema({

  user: {
    type: String,
    required: true
  },

  items: [cartItemSchema]

});

module.exports =
mongoose.model("Cart", cartSchema);