const { Student } = require("../models");

const seedStudents = async () => { 
  await Student.create({
    name: "Dave",
    email: "dave@gmail.com",
    password: "123456",
    teacher_id: "1",
  })
  await Student.create({
    name: "Taylor",
    email: "taylor@gmail.com",
    password: "123456",
    teacher_id: "2",
  })
  await Student.create({
    name: "Britt",
    email: "britt@gmail.com",
    password: "123456",
    teacher_id: "1",
  })
  await Student.create({
    name: "Jeff",
    email: "jeff@gmail.com",
    password: "123456",
    teacher_id: "2",
  })
};

module.exports = seedStudents;
