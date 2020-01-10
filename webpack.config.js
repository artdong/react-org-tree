const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /(\.js|\.jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /(\.css|\.scss|\.less)$/,
        use: ['style-loader', 'css-loader', 'sass-loader', 'less-loader']
      }
    ]
  },
  externals: [nodeExternals()]
};
