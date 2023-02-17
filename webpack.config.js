const path = require('path')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
    clean: true
  },
  devtool: 'source-map',
  mode: 'development',
  devServer: {
    host: "localhost",
    port: 8080,
    open: true,
    watchFiles: 'index.html'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'keyboard',
      template: './index.html',
      // build 시, header가 아닌 body로 주입.
      inject: 'body',
      favicon: './favicon.ico'
    }),
    new MiniCssExtractPlugin({ filename: 'styles.css' })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  // 최적화: TerserPlugin을 압축하여 최소화 한다.
  optimization: {
    minimizer: [
      // js 압축설정
      new TerserWebpackPlugin(),
      // css 압축설정
      new CssMinimizerPlugin()
    ]
  },
}