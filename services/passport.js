const passport = require ('passport');
const GoogleStrategy = require ('passport-google-oauth20').Strategy;
const mongoose = require ('mongoose');
const keys = require ('../config/keys');

const User = mongoose.model ('users');

passport.serializeUser ((user, done) => {
  done (null, user.id);
});

passport.deserializeUser ((id, done) => {
  User.findById (id).then (user => {
    done (null, user);
  });
});

passport.use (
  new GoogleStrategy (
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true,
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne ({googleID: profile.id}).then (existingUser => {
        if (existingUser) {
          //we already have a record with the given pofile id
          done (null, existingUser);
        } else {
          //we done have a user record, create new
          new User ({googleID: profile.id})
            .save ()
            .then (user => done (null, user));
        }
      });
    }
  )
);
