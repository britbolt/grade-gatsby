const router = require("express").Router();
const gradeRoutes = require('./gradeRoutes')
const studentRoutes = require('./studentRoutes')
const teacherRoutes = require('./teacherRoutes')

app.use('/grades', gradeRoutes)
app.use('/student', studentRoutes)
app.use('/teacher', teacherRoutes)

module.exports = router;