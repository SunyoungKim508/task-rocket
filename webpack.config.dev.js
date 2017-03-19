require("babel-polyfill");

var webpack = require('webpack');
var path = require('path');

var precss       = require('precss');
var autoprefixer = require('autoprefixer');
var postcssImport =  require('postcss-import');
var safe   = require('postcss-safe-parser');

// output directory
var BUILD_DIR = path.join(__dirname, 'dist');

// source directory
var SOURCE_DIR = path.join(__dirname, 'src');

module.exports = {
  entry: [
    'babel-polyfill',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch',
    './src/index',
  ],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath: '/dist/',
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include: __dirname,
        exclude: /node_modules/,
        loaders: ['babel'],
      }, {
        test:   /\.css$/,
        loader: "style-loader!css-loader?modules&importLoaders=1!postcss-loader"
      }
    ]
  },
  devtool: 'eval',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    root: [
      __dirname,
      path.join(__dirname, 'src'),
    ],
    extensions: ['', '.js', 'jsx']
  },
  resolveLoader: {
    'fallback': path.join(__dirname, 'node_modules')
  },
  postcss: function () {
    return [
      autoprefixer,
      precss,
      postcssImport,
      safe,
    ];
  }
};
