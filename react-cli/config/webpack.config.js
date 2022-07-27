const path = require('path')
const ESLintWebpackPlugin = require("eslint-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

// 获取环境变量
const isProd = process.env.NODE_ENV === "production";

const getStyleLoaders = (pre) => {
    return [
        isProd ? MiniCssExtractPlugin.loader : 'style-loader',
        "css-loader",
        {
            loader: "postcss-loader",
            options: {
                postcssOptions: {
                    plugins: [
                        "postcss-preset-env", // 能解决大多数样式兼容性问题
                    ],
                },
            },
        },
        // 判断是否为less-loader，为antd自定义主题
        pre &&
        {
            loader: pre,
            options:
                pre === 'less-loader'
                    ? {
                        // antd自定义主题
                        lessOptions: {
                            modifyVars: {
                                'primary-color': '#fa541c',
                                'link-color': '#ffd8bf',
                                'border-radius-base': '2px',
                            },
                            javascriptEnabled: true,
                        },
                    } : {},
        }
    ].filter(Boolean);
};

module.exports = {
    entry: './src/main.js',
    output: {
        path: isProd ? path.resolve(__dirname, '../dist') : undefined,
        filename: isProd ? 'static/js/[name].[contenthash:10].js' : 'static/js/[name].js',
        chunkFilename: isProd ? 'static/js/[name].[contenthash:10].chunk.js' : 'static/js/[name].chunk.js',
        assetModuleFilename: 'static/js/[hash:10][ext][query]',
        clean: true
    },
    module: {
        rules: [
            {
                // 用来匹配 .css 结尾的文件
                test: /\.css$/,
                // use 数组里面 Loader 执行顺序是从右到左
                use: getStyleLoaders(),
            },
            {
                test: /\.less$/,
                use: getStyleLoaders("less-loader"),
            },
            {
                test: /\.s[ac]ss$/,
                use: getStyleLoaders("sass-loader"),
            },
            {
                test: /\.styl$/,
                use: getStyleLoaders("stylus-loader"),
            },
            {
                test: /\.(png|jpe?g|gif|webp|svg)$/,
                type: 'asset', // 符合规则使用base64编码，否则，将资源文件输出到指定目录
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024, // 小于10kb的图片会被base64处理
                    }
                }
            },
            {
                test: /\.(ttf|woff2?)$/,
                type: 'asset/resource', // 将资源文件输出到指定目录
            },
            {
                test: /\.jsx?$/,
                include: path.resolve(__dirname, '../src'),
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true, // 开启babel缓存
                    cacheCompression: false, // 关闭缓存压缩(不会使用 Gzip 压缩每个 Babel transform)
                    plugins: [
                        !isProd && "react-refresh/babel",
                    ].filter(Boolean)
                }
            }
        ]
    },
    plugins: [
        new ESLintWebpackPlugin({
            context: path.resolve(__dirname, "../src"),
            exclude: "node_modules",
            cache: true, // 开启eslint缓存
            cacheLocation: path.resolve(
                __dirname,
                "../node_modules/.cache/.eslint-loader"
            ), // 缓存的路径
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../public/index.html"),
        }),
        // 将CSS提取到单独的文件中，为每个包含CSS的JS文件创建一个CSS文件
        isProd && new MiniCssExtractPlugin({
            filename: "static/css/[name].[contenthash:10].css",
            chunkFilename: "static/css/[name].[contenthash:10].chunk.css",
        }),
        isProd && new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, '../public'),
                    to: path.resolve(__dirname, '../dist'),
                    globOptions: {
                        ignore: ["**/index.html"],
                    },
                },
            ],
        }),
        !isProd && new ReactRefreshWebpackPlugin()
    ].filter(Boolean),
    optimization: {
        // 是否开启压缩
        minimize: isProd,
        // 压缩操作
        minimizer: [
            new CssMinimizerPlugin(), // 压缩css
            new TerserWebpackPlugin(), // 压缩js
            new ImageMinimizerPlugin({ // 压缩图片
                minimizer: {
                    implementation: ImageMinimizerPlugin.imageminGenerate,
                    options: {
                        plugins: [
                            ["gifsicle", { interlaced: true }],
                            ["jpegtran", { progressive: true }],
                            ["optipng", { optimizationLevel: 5 }],
                            [
                                "svgo",
                                {
                                    plugins: [
                                        "preset-default",
                                        "prefixIds",
                                        {
                                            name: "sortAttrs",
                                            params: {
                                                xmlnsOrder: "alphabetical",
                                            },
                                        },
                                    ],
                                },
                            ],
                        ],
                    },
                },
            }),
        ],
        // 代码分割配置
        splitChunks: {
            chunks: "all", // 对所有模块都进行分割
            // 将比较大的包单独打包
            cacheGroups: {
                // layouts通常是admin项目的主体布局组件，所有路由组件都要使用的
                // 可以单独打包，从而复用
                // layouts: {
                //     name: "layouts",
                //     test: path.resolve(__dirname, "../src/layouts"),
                //     priority: 40,
                // },
                // 如果项目中使用antd，此时将所有node_modules打包在一起，那么打包输出文件会比较大。
                // 所以我们将node_modules中比较大的模块单独打包，从而并行加载速度更好
                antd: {
                    name: "chunk-antd",
                    test: /[\\/]node_modules[\\/]antd(.*)/,
                    priority: 30,
                },
                // 将react相关的库单独打包，减少node_modules的chunk体积。
                react: {
                    name: "chunk-react",
                    test: /[\\/]node_modules[\\/]react(.*)?[\\/]/,
                    chunks: "initial",
                    priority: 20,
                },
                // 将其他剩余的包打包在一起
                libs: {
                    name: "chunk-libs",
                    test: /[\\/]node_modules[\\/]/,
                    priority: 10, // 权重最低，优先考虑前面内容
                    // chunks: "initial",
                },
            },
            // 其他内容用默认配置即可
        },
        // 提取runtime文件(防止代码分割后缓存失效)
        runtimeChunk: {
            name: (entrypoint) => `runtime~${entrypoint.name}`,
        }
    },
    resolve: {
        extensions: ['.jsx', '.js', '.json'], // 尝试按顺序解析这些后缀名
    },
    devServer: {
        static: {
            directory: path.join(__dirname, '../public'),
        },
        host: 'localhost',
        port: 8081,
        compress: true,
        open: true,
        hot: true,
        historyApiFallback: true, // 解决前端路由刷新404问题
    },
    performance: false, // 关闭性能分析，提示打包速度
    devtool: isProd ? "source-map" : 'cheap-module-source-map',
    mode: isProd ? 'production' : 'development'
}