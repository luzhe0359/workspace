const { resolve } = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin') // 简化了 HTML 文件的创建
const WorkboxPlugin = require('workbox-webpack-plugin');

/*
  PWA: 渐进式网络开发应用程序(离线可访问)
    workbox --> workbox-webpack-plugin
*/

module.exports = {
    // 单入口
    entry: './src/js/index.js',
    output: {
        // [name]：取文件名
        filename: 'js/[name].[contenthash:10].js',
        path: resolve(__dirname, 'build')
    },
    // 1. 可以将node_modules中代码单独打包一个chunk最终输出
    // 2. 自动分析多入口chunk中，有没有公共的文件。如果有会打包成一个单独的chunk
    optimization: {
        // 这表明将选择哪些 chunk 进行优化。 当提供一个字符串，有效值为 all，async 和 initial。
        // 设置为 all 可能特别强大，因为这意味着 chunk 可以在异步和非异步 chunk 之间共享。
        splitChunks: {
            chunks: 'all',
        },
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
        new WorkboxPlugin.GenerateSW({
            /*
                1. 帮助serviceworker快速启动
                2. 删除旧的 serviceworker

                生成一个 serviceworker 配置文件~
            */
            clientsClaim: true,
            skipWaiting: true,
        }),
    ],
    mode: 'production'
}

