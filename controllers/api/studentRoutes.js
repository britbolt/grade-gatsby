const router = require("express").Router();
const Student = require("../../models/Student");

// Add a single student
router.post("/", async (req, res) => {
  try {
    const newStudent = await Student.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      teacher_id: req.body.teacherId,
    });
    res.json(newStudent);
  } catch (err) {
    console.log(err.message);
  }
});

module.exports = router;
