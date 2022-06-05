// authorization protection middleware
const teachAuth = (req, res, next) => {
  if (!req.session.teacher_id) {
    res.render("home", { loggedIn: req.session.loggedIn });
  } else {
    next();
  }
};

const studentAuth = (req, res, next) => {
  if (!req.session.user_id) {
    res.render("home", { loggedIn: req.session.loggedIn });
  } else {
    next();
  }
};

module.exports = { teachAuth, studentAuth };
