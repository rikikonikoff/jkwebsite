import webpack from 'webpack';
import path from 'path';

var config = {
  entry: ['whatwg-fetch', './react/src/main.js'],
  output: {
    path: path.join(__dirname, "app/assets/javascripts"),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
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
  plugins: []
};

switch(process.env.NODE_ENV) {
  case 'development':
    config.plugins.push(new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"development"' }));
  case 'staging':
    delete config.devtool;
    config.plugins.push(new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"staging"' }));
  case 'production':
    delete config.devtool;
    config.plugins.push(new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"production"' }));
}

module.exports = config;
