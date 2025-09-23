const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',

  entry: {
    main: path.resolve(__dirname, 'front', 'scripts', 'index.js'),
    crearPelicula: path.resolve(__dirname, 'front', 'scripts', 'crearPelicula.js'),
  },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public'),
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'front', 'index.html'),
      filename: 'index.html',
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'front', 'pages', 'crearPelicula.html'),
      filename: 'pages/crearPelicula.html',
      chunks: ['crearPelicula'],
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: path.resolve(__dirname, 'front', 'styles'), to: 'styles' },
        { from: path.resolve(__dirname, 'front', 'pages', 'about.html'), to: 'pages/about.html' },
        { from: path.resolve(__dirname, 'front', 'pages', 'contact.html'), to: 'pages/contact.html' },
        { from: path.resolve(__dirname, 'front', 'assets'), to: 'assets' },
      ],
    }),
  ],
};