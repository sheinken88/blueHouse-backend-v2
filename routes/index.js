const express = require("express");
const router = express.Router();
const products = require("./products");
const categories = require("./categories");

//ROUTES
router.use("/products", products);
router.use("/categories", categories);

//MIDDLEWARES

module.exports = router;
