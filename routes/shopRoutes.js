const express = require("express");
const router = express.Router();

const shopController = require("../controller/shopController");

router.get("/", shopController.showMainPage);

router.get("/cart", shopController.showCartPage);

router.get("/orders", shopController.showOrdersPage);

router.get("/login", shopController.login);

router.post("/login", shopController.loginFlow);

router.post("/logout", shopController.logout);

module.exports = router;
