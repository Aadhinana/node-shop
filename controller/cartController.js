const Cart = require("../model/cart");
const productController = require("./productController");
const User = require("../model/user");

exports.showCartPage = async (req, res, next) => {
  const cart = await Cart.findOne({ userId: req.user });
  let products = cart.products;
  return res.render("cart", { products: products });
};

exports.addToCart = async (req, res, next) => {
  // console.log(req.body);
  const pId = req.body.productId;
  const add = req.body.add;

  const cart = await Cart.findOne({ userId: req.user });
  const products = cart.products;
  // console.log(products, pId);
  const index = products.findIndex((p) => p.productId.toString() == pId);

  if (add === "false") {
    // remove from cart
    // if index not found here. Should throw error
    if (products[index].quantity == 1) {
      // just one. remove the entire thing
      products.splice(index, 1);
    } else {
      products[index].quantity = products[index].quantity - 1;
    }
    await cart.save();
    return res.redirect("/");
  }
  // console.log(index);
  if (index === -1) {
    // Added new item in cart
    // console.log(products)
    await products.push({ productId: pId, quantity: 1 });
  } else {
    products[index].quantity = products[index].quantity + 1;
    // console.log(product);
  }
  // await products.push({ _id: pId, quantity: 1 });
  await cart.save();
  return res.redirect("/");
};
