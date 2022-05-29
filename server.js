const express = require("express");
const path = require("path");
const { engine } = require("express-handlebars");
// require session and session seqeulize
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const PORT = process.env.PORT || 3001;
const sequelize = require("./config/connection");
const { Teacher, Student, Subject } = require("./models");
const controllers = require("./controllers");
const app = express();

// secret needs to be actual secret and stored in .env??
const sess = {
  secret: 'This is a secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
}

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
// use session
app.use(session(sess));

app.use(controllers);

sequelize.sync({ force: false }).then(() => {
  console.log("Database connected");
  app.listen(PORT, () => console.log("Now listening"));
});
