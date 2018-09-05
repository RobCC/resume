const path        = require('path');
const merge     	= require('webpack-merge');
const baseConfig  = require('./webpack.config.base.js');

module.exports = merge(baseConfig, {
  watch   : true,
  devServer : {
    stats : 'errors-only',
    overlay : true,
    open  : true,
  },
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
            loader    : 'style-loader',
          },
          {
            loader    : 'css-loader',
            options   : {
              modules         : true,
              importLoaders   : 1,
              localIdentName  : '[name]_[local]_[hash:base64:5]',
              sourceMap       : true,
            }
          },
          {
            loader    : 'sass-loader',
            options   : {
              sourceMap : true,
            },
          }
        ]
      },
    ]
  },
});
