const path        = require('path');
const webpack     = require('webpack');
const HTMLPlugin  = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';
const isDev = !isProd;

const plugins = [
  new HTMLPlugin({
      template    : './src/index.html',
      filename    : './index.html',
  }),
  new MiniCssExtractPlugin({
    filename      : '[name].css',
    chunkFilename : '[id].css',
  })
]

if (isProd) {
  plugins.push(new CleanWebpackPlugin(['dist/*.*'], {}))
}

module.exports = {
  entry   : {
    main          : './src/main.js',
  },
  output  : {
    path          : path.resolve(__dirname, 'dist'),
    filename      : 'main.js',
  },
  plugins : plugins
};
