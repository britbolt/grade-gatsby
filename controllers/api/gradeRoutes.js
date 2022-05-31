const router = require("express").Router();
const Grade = require("../../models/Grade");

// add a single grade
router.post("/", async (req, res) => {
  try {
    const newGrade = await Grade.create({
      grade: req.body.grade,
      student_id: req.body.studentId,
      subject_id: req.body.subjectId,
    });
    res.json(newGrade);
  } catch (err) {
    console.log(err.message);
    res.sendStatus(500)
  }
});

module.exports = router;
