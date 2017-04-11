const { resolve } = require('path');
const webpack = require('webpack');

var entry = [
  './app.js'
]

if(process.env.webpack == 'dev'){
  entry.unshift('webpack-dev-server/client?http://localhost:8080', 'webpack/hot/only-dev-server')
}
entry.unshift('babel-polyfill')

var plugins = [new webpack.optimize.UglifyJsPlugin({minimize: true})]

if(process.env.webpack == 'dev'){
  plugins = [
    new webpack.HotModuleReplacementPlugin(),
    // activates HMR

    new webpack.NamedModulesPlugin()
    // prints more readable module names in the browser console on HMR updates
  ]
}

var devtool = ''
if(process.env.webpack == 'dev'){
  devtool = 'inline-source-map'
}

module.exports = {
  entry: entry,

  output: {
    filename: 'bundle.js',
    // the output bundle
    path: resolve(__dirname, 'dist'),
  },

  context: resolve(__dirname, 'src'),

  devtool: devtool,

  module: {
    loaders: [
      { test: /\.js$/,
        loaders: [
          'babel-loader'
        ],
        exclude: /node_modules/
      }
    ],
  },

  plugins: plugins,
};
