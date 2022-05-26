const sequelize = require("../config/connection");
const seedStudents = require("./studentData");
const seedTeachers = require("./teacherData");
const seedSubjects = require("./subjectData");
const seedGrades = require("./gradeData");

const seedAll = async () => {
  try {
    await sequelize.sync({ force: true });
    await seedTeachers();
    await seedStudents();
    await seedSubjects();
    await seedGrades();
    process.exit(0);
  } catch (err) {
    console.log(err.message);
  }
};

seedAll();
