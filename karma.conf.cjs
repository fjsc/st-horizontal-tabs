const {createDefaultConfig} = require('@open-wc/testing-karma');
const merge = require('deepmerge');

process.env.CHROME_BIN = require('puppeteer').executablePath();
    
module.exports = (config) => {
  config.set(
    merge(createDefaultConfig(config), {
      frameworks: ['mocha', 'chai', 'karma-typescript'],
      client: {
        mocha: {ui: 'tdd'},
      },
      files: [  
        {
          pattern: './src/**/*.spec.ts',
          type: 'module',
        },
      ],
      // See the karma-esm docs for all options
      esm: {
        nodeResolve: true,
      },
      preprocessors: {
        "**/*.ts": "karma-typescript" // *.tsx for React Jsx
      }
    })
  );
  return config;
};
