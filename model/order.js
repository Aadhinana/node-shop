const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = require("./user");
const Product = require("./product");

const orderSchema = Schema({
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

module.exports = mongoose.model("Order", orderSchema);
