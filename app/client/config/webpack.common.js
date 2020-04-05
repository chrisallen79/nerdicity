const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    '@babel/polyfill',
    path.join(__dirname, '../src/index.js')
  ],
  output: {
    publicPath: '/',
    path: path.join(__dirname, '../../dist/client'),
    filename: 'static/js/[name].[hash:8].js'
  },
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env']
        }
      },
      {
        test: /\.svg$/,
        loader: 'svg-url-loader',
        options: {
          encoding: 'base64',
          limit: 10000,
          name: 'static/media/[name].[hash:8].[ext]',
          noquotes: true
        }
      },
      {
        test: /\.(bmp|gif|jpe?g|png)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'static/media/[name].[hash:8].[ext]',
          noquotes: true
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, '../public/index.html'),
      favicon: path.resolve(__dirname, '../public/favicon.ico')
    })
  ]
};
