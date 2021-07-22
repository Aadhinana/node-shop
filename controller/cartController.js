const Cart = require("../model/cart");
const User = require("../model/user");

exports.showCartPage = (req, res, next) => {
  return res.render("cart");
};

exports.addToCart = async (req, res, next) => {
  // console.log(req.body);
  const pId = req.body.productId;

  const cart = await Cart.findOne({ userId: req.user });
  const products = cart.products;
  const index = products.findIndex((p) => p.productId.toString() == pId);
  // console.log(index);
  if (index === -1) {
    // Added new item in cart
    // console.log(products)
    await products.push({ productId: pId, quantity: 1 });
  } else {
    const product = products[index];
    products[index].quantity = products[index].quantity + 1;
    // console.log(product);
  }
  // await products.push({ _id: pId, quantity: 1 });
  await cart.save();
  return res.redirect("/");
};
