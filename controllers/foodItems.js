var FoodItems = require("../models/FoodItems");

module.exports = {
  getMenu: async (req, res) => {
    try {
      var foodItems = FoodItems.find().lean();
      res.render("dashboard.ejs", { foodItems: foodItems });
    } catch (err) {
      console.log(err);
    }
  },

  createFoodItem: async (req, res) => {
    try {
      await FoodItems.create({
        name: req.body.name,
        desc: req.body.desc,
        ingredients: req.body.ingredients,
        course: req.body.ingredients,
      });
      console.log("Post has been added!");
      res.redirect("/profile");
    } catch (err) {
      console.log(err);
    }
  },
};
