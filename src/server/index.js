require('babel-core/register');
require('babel-polyfill');
//require('./server');
var rootDir = require('path').resolve(__dirname, '../..');

global.__CLIENT__ = false;
global.__SERVER__ = true;
global.__DISABLE_SSR__ = false;  // <----- DISABLES SERVER SIDE RENDERING FOR ERROR DEBUGGING
global.__DEVELOPMENT__ = process.env.NODE_ENV !== 'production';

// https://github.com/halt-hammerzeit/webpack-isomorphic-tools
var WebpackIsomorphicTools = require('webpack-isomorphic-tools');
global.webpackIsomorphicTools = new WebpackIsomorphicTools(require('../../webpack-isomorphic-tools.config'))
    .development(__DEVELOPMENT__)
    .server(rootDir, function () {
        require('./server');
    });