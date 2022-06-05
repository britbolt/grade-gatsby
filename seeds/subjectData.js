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
    name: "Gym",
  },
  {
    name: "English",
  },
];

const seedSubjects = () => Subject.bulkCreate(subjectData);

module.exports = seedSubjects;
