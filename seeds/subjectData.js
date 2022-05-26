const { Subject } = require("../models");

const subjectData = [
  {
    name: "Math",
  },
  {
    name: "Science",
  },
  {
    name: "Music",
  },
  {
    name: "English",
  },
  {
    name: "Gym",
  },
  {
    name: "History",
  },
  {
    name: "Spanish",
  },
];

const seedSubjects = () => Subject.bulkCreate(subjectData);

module.exports = seedSubjects;
