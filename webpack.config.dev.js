require('babel-polyfill');

const { resolve } = require('path');
var webpack = require('webpack');
var precss  = require('precss');
var autoprefixer = require('autoprefixer');
var postcssImport = require('postcss-import');
// var safe = require('postcss-safe-parser');
var mqpacker = require('css-mqpacker');

// output directory
var BUILD_DIR = resolve(__dirname, 'dist');
console.log('__dirname', __dirname)

// source directory
var SOURCE_DIR = resolve(__dirname, 'src');
var CONTEXT_DIR = __dirname;

module.exports = {
  entry: [
    'babel-polyfill',
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch',
    './src/index.js',
  ],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath: '/',
  },
  context: CONTEXT_DIR,
  module : {
    rules : [
      {
        test : /\.jsx?/,
        loader: 'babel-loader',
        include: [__dirname],
        exclude: [/node_modules/],
      }, {
        test: /\.css$/,
        use: [
         'style-loader',
         'css-loader?modules&importLoaders=1',
         'postcss-loader',
        ]
      },
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ]
  },
  devtool: 'inline-source-map',
  devServer: {
    hot: true, // enable HMR on the server
    contentBase: BUILD_DIR, // match the output path
    publicPath: '/dist/', // match the output `publicPath`
    compress: true,
    port: 9000
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.LoaderOptionsPlugin({
      test: /\.css$/,
      debug: true,
      options: {
        postcss: [
          precss(),
          autoprefixer({
            browsers: [
              'last 3 version',
              'ie >= 10',
            ],
          }),
          mqpacker(),
          postcssImport()
        ],
        context: resolve(__dirname, 'src'),
        output: {
          path: resolve(__dirname, 'dist'),
        }
      }
    })
  ],
  resolve: {
    modules: [
      "node_modules",
      SOURCE_DIR
    ],
    extensions: ['.js', '.jsx']
  }
};
