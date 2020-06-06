const passport = require('passport');

module.exports = function (req, res, next) {
  passport.authenticate('jwt', (err, user) => {
    if (err || !user) {
      res.status(403).send({
        error: 'you do not have acces',
      });
    } else {
      req.user = user;
      next();
    }
  })(req, res, next);
};
