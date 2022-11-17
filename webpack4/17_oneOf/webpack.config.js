const { resolve, join } = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin') // 简化了 HTML 文件的创建
const MiniCssExtractPlugin = require('mini-css-extract-plugin') // 本插件会将 CSS 提取到单独的文件中，为每个包含 CSS 的 JS 文件创建一个 CSS 文件，并且支持 CSS 和 SourceMaps 的按需加载。
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin') // 这个插件使用 cssnano 优化和压缩 CSS。
// const ESLintPlugin = require('eslint-webpack-plugin'); // 该插件使用 eslint 来查找和修复 JavaScript 代码中的问题。


const commonCssLoader = [
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
module.exports = {
    entry: ['./src/js/index.js', './src/index.html'],
    target: 'web',
    output: {
        filename: 'js/built.js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                // 先执行 eslint, 再执行babel
                // 在 package.json 中 eslintConfig --> airbnb
                test: /\.js$/,
                exclude: /node_modules/,
                // 优先执行
                enforce: 'pre',
                loader: 'eslint-loader',
                options: {
                    fix: true
                }
            },
            {
                oneOf: [
                    {
                        test: /\.css$/,
                        exclude: /node_modules/,
                        use: [
                            ...commonCssLoader
                        ]
                    },
                    {
                        test: /\.less$/,
                        exclude: /node_modules/,
                        use: [
                            ...commonCssLoader,
                            'less-loader',
                        ]
                    },
                    {
                        // 在 package.json 中 eslintConfig --> airbnb
                        test: /\.js$/,
                        exclude: /node_modules/,
                        use: {
                            loader: 'babel-loader',
                            options: {
                                // 预设：指示babel做怎么样的兼容性处理
                                presets: [
                                    [
                                        '@babel/preset-env',
                                        {
                                            // 按需加载
                                            useBuiltIns: 'usage',
                                            // 指定core-js版本
                                            corejs: {
                                                version: 3
                                            },
                                            // 指定兼容性做到哪个版本浏览器
                                            targets: {
                                                chrome: '60',
                                                firefox: '60',
                                                ie: '9',
                                                safari: '10',
                                                edge: '17'
                                            }
                                        }
                                    ]
                                ]
                            }
                        }
                    },
                    {
                        test: /\.(jpg|png|gif)$/,
                        type: "asset",
                        //解析
                        parser: {
                            // 图片大小小于 8kb，就会被 base64 处理
                            // 优点: 减少请求数量（减轻服务器压力）
                            // 缺点：图片体积会更大（文件请求速度更慢）
                            //转base64的条件
                            dataUrlCondition: {
                                maxSize: 8 * 1024, // 8kb
                            }
                        },
                        generator: {
                            // 给图片进行重命名
                            // [hash:10]取图片的 hash 的前 10 位
                            // [ext]取文件原来扩展名
                            //与output.assetModuleFilename是相同的,这个写法引入的时候也会添加好这个路径
                            filename: '[hash:10][ext]',
                        },
                    },
                    {
                        test: /\.html$/,
                        // 处理 html 文件的 img 图片（负责引入 img，从而能被 url-loader 进行处理）
                        loader: 'html-loader'
                    },
                    {
                        exclude: /\.(js|css|less|html|jpg|png|gif)/,
                        loader: 'file-loader',
                        options: {
                            outputPath: 'media'
                        }
                    }
                ]
            }
        ]
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
        new MiniCssExtractPlugin({
            // 输出的每个 CSS 文件的名称
            filename: 'css/built.css'
        }),
        // new ESLintPlugin({
        //     fix: true
        // })
    ],
    optimization: {
        minimizer: [
            // 在 webpack@5 中，你可以使用 `...` 语法来扩展现有的 minimizer（即 `terser-webpack-plugin`），将下一行取消注释
            // 这个插件使用 cssnano 优化和压缩 CSS。
            new CssMinimizerPlugin(),
        ],
    },
    mode: 'development',
    devServer: {
        static: {
            directory: join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
        open: true,
        // 开启HMR
        hot: true
    },
}