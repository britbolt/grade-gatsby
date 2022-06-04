const { Teacher } = require("../models");

const router = require("express").Router();

router.get("/", (req, res) => {
    res.render("home", {
      loggedIn: req.session.loggedIn,
    });
});

// redirect to homepage if loggedIn????where does this go?
router.get("/login-teacher", (req, res) => {
  if (req.session.teacher_id) {
    res.redirect("/dashboard/teacher");
  }
  res.render("login-teacher");
});
router.get("/login-student", async (req, res) => {
  if (req.session.user_id) {
    res.redirect("/dashboard/student");
  }
  const allTeachers = await Teacher.findAll({
    attributes: ["id", "name"],
    raw: true,
  });
  res.render("login-student", { allTeachers });
});

router.post("/logout", async (req, res) => {
  if (req.session.loggedIn) {
    await req.session.destroy(() => {
      res.status(204).end();
    });
  }
});

module.exports = router;
