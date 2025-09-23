const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',

  // Rutas corregidas: eliminamos la referencia a 'front'
  entry: {
    main: path.resolve(__dirname, 'scripts', 'index.js'),
    crearPelicula: path.resolve(__dirname, 'scripts', 'crearPelicula.js'),
  },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public'),
  },

  plugins: [
    new HtmlWebpackPlugin({
      // Rutas corregidas
      template: path.resolve(__dirname, 'index.html'),
      filename: 'index.html',
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      // Rutas corregidas
      template: path.resolve(__dirname, 'pages', 'crearPelicula.html'),
      filename: 'pages/crearPelicula.html',
      chunks: ['crearPelicula'],
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: path.resolve(__dirname, 'styles'), to: 'styles' },
        { from: path.resolve(__dirname, 'pages', 'about.html'), to: 'pages/about.html' },
        { from: path.resolve(__dirname, 'pages', 'contact.html'), to: 'pages/contact.html' },
        { from: path.resolve(__dirname, 'assets'), to: 'assets' },
      ],
    }),
  ],
};