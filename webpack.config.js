const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './views/index.js',
  output: {
    path: path.resolve('public'),
    filename: 'bundle[hash].js'
    // filename: 'bundle.js'
  },
  plugins: [new HtmlWebpackPlugin()],
  new HtmlWebpackPlugin({
    title: 'koa',
    template: 'views/index.html',
    inject: 'body'
  })
}
