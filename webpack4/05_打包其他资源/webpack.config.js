const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'built.js',
        path: resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            // 打包其他资源
            {
                exclude: /\.(css|js|html|less)$/,
                loader: 'file-loader',
                options: {
                    // ！！！file-loader es6解析的问题，关闭设置，使用commonjs解析
                    esModule: false,
                    name: '[hash:10].[ext]'
                },
                // ！！！webpack5 对旧版本的assets loader 的弃用解决
                type: 'javascript/auto'
            },

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    mode: 'development'
}