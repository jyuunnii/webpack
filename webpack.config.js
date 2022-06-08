const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.js',
    subPage: './src/sub/index.js'
  }, // 지정된 파일에 연관된 모듈과 라이브러리를 포함한 번들 생성
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [ // 사용하는 로더 규칙
      {
        test: /\.css$/, // 파일 확장자(정규식)
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ] // 로더 명
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.(woff|woff2|eot|ttf|oft|)$/,
        type: 'asset/resource'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
  ],
  optimization:{
    splitChunks:{
      chunks: 'all',
      name: 'vendors'
    },
    runtimeChunk: 'single'
  },
  devtool: 'source-map'
};