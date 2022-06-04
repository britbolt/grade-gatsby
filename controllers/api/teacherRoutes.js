const router = require("express").Router();
const { Student, Grade } = require("../../models");
const Teacher = require("../../models/Teacher");

// Add a single teacher
router.post("/signup", async (req, res) => {

  try {
    const newTeacher = await Teacher.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    req.session.save(() => {
      req.session.teacher_id = newTeacher.id;
      req.session.username = newTeacher.username;
      req.session.loggedIn = true;

      res.send({ user: newTeacher, message: "Signed up" });
    });
  } catch (err) {
    console.log(err.message);
    res.sendStatus(500);
  }
});

// teacher login
router.post("/login", (req, res) => {
  console.log(req.body);
  Teacher.findOne({
    where: {
      email: req.body.email,
    },
  })
    .then((teacherLoginData) => {
      console.log(teacherLoginData);
      if (!teacherLoginData) {
        res.status(400).json({ message: "Invalid email" });
        return;
      }

      const validPassword = teacherLoginData.checkPassword(req.body.password);

      if (!validPassword) {
        res.status(400).json({ message: "Invalid password" });
        return;
      }

      req.session.save(() => {
        req.session.teacher_id = teacherLoginData.id;
        req.session.username = teacherLoginData.username;
        req.session.loggedIn = true;

        res.send({ user: teacherLoginData, message: "Logged in" });
      });
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

module.exports = router;
