const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: './views/index.js',
  output: {
    path: path.resolve('public'),
    filename: 'bundle[hash].js'
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
            {
                loader: "style-loader"
            }, {
                loader: "css-loader",
                options: {
                    modules: true
                }
            }, {
                loader: "postcss-loader"
            }
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'pubilc/index.html'),
    compress: true,
    inline: true,
    hot:true,
    port: 6789,
    proxy: {
      "/api": "http://localhost:6789"
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'cancan',
      filename: path.join(__dirname, 'pubilc/index.html'), //生成的html存放路径，相对于 path
      template: 'views/index.html', //html模板路径
      inject: 'body'
    }),
    new webpack.HotModuleReplacementPlugin(),
    // new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin('[name].css')
  ],
  resolve: {
    extensions: [ '.js', '.jsx', '.less', '.scss', '.css'], //后缀名自动补全
  }
}
