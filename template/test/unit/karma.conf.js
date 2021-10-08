/**
 * @file karma单测配置
 * @author fuqiangqiang
 */
const webpackConfig = require('../../scripts/webpack.test.conf');

module.exports = function karmaConfig(config) {
    config.set({
        browsers: ['ChromeHeadless'],
        frameworks: ['mocha', 'webpack'],
        reporters: ['spec', 'coverage'],
        files: ['./index.js'],
        preprocessors: {
            './index.js': ['webpack', 'sourcemap']
        },
        webpack: webpackConfig,
        webpackMiddleware: {
            noInfo: true
        },
        coverageReporter: {
            dir: './coverage',
            reporters: [
                { type: 'lcov', subdir: '.' },
                { type: 'text-summary' }
            ]
        }
    });
};
