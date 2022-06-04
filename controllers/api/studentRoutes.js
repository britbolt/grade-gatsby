const router = require("express").Router();
const { Teacher, Grade, Student } = require("../../models");

router.post("/login", async (req, res) => {
  console.log(req.body);
  try {
    const loggedInStudent = await Student.findOne({
      where: {
        email: req.body.email,
      },
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
// Add a single student/sign up
router.post("/signup", async (req, res) => {
  console.log(req.body);
  try {
    const newStudent = await Student.create({
      name: req.body.signUpName,
      email: req.body.signUpEmail,
      password: req.body.signUpPassword,
      teacher_id: req.body.teacher,
    });
    console.log(newStudent);
    // creating empty grades for new student
    for (let i = 1; i <= 5; i++) {
      await Grade.create({
        grade: 0,
        student_id: newStudent.id,
        subject_id: i,
      });
    }
    req.session.save(() => {
      (req.session.user_id = newStudent.id),
        (req.session.username = newStudent.email),
        (req.session.loggedIn = true);
      res.send({
        message: "New account created, logged in!",
      });
    });
  } catch (err) {
    console.log(err.message);
    res.sendStatus(500);
  }
});

router.get("/:id", (req, res) => {
  Student.findOne({
    where: {
      id: req.params.id,
    },
    include: {
      model: Grade,
    },
  })
    .then((dbStudentData) => res.json(dbStudentData))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "you still did something wrong" });
    });
});

module.exports = router;
