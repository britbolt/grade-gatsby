const router = require("express").Router();

router.get("/teacher", (req, res) => {
  if(!req.session.loggedIn) {
    res.redirect('/');
  }
  res.render("teacher-dashboard");
});
router.get("/student", (req, res) => {
  res.render("student-dashboard");
});

module.exports = router;
