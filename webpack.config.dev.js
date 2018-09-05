/*
  Webpack 4
  This config file is not actually needed for basic webpack configuration
  for using loaders in webpack 4 you still have to create a configuration file.

  Package.json script files BEFORE creating this config file

  CSS LOADER / STYLE LOADER
  https://stackoverflow.com/questions/34039826/webpack-style-loader-vs-css-loader
  https://www.npmjs.com/package/style-loader
  POSTCSS LOADER
  https://postcss.org/

  .babelrc
  {
    "presets" : [
      "es2015", "env", "react"
    ],
    "plugins": [
      "transform-object-rest-spread",
      "transform-class-properties"
    ]
  }

*/

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
              "transform-class-properties"
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
