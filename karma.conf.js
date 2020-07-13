const { createDefaultConfig } = require('@open-wc/testing-karma');
const merge = require('deepmerge');

var webpackConfig = require('./webpack.config');

module.exports = function (config) {
  config.set({
    basePath: './',
    frameworks: ['mocha', 'chai'],
    files: ['src/**/*.ts'],
    exclude: [],
    preprocessors: {
      'src/**/*.ts': ['webpack'],
    },
    webpack: {
      mode: 'development',
      module: webpackConfig.module,
      resolve: webpackConfig.resolve,
    },
    webpackMiddleware: {
      stats: 'errors-only',
    },
    port: 9876,
    customLaunchers: {
      Chrome_no_sandbox: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox'],
      },
    },
    restartOnFileChange: false,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    singleRun: true,
    concurrency: Infinity,
  });
};
