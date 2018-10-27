const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/user');
const config = require('../config/database');


module.exports = function(passport){
  let opts = {};
  // opts.jwtFromRequest = ExtractJwt.fromAuthHeader();
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
  opts.secretOrKey = config.secret;
  passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
      //console.log(jwt_payload);
<<<<<<< HEAD
   // User.getUserById(jwt_payload.user._id, (err, user) => {
=======
>>>>>>> 959523183595d5f95159783a2192c14840bb2266
    User.getUserById(jwt_payload._id, (err, user) => {
      if(err){
        return done(err, false);
      }

      if(user){
        return done(null, user);
      } else {
        return done(null, false);
      }
    });
  }));



}
