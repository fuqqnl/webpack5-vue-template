/**
 * @file webpack production
 * @author 
 */
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.conf');
const config = require('../config');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(baseConfig, {
    output: {
        path: config.site.assetsRoot,
        publicPath: config.site.assetsPublicPath,
        filename: '[name].[chunkhash:6].js'
    },
    optimization: {
        minimizer: [new TerserPlugin({
            extractComments: false,
        })],
    },
});