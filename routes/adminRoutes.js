const express = require("express");
const router = express.Router();

const adminController = require("../controller/adminController")

router.get("/", adminController.showMainAdminPage);

module.exports = router;
