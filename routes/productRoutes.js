const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("products");
});

router.get("/:productId", (req, res, next) => {
  res.render("productDetail", { productId: req.params.productId });
});

module.exports = router;
