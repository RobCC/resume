const path        = require('path');
const merge     	= require('webpack-merge');
const baseConfig  = require('./webpack.config.base.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(baseConfig, {

  module : {
    rules     : [
      {
        test      : /\.js$/,
        include   : [
          path.resolve(__dirname, 'src'),
        ],
        exclude   : /node_modules/,
        use       : {
          loader  : 'babel-loader',
          options : {
            presets : [
              "es2015", "env", "react"
            ],
            plugins: [
              "transform-object-rest-spread",
              "transform-class-properties",
              ["module-resolver", {
                "root" : ['./src'],
              }],
            ],
          },
        }
      },
      {
        test    : /\.scss$/,
        use     : [
          {
            loader    : MiniCssExtractPlugin.loader,
          },
          {
            loader    : 'css-loader',
            options   : {
              modules         : true,
              importLoaders   : 1,
              localIdentName  : '[name]_[local]_[hash:base64:5]',
              minimize        : true,
            }
          },
          {
            loader    : 'sass-loader',
          }
        ]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg)$/,
        use: ['file-loader'],
      },
    ]
  },
});
