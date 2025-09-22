const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    main: './scripts/index.js',
    crearPelicula: './scripts/formControl.js',
  },

  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].bundle.js',
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      template: './pages/crearPelicula.html',
      filename: 'pages/crearPelicula.html',
      chunks: ['crearPelicula'],
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'styles', to: 'styles' },
        { from: 'pages/about.html', to: 'pages/about.html' },
        { from: 'pages/contact.html', to: 'pages/contact.html' },
        { from: 'assets', to: 'assets' },
      ],
    }),
  ]
};