var express = require("express");
var router = express.Router();
const foodItemsController = require("../controllers/foodItems");

router.get("/foodItems", foodItemsController.getMenu);
router.post("/createFoodItem", foodItemsController.createFoodItem);

module.exports = router;
