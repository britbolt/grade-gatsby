const router = require("express").Router();
const Teacher = require("../../models/Teacher");

// Add a single teacher
router.post("/", async (req, res) => {
    try {
      const newTeacher = await Teacher.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      })
      res.json(newTeacher);
    } catch (err) {
      console.log(err.message);
      res.sendStatus(500)
    }
  });

module.exports = router;
