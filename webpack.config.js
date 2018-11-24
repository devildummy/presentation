const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'js', 'main'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  watch: false,
  watchOptions: {
    aggregateTimeout: 100,
  },
  devtool: 'source-map',
  module: {
    rules: [{
      test: /.jsx?$/,
      loader: 'babel-loader',
      query: {
        presets: ['@babel/env'],
      },
    }],
  },
};
