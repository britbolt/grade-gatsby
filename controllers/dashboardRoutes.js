const router = require("express").Router();

router.get("/teacher", (req, res) => {
  if(!req.session.loggedIn) {
    res.redirect('/');
  }
  res.render("login-teacher");
});
router.get("/student", (req, res) => {
  res.render("");
});

module.exports = router;
