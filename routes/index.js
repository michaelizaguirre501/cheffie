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
module.exports = router;

router.get("/dashboard", function (req, res, next) {
  res.render("dashboard", { title: "Express" });
});

router.get("/signin", authController.getSignIn);
router.post("/signin", authController.postSignIn);
router.get("/signup", authController.getSignUp);
router.post("/signup", authController.postSignUp);
