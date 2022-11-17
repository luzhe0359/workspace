const HtmlWebpackPlugin = require('html-webpack-plugin')
const { resolve } = require('path')

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'js/built.js',
        path: resolve(__dirname, 'build')
    },
    module: {

    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            // true如果mode是'production'，否则false
            minify: {

            }
        })
    ],
    mode: 'production'
}