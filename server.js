const express = require('express');
const sequelize = require('./config/connection');
const { Teacher, Student, Subject } = require('./models');



const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


sequelize.sync({ force: true }).then(() => {
    console.log("Database connected")
    app.listen(PORT, () => console.log('Now listening'));
});
  