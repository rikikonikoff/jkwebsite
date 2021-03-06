var path = require('path');

module.exports = function(config) {
  config.set({
    // Use the PhantomJS browser
    browsers: ['PhantomJS'],

    // Use the Jasmine testing framework
    frameworks: ['jasmine'],

    // Files that Karma will server to the browser
    files: [
      // Load fixtures
      'test/fixtures/*.json',
      // Use Babel polyfill to emulate a full ES6 environment in PhantomJS
      '../node_modules/babel-polyfill/dist/polyfill.js',
      // Entry file for Webpack
      'test/testHelper.js',
      // Use whatwg-fetch polyfill
      '../node_modules/whatwg-fetch/fetch.js'
    ],

    // Before serving test/testHelper.js to the browser
    preprocessors: {
      // Process json files with karma-json-fixtures-preprocessor
      'test/fixtures/**/*.json': ['json_fixtures'],
      'test/testHelper.js': [
        // Use karma-webpack to preprocess the file via webpack
        'webpack',
        // Use karma-sourcemap-loader to utilize sourcemaps generated by webpack
        'sourcemap'
      ]
    },

    // Webpack configuration used by karma-webpack
    webpack: {
      // Generate sourcemaps
      devtool: 'eval-source-map',
      // Enzyme-specific setup
      externals: {
        'cheerio': 'window',
        'react/addons': 'react',
        'react/lib/ExecutionEnvironment': 'react',
        'react/lib/ReactContext': 'react'
      },
      module: {
        rules: [
          // Use isparta-loader for ES6 code coverage in the src folder
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: [
              {
                loader: 'babel-loader'
              }
            ]
          }
        ]
      },

      // Relative path starts out at the src folder when importing modules
      resolve: {
        modules: [
          path.resolve("./src"),
          "node_modules"
        ]
      }
    },

    webpackMiddleware: {
      // Do not output webpack build information to the browser's console
      noInfo: true
    },

    // Test reporters that Karma should use
    reporters: [
      // Use karma-spec-reporter to report results to the browser's console
      'progress',
      'spec',
      // Use karma-coverage to report test coverage
      'coverage'
    ],

    jsonFixturesPreprocessor: {
      stripPrefix: 'test/fixtures/'
    },

    // Karma-spec-reporter configuration
    specReporter: {
      // Do not print error summary
      suppressErrorSummary: true,

      // Remove meaningless stack trace when tests do not pass
      maxLogLines: 2,

      // Do not print information about tests that are passing
      suppressPassed: true,
      suppressSkipped: true
    },

    // Karma-coverage configuration
    coverageReporter: {
      // Output coverage results to the coverage folder in the project's root
      dir: 'coverage',
      subdir: '.',
      // Output coverage results as html
      type: 'html'
    }
  });
};
