const passport = require('passport');
const User = require('../models/User');
const FacebookStrategy = require('passport-facebook');

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


//loginFacebook
passport.use(new FacebookStrategy({
  clientID: process.env.FACEBOOK_APP_ID,
  clientSecret: process.env.FACEBOOK_APP_SECRET,
  callbackURL: "http://localhost:3000/"
//   callbackURL: "auth/facebook/callback"
},
function(accessToken, refreshToken, profile, cb) {
  User.FindOrcreate({ username: profile.displayName }, function (err, user) {
    if (err) { return cb(err); }
    cb(null, user);
  });
}));

passport.serializeUser(function(user,cb){
  cb(null, user)
});

passport.deserializeUser(function(user,cb){
  cb(null, user)
})  

module.exports = passport;