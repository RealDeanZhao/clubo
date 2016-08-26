require('../../server.babel');
const webpackIsomorphicToolsConfig = require('../../webpack-isomorphic-tools.config.js')
var rootDir = require('path').resolve(__dirname, '../..');

global.__CLIENT__ = false;
global.__SERVER__ = true;
global.__DISABLE_SSR__ = false;  // <----- DISABLES SERVER SIDE RENDERING FOR ERROR DEBUGGING
global.__DEVELOPMENT__ = process.env.NODE_ENV !== 'production';

// https://github.com/halt-hammerzeit/webpack-isomorphic-tools
var WebpackIsomorphicTools = require('webpack-isomorphic-tools');
global.webpackIsomorphicTools = new WebpackIsomorphicTools(webpackIsomorphicToolsConfig)
    .development(global.__DEVELOPMENT__)
    .server(rootDir, function () {
        //require('./server');
    });

require('./server');