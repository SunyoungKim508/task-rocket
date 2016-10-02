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

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:3000/',
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch',
    APP_DIR + '/index.js',
  ],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath: '/dist',
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loaders: ['babel'],
      },
      {
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
    alias: {
      'redux-devtools/lib': path.join(__dirname, '..', '..', 'src'),
      'redux-devtools': path.join(__dirname, '..', '..', 'src'),
      'react': path.join(__dirname, 'node_modules', 'react')
    },
    extensions: ['', '.js']
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
