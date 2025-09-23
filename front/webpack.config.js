const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    main: './front/scripts/index.js',
    crearPelicula: './front/scripts/crearPelicula.js',
  },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public'),
  },

  mode: 'development',

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './front/index.html',
      filename: 'index.html',
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      template: './front/pages/crearPelicula.html',
      filename: 'pages/crearPelicula.html',
      chunks: ['crearPelicula'],
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'front/styles', to: 'styles' },
        { from: 'front/pages/about.html', to: 'pages/about.html' },
        { from: 'front/pages/contact.html', to: 'pages/contact.html' },
        { from: 'front/assets', to: 'assets' },
      ],
    }),
  ]
};