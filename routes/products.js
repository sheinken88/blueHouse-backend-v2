const express = require("express");
const router = express.Router();
const products = require("../controllers/productsControllers");

router.get("/allproducts", products.getAllProducts);
router.get("/bycategory/:id", products.getProductsByCategory);
router.get("/bytag/:id", products.getProductsByTag);
router.get("/id/:id", products.getOneProduct);
router.get("/ids", products.getMultipleProductsByIds); // Notice that :ids has been removed

router.get("/tags", products.getTagProduct);
router.get("/reviews", products.getAllReviews);
router.get("/type/:type", products.getTypeOfProduct);

module.exports = router;
