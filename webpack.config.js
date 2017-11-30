const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

// 通常，在每次构建前清理 /dist 文件夹，是比较推荐的做法，因此只会生成用到的文件。让我们完成这个需求。
// clean-webpack-plugin 是一个比较普及的管理插件，让我们安装和配置下
const CleanWebpackPlugin = require('clean-webpack-plugin')

const Port = process.env.PORT

module.exports = {
  entry: {
    vendor: ['react', 'react-dom'],
    index: path.resolve('views')
  },
  output: {
    path: path.resolve('public'),
    // filename: 'bundle[hash].js',
    // filename: 'bundle.js',
    publicPath: '',
    filename: `[name]-[chunkhash:8].js`,
    chunkFilename: `[name]-[chunkhash:8].js`
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      // 处理 less 相关
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      // 处理 sass 相关
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      // 处理css
      {
        test: /\.css$/,
        include: /node_modules/,
        use: ['style-loader', 'css-loader']
      },
      // 处理图片
      {
        test: /\.(gif|png|jpe?g|svg)$/,
        include: path.resolve(__dirname, 'component'),
        use: 'file-loader'
      },
      // 读取JSon
      {
        test: /\.json$/,
        exclude: /node_modules/,
        use: ['json-loader']
      }
    ]
  },
  devServer: {
    // contentBase: path.join(__dirname, 'public/index.html'),
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    inline: true,
    // hot: true,
    port: Port,
    // proxy: [{
    //   context: ["/auth", "/api"],
    //   target: "http://localhost:7070",
    // }]
    proxy: {
      "api": `http://localhost:7070`,
      // "users": `http://localhost:7070`
    }
  },
  plugins: [
    // 每次都会清理 pbblic 文件夹的内容
    new CleanWebpackPlugin(
      // ['public'],
      ['public/index-*.js','public/manifest-*.js'],　 //匹配删除的文件
      {
        root: __dirname,       　　　　　　　　　　//根目录
        // verbose: true,        　　　　　　　　　　//开启在控制台输出信息
        // dry: false        　　　　　　　　　　//启用删除文件
        watch: true, // 编译的时候就删除旧文件
        // exclude: [ 'index.html', 'vendor-*.js' ], // 这个数组中不进行删除
      }
    ),
    new HtmlWebpackPlugin({
      title: 'cancan',
      filename: 'index.html', //生成的html存放路径，相对于 path
      template: 'views/index.html', //html模板路径
      inject: 'body'
    }),
    // new webpack.HotModuleReplacementPlugin(),
    // new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin('[name].css'),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor', 'manifest'],
      minChunks: Infinity, // (随着 entry chunk 越来越多， 这个配置保证没其它的模块会打包进 vendor chunk)
    })
  ],
  resolve: {
    extensions: [ '.js', '.jsx', '.less', '.scss', '.css'], //后缀名自动补全
  }
}
