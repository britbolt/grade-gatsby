const { Teacher } = require("../models");

const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("home");
});

// redirect to homepage if loggedIn????where does this go?
router.get("/login-teacher", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/teacher');
    return;
  }

  res.render('login-teacher');
});
router.get("/login-student", (req, res) => {
  res.render("");
});

// teacher login?????
router.post("/login-teacher", (req, res) => {
  Teacher.findOne ({
    where: {
      email: req.body.email
    }
  })
  .then(teacherLoginData => {
    if(!teacherLoginData) {
      res.status(400).json({ message: 'Invalid email' });
      return;
    }

    const validPassword = teacherLoginData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: 'Invalid password' });
    }

    req.session.save(() => {
      req.session.teacher_id = teacherLoginData.id;
      req.session.username = teacherLoginData.username;
      req.session.loggedIn = true;

      res.json({ user: teacherLoginData, message: 'Logged in' });
    });
  });
});

// student login?????
router.post("/login-teacher", (req, res) => {
  Student.findOne ({
    where: {
      email: req.body.email
    }
  })
  .then(studentLoginData => {
    if(!studentLoginData) {
      res.status(400).json({ message: 'Invalid email' });
      return;
    }

    const validPassword = studentLoginData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: 'Invalid password' });
    }

    // username??? 
    req.session.save(() => {
      req.session.student_id = studentLoginData.id;
      req.session.username = studentLoginData.username;
      req.session.loggedIn = true;

      res.json({ user: studentLoginData, message: 'Logged in' });
    });
  });
});


module.exports = router;