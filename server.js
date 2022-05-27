const express = require("express");
const path = require("path");
const { engine } = require("express-handlebars");
const PORT = process.env.PORT || 3001;
const sequelize = require("./config/connection");
const { Teacher, Student, Subject } = require("./models");
const controllers = require("./controllers");
const app = express();

// node standard
// npm
// local modules
// middleware before controlllers 
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
app.use(express.urlencoded({ extended: true }));

app.use(controllers);

sequelize.sync({ force: false }).then(() => {
  console.log("Database connected");
  app.listen(PORT, () => console.log("Now listening"));
});
