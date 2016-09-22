/* eslint-disable */

var webpack = require('webpack');
var autoprefixer = require('autoprefixer');

module.exports = function (CSSModules) {
  return {
    devtool: 'inline-source-map',
    module: {
      // The sinon library doesn't like being run through babel
      noParse: [/node_modules\/sinon/],
      rules: [
        { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel?cacheDirectory' },
        { test: /\.json$/, loader: 'json' },
        // sinon.js--aliased for enzyme--expects/requires global vars.
        // imports-loader allows for global vars to be injected into the module.
        // See https://github.com/webpack/webpack/issues/304
        {
          test: /sinon\/pkg\/sinon\.js/,
          loader: 'imports?define=>false,require=>false',
        },
        { test: /\.(jpe?g|png|gif|svg)$/, loader: 'url?limit=10240' },
        {
          test: /\.css$/,
          loader: 'style!css?localIdentName=[name]__[local].[hash:base64:5]&' + (CSSModules ? 'modules' : '') + '&sourceMap&-minimize&importLoaders=1!postcss',
        },
        {
          test: /\.scss$/,
          loader: 'style!css?localIdentName=[name]__[local].[hash:base64:5]&' + (CSSModules ? 'modules' : '') + '&sourceMap&-minimize&importLoaders=2!postcss!sass?outputStyle=expanded&sourceMap',
        },
      ],
    },
    // required for enzyme to work properly
    externals: {
      cheerio: 'window',
      'react/addons': true,
      'react/lib/ExecutionEnvironment': true,
      'react/lib/ReactContext': true,
    },
    resolve: {
      extensions: ['.js', '.jsx', '.json'],
      modules: [
        'src',
        'node_modules',
      ],
      alias: {
        // required for enzyme to work properly
        sinon: 'sinon/pkg/sinon',
      },
    },
    plugins: [
      new webpack.LoaderOptionsPlugin({
        options: {
          postcss: [autoprefixer({ browsers: ['last 2 versions'] })],
          context: '/', // Required for the sourceMap of css/sass loader
        },
      }),
      // Setup global variables for app
      new webpack.DefinePlugin({
        'process.env': { NODE_ENV: JSON.stringify('development') },
        __CLIENT__: JSON.stringify(true),
        __SERVER__: JSON.stringify(false),
        __DEV__: JSON.stringify(true),
      }),
      new webpack.IgnorePlugin(/\.json$/),
      new webpack.NoErrorsPlugin(),
    ],
  };
};