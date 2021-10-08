/**
 * @file 用于karma+mocha进行单元测试的配置
 */

const utils = require('./utils');
const { merge } = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');

const webpackConfig = merge(baseWebpackConfig, {
    module: {
        rules: utils.styleLoaders()
    },
    devtool: 'source-map',
    resolveLoader: {
        alias: {
            // necessary to to make lang="scss" work in test when using vue-loader's ?inject option
            // see discussion at https://github.com/vuejs/vue-loader/issues/724
            'scss-loader': 'sass-loader'
        }
    },
})

delete webpackConfig.entry;

module.exports = webpackConfig;
