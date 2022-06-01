const router = require("express").Router();
const Teacher = require("../../models/Teacher");

// Add a single teacher
router.post("/signup", async (req, res) => {
    try {
      const newTeacher = await Teacher.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });

      // not sure if teacher id and username is approprite for this
      // just followed module so ¯\_(ツ)_/¯
      req.session.save(() => {
        req.session.teacher_id = newTeacher.id;
        req.session.username = newTeacher.username;
        req.session.loggedIn = true;
  
        res.redirect('/teacher-dashboard');
        })

// where does this res.json go??
// jk only works with res.json commented out, with res.redirect instead
      // res.json(newTeacher);
    } catch (err) {
      console.log(err.message);
      res.sendStatus(500)
    }
  });

  // teacher login
router.post("/login", (req, res) => {
  console.log(req.body.email);
  Teacher.findOne ({
    where: {
      email: req.body.email
    }
  })
  .then(teacherLoginData => {
    console.log(teacherLoginData);
    if(!teacherLoginData) {
      res.status(400).json({ message: 'Invalid email' });
      return;
    }

    const validPassword = teacherLoginData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: 'Invalid password' });
      return;
    }

    req.session.save(() => {
      req.session.teacher_id = teacherLoginData.id;
      req.session.username = teacherLoginData.username;
      req.session.loggedIn = true;

      res.redirect('/teacher-dashboard');

      // res.json({ user: teacherLoginData, message: 'Logged in' });
    });
  })
  .catch(err => {
    console.log(err);
    res.sendStatus(500);
  })
});


module.exports = router;
