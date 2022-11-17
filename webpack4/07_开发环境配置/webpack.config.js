const { resolve, join } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'js/built.js',
        path: resolve(__dirname, 'dist'),
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.(jpg|png|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'imgs/[hash:8][ext]',
                },
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            // 打包其他资源
            {
                exclude: /\.(css|js|html|less|jpg|png|gif)$/,
                loader: 'file-loader',
                options: {
                    esModule: false,
                    name: '[hash:10].[ext]',
                    outputPath: 'media'
                },
                type: 'javascript/auto'
            },

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    mode: 'development',
    // 开启devServer，达到热更新
    devServer: {
        static: {
            directory: join(__dirname, 'dist'),
        },
        compress: true, // 开启gzip
        port: 3000,
        open: true
    },
}