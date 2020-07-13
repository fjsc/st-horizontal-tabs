const merge = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');
const dist = path.resolve(__dirname, 'dist');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';
const pkg = require('./package.json');

module.exports = merge(common, {
  entry: './demo/demo-snippet.ts',
  mode: 'development',
  devtool: isDevelopment && 'inline-source-map',
  watch: isDevelopment,
  output: {
    filename: 'demo.js',
    path: dist,
  },
  devServer: isDevelopment
    ? {
        contentBase: dist,
        compress: true,
        port: 8080,
      }
    : {},
  externals: isDevelopment ? [] : Object.keys(pkg.dependencies),
  plugins: isDevelopment
    ? [
        new HtmlWebpackPlugin({
          title: 'St Element Starter',
          filename: 'index.html',
          template: 'demo/index.html',
          alwaysWriteToDisk: false,
          minify: false,
        }),
        new HtmlWebpackHarddiskPlugin({
          outputPath: path.resolve(__dirname, 'dist'),
        }),
      ]
    : [],
  optimization: {
    minimize: !isDevelopment,
    minimizer: [
      new TerserPlugin({
        test: /\.js(\?.*)?$/i,
        extractComments: 'all',
      }),
    ],
  },
});
