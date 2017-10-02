const passport = require ('passport');

module.exports = app => {
  //authenticate user with google
  app.get (
    '/auth/google',
    passport.authenticate ('google', {
      scope: ['profile', 'email'],
    })
  );

  //google cllbakc route
  app.get ('/auth/google/callback', passport.authenticate ('google'));
};
