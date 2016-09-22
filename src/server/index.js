require('babel-core/register'); // Enable runtime transpilation to use ES6/7 in node

const webpackIsomorphicToolsConfig = require('../../tools/webpack/webpack-isomorphic-tools.config.js')
var rootDir = require('path').resolve(__dirname, '../../');

global.__CLIENT__ = false;
global.__SERVER__ = true;
global.__DEV__ = process.env.NODE_ENV !== 'production';

// https://github.com/halt-hammerzeit/webpack-isomorphic-tools
var WebpackIsomorphicTools = require('webpack-isomorphic-tools');
global.webpackIsomorphicTools = new WebpackIsomorphicTools(webpackIsomorphicToolsConfig)
    .development(global.__DEV__)
    .server(rootDir, function () {
        require('./server');
    });
