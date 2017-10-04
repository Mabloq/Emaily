const express = require ('express');
const mongoose = require ('mongoose');
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

app.use (
  cookieSession ({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);

app.use (passport.initialize ());
app.use (passport.session ());

require ('./routes/authRoutes') (app);

app.get ('/', (req, res) => {
  res.send ({hello: 'Bakks'});
});

const PORT = process.env.PORT || 5000;

app.listen (PORT);
