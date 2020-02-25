const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: ['react-hot-loader/patch', '@babel/polyfill', './client/src/index.js'],
  output: {
    publicPath: '/',
    path: path.join(__dirname, '/bundle'),
    filename: '[name].[hash].js'
  },
  devServer: {
    proxy: {
      '/api': 'http://localhost:3001'
    },
    historyApiFallback: true,
    contentBase: path.join(__dirname, './client/public'),
    port: 3000,
    hot: true,
    open: true
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
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.svg$/,
        loader: 'svg-url-loader'
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: 'url-loader'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, './client/public/index.html'),
      favicon: path.resolve(__dirname, './client/public/assets/favicon.ico')
    })
  ]
};
