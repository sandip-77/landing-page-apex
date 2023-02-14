// NOTE: To use this example standalone (e.g. outside of repo)
// delete the local development overrides at the bottom of this file

// avoid destructuring for older Node version support
const resolve = require('path').resolve;
const webpack = require('webpack');

const config = {
  mode: 'development',

  devServer: {
    static: '.'
  },

  entry: {
    app: resolve('./src/app')
  },

  output: {
    library: 'App'
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },

  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        include: [resolve('.')],
        exclude: [/node_modules/],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/env', '@babel/react']
            }
          },
          {
            loader: 'ts-loader'
          }
        ]
      }
    ]
  },

  // Optional: Enables reading mapbox token from environment variable
  plugins: [new webpack.EnvironmentPlugin({MapboxAccessToken: 'pk.eyJ1Ijoic2FuZHktNzciLCJhIjoiY2wwajI3MmNwMDFsbjNlcnY0bjJtdXJtdCJ9.yDqEh7ba7bWcDlSn3Dx87Q'})]
};
