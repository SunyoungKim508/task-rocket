var webpack = require('webpack');
var path = require('path');

var precss       = require('precss');
var autoprefixer = require('autoprefixer');
var postcssImport =  require('postcss-import');
var safe   = require('postcss-safe-parser');

// output directory
var BUILD_DIR = path.resolve(__dirname, 'dist');
// endtry directory
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel'
      },
      {
        test:   /\.css$/,
        loader: "style-loader!css-loader?modules&importLoaders=1!postcss-loader"
      }
    ]
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

module.exports = config;
