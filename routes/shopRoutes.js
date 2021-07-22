const express = require("express");
const router = express.Router();

const shopController = require("../controller/shopController");
const cartController = require("../controller/cartController");

router.get("/", shopController.showMainPage);

router.get("/cart", cartController.showCartPage);

router.post("/cart", cartController.addToCart);

router.get("/orders", shopController.showOrdersPage);

router.post("/order", shopController.placeOrder);

router.get("/login", shopController.login);

router.post("/login", shopController.loginFlow);

router.post("/logout", shopController.logout);

module.exports = router;
