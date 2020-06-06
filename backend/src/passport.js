const passport = require('passport');
const User = require('./models/User');
require('dotenv/config');

const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET || 'secret',
    },
    async function (jwtPayload, done) {
      //custom logic to verify custom logic
      try {
        console.log(`jwtPayload:`, jwtPayload);
        const user = await User.findById(jwtPayload._id);
        if (!user) {
          return done(new Error(), false);
        }
        return done(null, user);
      } catch (err) {
        return done(new Error(), false);
      }
    }
  )
);

module.exports = null;
