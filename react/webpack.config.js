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
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"development"',
        'global': {},
        'global.GENTLY': false})
  ]
};

module.exports = config;
