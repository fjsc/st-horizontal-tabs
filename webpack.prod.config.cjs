const merge = require('webpack-merge')
const common = require('./webpack.common.cjs')
const path = require('path')
const GeneratePackageJsonPlugin = require("generate-package-json-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin')

const dist = path.resolve(__dirname, 'dist')

const pkg = require('./package.json')
const versionsPackageFilename = __dirname + "/package.json";

module.exports =  merge(common, {
  entry: "./src/index.ts",
  mode: "production",
  output: {
    filename: pkg.name + ".js",
    path: dist
  },
  externals: Object.keys(pkg.dependencies),
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        test: /\.js(\?.*)?$/i,
        extractComments: 'all'
      }),
    ]
  },
  plugins: [
    new GeneratePackageJsonPlugin ({
      name: pkg.name,
      description: pkg.description,
      version: pkg.version,
      dependencies: pkg.dependencies,
      author: pkg.author,
      module : pkg.name + '.js',
      typings: 'src/index.d.ts',
    }, versionsPackageFilename)
  ]
})
