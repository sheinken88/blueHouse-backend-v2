const express = require("express");
const router = express.Router();
const categories = require("../controllers/categoriesControllers");

router.get("/all-categories", categories.getAllCategories);
router.get("/id/:id", categories.getOneCategories);

module.exports = router;
