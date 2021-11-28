const express = require("express");
const app = express();
const appRoutes = require("./routes/routes");
const authRoutes = require("./routes/auth");
const session = require('express-session');

app.set("view engine", "ejs");

//sessions
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

//static files
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/public/img"));

//bodyparser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//router
app.use("/home", appRoutes);
app.use("/auth", authRoutes);

app.get("/home", (req, res) => {
  res.render("home.ejs");
});

app.listen(3000, () => console.log("listening to port 3000"));