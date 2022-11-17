const { resolve } = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin') // 简化了 HTML 文件的创建

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
    ],
    externals: {
        jquery: 'jQuery',
    },
    mode: 'production'
}

