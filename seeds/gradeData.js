const { Grade } = require("../models");

const gradeData = [
  {
    grade: 100,
    student_id: 1,
    subject_id: 3,
  },
  {
    grade: 94,
    student_id: 2,
    subject_id: 1,
  },
  {
    grade: 84,
    student_id: 2,
    subject_id: 3,
  },
  {
    grade: 95,
    student_id: 3,
    subject_id: 4,
  },
  {
    grade: 90,
    student_id: 4,
    subject_id: 3,
  },
];

const seedGrades = () => Grade.bulkCreate(gradeData);

module.exports = seedGrades;
