const express = require("express");
const adminController = require("../controller/adminController");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("products");
});

router.post("/add", adminController.addProduct);

router.post("/edit", adminController.editProduct);

router.get("/:productId", (req, res, next) => {
  res.render("productDetail", { productId: req.params.productId });
});

module.exports = router;
