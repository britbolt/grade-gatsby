const { Teacher } = require("../models");

const seedTeachers = async () => {
  await Teacher.create({
    name: "John Coltrane",
    email: "coltrane@gmail.com",
    password: "123456",
  });

  await Teacher.create({
    name: "Dolly Parton",
    email: "dolly@gmail.com",
    password: "123456",
  })
  await Teacher.create({
    name: "Jane Smith",
    email: "jane@gmail.com",
    password: "123456",
  })
  await Teacher.create({
    name: "John Smith",
    email: "john@gmail.com",
    password: "123456",
  })
}

module.exports = seedTeachers;
