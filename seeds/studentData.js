const { Student, Teacher } = require("../models");

const seedStudents = async () => { 
  await Student.create({
    name: "Dave Sanders",
    email: "dave@gmail.com",
    password: "123456",
    teacher_id: "1",
  })
  await Student.create({
    name: "Taylor Roberts",
    email: "taylor@gmail.com",
    password: "123456",
    teacher_id: "2",
  })
  await Student.create({
    name: "Britt Bolt",
    email: "britt@gmail.com",
    password: "123456",
    teacher_id: "1",
  })
  await Student.create({
    name: "Other Guy",
    email: "otherguy@gmail.com",
    password: "123456",
    teacher_id: "2",
  })
};

module.exports = seedStudents;
