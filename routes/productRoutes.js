const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.end("Products all are listed here");
});


router.get("/:productId", (req, res, next) => {
  res.end(`${req.params.productId} page`);
});

module.exports = router;
