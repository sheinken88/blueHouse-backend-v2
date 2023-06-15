const express = require("express");
const router = express.Router();
const categories = require("../controllers/categoriesControllers");

router.get("/all-categories", categories.getAllCategories);
router.get("/sub-categories", categories.getSubCategories);
router.get("/id/:id", categories.getOneCategories);

module.exports = router;
