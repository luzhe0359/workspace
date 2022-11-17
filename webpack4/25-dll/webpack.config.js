const { resolve } = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin') // 简化了 HTML 文件的创建
const webpack = require('webpack');
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin');

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'js/[name].[contenthash:10].js',
        path: resolve(__dirname, 'build')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true
            }
        }),
        // 告诉webpack哪些库不参与打包，同时使用时的名称也得变~
        new webpack.DllReferencePlugin({
            manifest: resolve(__dirname, 'dll/manifest.json')
        }),
        // 将某个文件打包输出去，并在html中自动引入该资源
        new AddAssetHtmlWebpackPlugin({
            filepath: resolve(__dirname, 'dll/jquery.js'),
            publicPath: ''
        })
    ],
    mode: 'production'
}

