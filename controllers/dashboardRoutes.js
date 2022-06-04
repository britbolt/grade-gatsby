const { Student, Grade, Subject } = require("../models");
const fetch = require("node-fetch");
const router = require("express").Router();

router.get("/teacher", async (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect("/");
  }
  try {
    const dashboardData = await Student.findAll({
      where: {
        teacher_id: req.session.teacher_id,
      },
      include: {
        model: Grade,
        order: ["subject_id"],
      },
    });

    const parsedDashboardData = dashboardData.map((student) =>
      student.get({ plain: true })
    );
    const educationNewsData = await fetch(
      "https://newsapi.org/v2/everything?q=-sex+education&searchIn=title&pageSize=5&language=en&apiKey=083ffbf1761c458b81f59e2dc1483a68"
    );
    const news = await educationNewsData.json();

    res.render("teacher-dashboard", {
      news: news.articles,
      studentData: parsedDashboardData,
      loggedIn: req.session.loggedIn
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Something went wrong" });
  }
});

router.get("/student", async (req, res) => {
  console.log(req.session.user_id)
  try {
    const studentData = await Student.findOne({
      where: {
        id: req.session.user_id,
      },
      include: {
        model: Grade,
        order: ["subject_id"],
      },
    });
    const parsedStudentData = studentData.get({ plain: true })
    console.log(parsedStudentData);
    res.render("student-dashboard", { parsedStudentData, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err.message);
  }
});

module.exports = router;
