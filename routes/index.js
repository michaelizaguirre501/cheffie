var express = require("express");
var router = express.Router();
const authController = require("../controllers/auth");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

// Get sign up page
router.get("/signup", function (req, res, next) {
  res.render("signup", { title: "Express" });
});

//Get Dashboard
router.get("/dashboard", function (req, res, next) {
  res.render("dashboard", { title: "Express" });
});

//Get Create food items form
router.get("/createFoodItems", function (req, res, next) {
  res.render("createFoodItems", { title: "Express" });
});
1;
//Signin / up routes
router.get("/signin", authController.getSignIn);
router.post("/signin", authController.postSignIn);
router.get("/signup", authController.getSignUp);
router.post("/signup", authController.postSignUp);

module.exports = router;
