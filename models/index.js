const Teacher = require("./Teacher");
const Student = require("./Student");
const Subject = require("./Subject");
const Grade = require("./Grade");
// teacher has many students
Teacher.hasMany(Student, {
  // foreign key??
});

// student belongs to teacher
Student.belongsTo(Teacher, {
  foreignKey: {
    name: "teacher_id",
  },
});

// student belongs to many subjects through grades
Student.belongsToMany(Subject, {
  through: "grade",
  foreignKey: {
    name: "subject_id",
  },
});

// subject belongs to many students through grades
Subject.belongsToMany(Student, {
  through: "grade",
  foreignKey: {
    name: "student_id",
  },
});


Student.hasMany(Grade);

Grade.belongsTo(Student);

// Student.belongsToMany(Grade);

// Grade.hasOne(Student);

module.exports = { Teacher, Student, Subject, Grade };
