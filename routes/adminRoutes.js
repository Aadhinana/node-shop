const express = require("express");
const router = express.Router();

const adminController = require("../controller/adminController");

// '/admin/' should list all products owned by the user
router.get("/", adminController.showMainAdminPage);

// `/admin/add` add new product by user
router.get("/add", adminController.addProductPage);

// `/admin/edit` edit exisitng product by user
router.get("/edit", adminController.editProductPage);


module.exports = router;
