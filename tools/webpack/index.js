var webpackConfig;
var CSSModules = false;  // Disable css modules here

if (process.env.NODE_ENV !== 'test') {
  webpackConfig = require('./config')(CSSModules);
} else {
  webpackConfig = require('./config.test')(CSSModules);
}

module.exports = webpackConfig;