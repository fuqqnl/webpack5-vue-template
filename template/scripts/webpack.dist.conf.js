/**
 * @file webpack production
 * @author 
 */
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.conf');
const config = require('../config');
const TerserPlugin = require('terser-webpack-plugin');
const utils = require('./utils');

module.exports = merge(baseConfig, {
    output: {
        path: config.site.assetsRoot,
        publicPath: config.site.assetsPublicPath,
        filename: '[name].[chunkhash:6].js'
    },
    module: {
        rules: utils.styleLoaders({
            sourceMap: false,
            extract: true,
            usePostCSS: true
        })
    },
    optimization: {
        minimizer: [new TerserPlugin({
            extractComments: false,
        })],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: assetsPath('css/[name].css'),
            chunkFilename: assetsPath('css/common.css')
        }),
    ]
});