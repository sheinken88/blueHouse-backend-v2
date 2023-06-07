const express = require("express");
const router = express.Router();
const products = require("../controllers/productsControllers");

router.get("/allproducts", products.getAllProducts);
router.get("/bycategory/:id", products.getProductsByCategory);
router.get("/bytag/:id", products.getProductsByTag);
router.get("/id/:id", products.getOneProduct);
router.get("/tags", products.getTagProduct);
router.get("/reviews", products.getAllReviews);
router.get("/type/:type", products.getTypeOfProduct);

module.exports = router;
