const { resolve } = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin') // 简化了 HTML 文件的创建

module.exports = {
    // 单入口
    // entry: './src/js/index.js',
    entry: {
        // 多入口：有一个入口，最终输出就有一个bundle
        index: './src/js/index.js',
        test: './src/js/test.js'
    },
    output: {
        // [name]：取文件名
        filename: 'js/[name].[contenthash:10].js',
        path: resolve(__dirname, 'build')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            // true如果mode是'production'，否则false
            minify: {
                //移除空格
                collapseWhitespace: true,
                //移除注释
                removeComments: true
            }
        }),
    ],
    mode: 'production'
}

