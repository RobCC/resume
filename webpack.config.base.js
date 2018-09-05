const path       = require('path');
const HTMLPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry   : {
    main          : './src/main.js',
  },
  output  : {
    path          : path.resolve(__dirname, 'dist'),
    filename      : 'main.js',
  },
  plugins : [
    new HTMLPlugin({
        template    : './src/index.html',
        filename    : './index.html',
    }),
    new MiniCssExtractPlugin({
      filename      : '[name].css',
      chunkFilename : '[id].css',
    })
  ]
};
