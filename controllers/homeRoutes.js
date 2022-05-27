const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("home");
});
router.get("/login-teacher", (req, res) => {
  res.render("");
});
router.get("/login-student", (req, res) => {
  res.render("");
});

module.exports = router;