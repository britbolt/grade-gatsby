const router = require("express").Router();

router.get("/teacher", (req, res) => {
  res.render("teacher-edit-grade");
});
router.get("/student", (req, res) => {
  res.render("");
});

module.exports = router;
