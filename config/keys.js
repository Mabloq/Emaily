if (process.env.NODE_ENV === 'production') {
  module.exports = require ('./prod');
} else {
  //load dev keys
  module.exports = require ('./dev');
}
