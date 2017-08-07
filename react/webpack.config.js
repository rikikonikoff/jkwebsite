var webpack = require('webpack');
var path = require('path');

var config = {
  entry: ['whatwg-fetch', './react/src/main.js'],
  output: {
    path: path.resolve("./app/assets/javascripts"),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.json', '.jsx', '.js']
  },
  devtool: 'eval-source-map',
  target: 'node-webkit',
  plugins: []
};

module.exports = config;
