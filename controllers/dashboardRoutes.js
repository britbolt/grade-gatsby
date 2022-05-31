const router = require("express").Router();

// router.get("/login-teacher", (req, res) => {
//   // if(!req.session.loggedIn) {
//   //   res.redirect('/');
//   // }
//   res.render("login-teacher");
// });

// router.get("/login-student", (req, res) => {
//   res.render("login-student");
// });

router.get("/teacher-dashboard", (req, res) => {
  res.render("teacher-dashboard");
});

module.exports = router;
