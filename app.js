const createError = require("http-errors");
const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const connectDB = require("./config/database");
const flash = require("express-flash");
const path = require("path");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const foodItemsRouter = require("./routes/foodItems");
//const ordersRouter = require("./routes/orders");

require("dotenv").config({ path: "./config/.env" });

connectDB();
const app = express();

require("./config/passport")(passport);

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "/public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
//app.use("/orders", ordersRouter);
app.use("/dashboard", foodItemsRouter);

//Sessions
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,

    store: new MongoStore({
      mongooseConnection: mongoose.connection,
    }),
  })
);

//Passport middleware
app.use(passport.initialize());
app.use(passport.session());

//Use flash messages for errors, info, ect...
app.use(flash());

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
