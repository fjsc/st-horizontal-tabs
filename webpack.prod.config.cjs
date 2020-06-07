const merge = require('webpack-merge')
const common = require('./webpack.common.cjs')
const path = require('path')
const GeneratePackageJsonPlugin = require("generate-package-json-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin')
var TypedocWebpackPlugin = require('typedoc-webpack-plugin')

const dist = path.resolve(__dirname, 'dist')

const pkg = require('./package.json')
const versionsPackageFilename = __dirname + "/package.json";

module.exports =  merge(common, {
  entry: "./src/index.ts",
  mode: "production",
  output: {
    filename: "bundle.js",
    path: dist
  },
  externals: Object.keys(pkg.dependencies),
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        test: /\.js(\?.*)?$/i,
      }),
    ]
  },
  plugins: [
    new GeneratePackageJsonPlugin ({
      name: pkg.name,
      version: pkg.version,
      dependencies: pkg.dependencies,

    }, versionsPackageFilename)
  ]
})
