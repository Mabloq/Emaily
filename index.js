const express = require ('express');
const mongoose = require ('mongoose');
const bodyParser = require ('body-parser');
const cookieSession = require ('cookie-session');
const passport = require ('passport');
const keys = require ('./config/keys');
require ('./models/User');
require ('./services/passport');

var db = mongoose.connect (keys.mongoURI, {
  useMongoClient: true,
});

//db test connection
db.on ('error', console.error.bind (console, 'connection error:'));
db.once ('open', function () {
  console.log ('Success');
});
const app = express ();

//middlewares
app.use (bodyParser.json ());
app.use (
  cookieSession ({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);
app.use (passport.initialize ());
app.use (passport.session ());

require ('./routes/authRoutes') (app);
require ('./routes/billingRoutes') (app);

if (process.env.NODE_ENV === 'production') {
  //expeess will serve up production assets
  app.use (express.static ('client/build'));
  const path = require ('path');
  app.get ('*', (req, res) => {
    res.sendFile (path.resolve (__dirname, 'client', 'build', 'index.html'));
  });
}
const PORT = process.env.PORT || 5000;

app.listen (PORT);
