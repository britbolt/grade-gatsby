const { Teacher } = require("../models");

const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("home");
});

// redirect to homepage if loggedIn????where does this go?
router.get("/login-teacher", (req, res) => {
  res.render("login-teacher");
});
router.get("/login-student", async (req, res) => {
  const allTeachers = await Teacher.findAll({
    attributes: ["id", "name"],
    raw: true,
  });
  res.render("login-student", { allTeachers });
});

router.get("/teacher-view-student", (req, res) => {
  res.render("teacher-view-student");
})

router.post('/logout', async (req, res) => {
  if (req.session.loggedIn) {
    await req.session.destroy(() => {
      res.status(204).end();
    });
  }

})

module.exports = router;
