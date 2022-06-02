const router = require("express").Router();

router.get("/teacher-dashboard", (req, res) => {
  // if(!req.session.loggedIn) {
  //   res.redirect('/');
  // }
  res.render("teacher-dashboard");
});


router.get("/student", (req, res) => {
  res.render("");
});

module.exports = router;
