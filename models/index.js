const Teacher = require('./Teacher');
const Student = require('./Student');
const Subject = require('./Subject');

// teacher has many students
Teacher.hasMany(Student, {
    // foreign key??
});

// student belongs to teacher
Student.belongsTo(Teacher, {
    foreignKey: {
        name: 'teacher_id'
    }
});

// student belongs to many subjects through grades
Student.belongsToMany(Subject, {
    through: 'Grade'
});

// subject belongs to many students through grades
Subject.belongsToMany(Student, {
    through: 'Grade'
});


module.exports = { Teacher, Student, Subject };