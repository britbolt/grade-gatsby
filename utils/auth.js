// authorization protection middleware
const teachAuth = (req, res, next) => {
  if (!req.session.teacher_id) {
    res.redirect("/")
  } else {
    next();
  }
};

const studentAuth = (req, res, next) => {
  if (!req.session.user_id) {
    res.redirect("/")
    } else {
    next();
  }
};

module.exports = { teachAuth, studentAuth };
