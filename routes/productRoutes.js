const express = require("express");
const adminController = require("../controller/adminController");
const productController = require("../controller/productController");

const router = express.Router();

router.post("/add", adminController.addProduct);

router.post("/edit", adminController.editProduct);

router.get("/:productId", async (req, res, next) => {
  const product = await productController.findProductById(req.params.productId);
  res.render("productDetail", { product: product });
});

module.exports = router;
