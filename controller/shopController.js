const mongoose = require("mongoose");
const Product = require("../model/product");
const User = require("../model/user");
const Order = require("../model/order");
const Cart = require("../model/cart");

const productController = require("./productController");

const user = new User({
  name: "John Doe",
  email: "johndoe@email.com",
});

exports.showMainPage = async (req, res, next) => {
  // Main landing page of the shop
  // Create a user, create a product and then assign it to this user,
  const p = await productController.findAllProducts();
  return res.render("products", { admin: false, products: p });
};

exports.showOrdersPage = (req, res, next) => {
  return res.render("orders");
};

exports.login = (req, res, next) => {
  return res.render("login");
};

exports.loginFlow = async (req, res, next) => {
  console.log(req.body);
  const user = new User({
    name: "Default name",
    email: req.body.email,
  });

  const u = await user.save();
  // Create an empty cart corresponding to the user
  const cart = new Cart({
    userId: u._id,
    products: [],
  });
  cart
    .save()
    .then((c) => console.log("cart saved!"))
    .catch((e) => console.log(e));
  return res.redirect("/");
};

exports.logout = (req, res, next) => {
  return res.end("Logged out!");
};

exports.placeOrder = async (req, res, next) => {
  const cart = await Cart.findOne({ userId: req.user });
  let productsList = cart.products;

  productsList = productsList.map((prod) => ({
    productId: prod.productId,
    quantity: prod.quantity,
  }));
  const order = new Order({
    userId: req.user,
    products: productsList,
  });
  await order.save();
  cart.products = [];
  await cart.save();
  return res.redirect("/");
};
