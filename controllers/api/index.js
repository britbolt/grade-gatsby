const router = require("express").Router();
const gradeRoutes = require('./gradeRoutes')
const studentRoutes = require('./studentRoutes')
const teacherRoutes = require('./teacherRoutes')

router.use('/grades', gradeRoutes)
router.use('/student', studentRoutes)
router.use('/teacher', teacherRoutes)

module.exports = router;