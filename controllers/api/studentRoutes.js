const router = require("express").Router();
const { Teacher } = require("../../models");
const Student = require("../../models/Student");

router.post("/login", async (req, res) => {
  console.log(req.body);
  try {
    const loggedInStudent = await Student.findOne({
      email: req.body.email,
    });

    if (!loggedInStudent) {
      res.status(400).json({ message: "No user with that email address!" });
      return;
    }

    const validPassword = loggedInStudent.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: "Incorrect password!" });
      return;
    }
    req.session.save(() => {
      (req.session.user_id = loggedInStudent.id),
        (req.session.username = loggedInStudent.email),
        (req.session.loggedIn = true);
      res.send({
        student: loggedInStudent,
        message: "New account created, logged in!",
      });
    });
  } catch (err) {
    console.log(err.message);
    res.sendStatus(500);
  }
});

// Add a single student/sign up
router.post("/signup", async (req, res) => {
  try {
    const newStudent = await Student.create({
      name: req.body.signUpName,
      email: req.body.signUpEmail,
      password: req.body.signUpPassword,
      teacher_id: req.body.teacher,
    });
    req.session.save(() => {
      (req.session.user_id = newStudent.id),
        (req.session.username = newStudent.email),
        (req.session.loggedIn = true);
      res.send({
        student: newStudent,
        message: "New account created, logged in!",
      });
    });
  } catch (err) {
    console.log(err.message);
    res.sendStatus(500);
  }
});

module.exports = router;
