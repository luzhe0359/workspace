const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

// process.env.NODE_ENV = 'development' // 改为测试环境

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'js/built.js',
        path: resolve(__dirname, 'build'),
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    // 'style-loader',
                    // 这个 loader 取代 style-loader。作用：提取 js 中的 css 成单独文件
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                // ident: 'postcss',
                                plugins: [
                                    [
                                        'postcss-preset-env',
                                        {
                                            // 其他选项
                                        }
                                    ]
                                ]
                            }

                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/built.css'
        }),
        new CssMinimizerPlugin()
    ],
    mode: 'development'
}