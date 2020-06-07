const merge = require('webpack-merge')
const common = require('./webpack.common.cjs')
const path = require('path')
const dist = path.resolve(__dirname, 'dist')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin')

module.exports =  merge(common, {
  entry: "./demo/demo-snippet.ts",
  mode: "development",
  devtool: 'inline-source-map',
  watch: true,
  output: {
    filename: "bundle.js",
    path: dist
  },
  devServer: {
    contentBase: dist,
    compress: true,
    port: 8080
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "St Element Starter",
      filename: "index.html",
      template: "demo/index.html",
      alwaysWriteToDisk: false,
      minify: false
    }),
    new HtmlWebpackHarddiskPlugin({
      outputPath: path.resolve(__dirname, "dist")
    })
  ]
});
