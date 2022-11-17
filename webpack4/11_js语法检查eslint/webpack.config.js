const HtmlWebpackPlugin = require('html-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin');
const { resolve } = require('path')

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'js/built.js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                // loader: 'eslint-loader',
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new ESLintPlugin({
            fix: true
        })
    ],
    mode: 'development'
}