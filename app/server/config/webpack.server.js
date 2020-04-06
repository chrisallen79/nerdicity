import path from 'path';
import nodeExternals from 'webpack-node-externals';

export default {
  mode: 'production',
  target: 'node',
  externals: [nodeExternals()],
  entry: [path.resolve(__dirname, '../src/server.js')],
  output: {
    path: path.resolve(__dirname, '../../dist/server/'),
    filename: 'server.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env']
        }
      }
    ]
  }
};
