const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = require("./user");
const Product = require("./product");

const cartSchema = Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    ref: User,
  },
  products: [
    {
      productId: {
        type: mongoose.Types.ObjectId,
        ref: Product,
      },
      quantity: Number,
    },
  ],
});

// Add items to cart
cartSchema.methods.addToCart = function (product) {};

// Remove items from cart
cartSchema.methods.removeFromCart = function (product) {};

module.exports = mongoose.model("Cart", cartSchema);
