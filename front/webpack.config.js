const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './scripts/index.js',

  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'styles', to: 'styles' }, 
        { from: 'pages', to: 'pages' },
        { from: 'assets', to: 'assets' }, 
      ],
    }),
  ]
};