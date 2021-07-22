const Product = require("../model/product");
const User = require("../model/user");

const productController = require("../controller/productController");

// Show all prodcut owned by the user
exports.showMainAdminPage = async (req, res, next) => {
  const p = await productController.getProductsOfCurrentUser(req.user);
  return res.render("products", { admin: true, products: p });
};

exports.addProductPage = async (req, res, next) => {
  return res.render("editaddproduct", { addProduct: true });
};

exports.editProductPage = async (req, res, next) => {
  const product = await productController.findProductById(req.query.productId);
  return res.render("editaddproduct", { addProduct: false, product: product });
};

exports.addProduct = async (req, res, next) => {
  console.log(req.body);
  const product = new Product({
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
    userId: req.user,
  });
  await product.save();
  return res.redirect("/");
};

exports.editProduct = async (req, res, next) => {
  return res.end("Edit workflow POST");
};
