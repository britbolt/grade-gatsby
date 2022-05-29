const express = require("express");
const path = require("path");
const { engine } = require("express-handlebars");
const PORT = process.env.PORT || 3001;
const sequelize = require("./config/connection");
const { Teacher, Student, Subject } = require("./models");

const app = express();
app.set("view engine", "handlebars");

app.engine(
  "handlebars",
  engine({
    layoutsDir: __dirname + "/views/layouts",
  })
);

app.use(express.static(path.join(__dirname)));
app.use(express.static("files"));
app.use(express.json());

// app.post("api/login", (req, res) => {
//   const name = req.body.name,
//     email = req.body.email,
//     password = req.body.password;
// });

app.get("/form", (req, res) => res.render("form"));
app.get("/", (req, res) => {
  res.render("layouts/index");
});

app.get("/home", (req, res) => {
  res.render("home");
});

app.get("/login-teacher", (req, res) => {
  res.render("login-teacher");
});
app.get("/login-student", (req, res) => {
  res.render("login-student");
});

app.get("/teacher-dashboard", (req, res) => {
  res.render("teacher-dashboard");
});

app.get("/student-dashboard", (req, res) => {
  res.render("student-dashboard");
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

sequelize.sync({ force: true }).then(() => {
  console.log("Database connected");
  app.listen(PORT, () => console.log("Now listening"));
});
