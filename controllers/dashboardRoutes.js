const { Teacher, Subject, Student } = require("../models");
const fetch = require("node-fetch");
const { getAttributes } = require("../models/Subject");
const seedSubjects = require("../seeds/subjectData");
const { get } = require("express/lib/response");
const router = require("express").Router();

router.get("/teacher", async (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect("/");
  }
  const educationNewsData = await fetch(
    "https://newsapi.org/v2/everything?q=-sex+education&searchIn=title&pageSize=5&language=en&apiKey=083ffbf1761c458b81f59e2dc1483a68"
  );
  const news = await educationNewsData.json();
  console.log(news.articles[0]);
  res.render("teacher-dashboard", { news: news.articles });
});



router.get("/student", async (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect("/");
  }

res.render("student-dashboard");
});

module.exports = router;
