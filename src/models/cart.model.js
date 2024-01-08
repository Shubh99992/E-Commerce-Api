const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: false,
  },
  cartItems: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "cartItems",
    required: false,
  },
  totalPrice: {
    type: Number,
    required: false,
    default: 0,
  },
  totalItem: {
    type: Number,
    required: false,
    default: 0,
  },
  totalDiscountedPrice: {
    type: Number,
    required: false,
    default: 0,
  },
  discount: {
    type: Number,
    required: false,
    default: 0,
  },
});

const Cart = mongoose.model("cart", cartSchema);

module.exports = Cart;
