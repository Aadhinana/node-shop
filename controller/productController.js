const Product = require("../model/product");

module.exports.findAllProducts = async () => {
  const products = await Product.find();
  return products;
};

module.exports.getProductsOfCurrentUser = async (user) => {
  const products = await Product.find({ userId: user });
  return products;
};

module.exports.findProductById = async (id) => {
  const product = await Product.findById(id);
  return product;
};
