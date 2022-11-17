const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); // 简化了 HTML 文件的创建

module.exports = {
  // 单入口
  entry: "./src/js/index.js",
  output: {
    // [name]：取文件名
    filename: "js/[name].[contenthash:10].js",
    path: resolve(__dirname, "build"),
  },
  module: {
    rules: [
      {
        // 在 package.json 中 eslintConfig --> airbnb
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          // 每个 worker 都是一个独立的 node.js 进程，其开销大约为 600ms 左右。同时会限制跨进程的数据交换。
          // 请仅在耗时的操作中使用此 loader！
          // "thread-loader",
          {
            loader: "thread-loader",
            // 有同样配置的 loader 会共享一个 worker 池
            options: {
              // 产生的 worker 的数量，默认是 (cpu 核心数 - 1)，或者，
              // 在 require('os').cpus() 是 undefined 时回退至 1
              workers: 2,
            },
          },
          {
            loader: "babel-loader",
            options: {
              // 预设：指示babel做怎么样的兼容性处理
              presets: [
                [
                  "@babel/preset-env",
                  {
                    // 按需加载
                    useBuiltIns: "usage",
                    // 指定core-js版本
                    corejs: {
                      version: 3,
                    },
                    // 指定兼容性做到哪个版本浏览器
                    targets: {
                      chrome: "60",
                      firefox: "60",
                      ie: "9",
                      safari: "10",
                      edge: "17",
                    },
                  },
                ],
              ],
            },
          },
        ],
      },
    ],
  },
  // 1. 可以将node_modules中代码单独打包一个chunk最终输出
  // 2. 自动分析多入口chunk中，有没有公共的文件。如果有会打包成一个单独的chunk
  optimization: {
    // 这表明将选择哪些 chunk 进行优化。 当提供一个字符串，有效值为 all，async 和 initial。
    // 设置为 all 可能特别强大，因为这意味着 chunk 可以在异步和非异步 chunk 之间共享。
    splitChunks: {
      chunks: "all",
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      // true如果mode是'production'，否则false
      minify: {
        // 移除空格
        collapseWhitespace: true,
        // 移除注释
        removeComments: true,
      },
    }),
  ],
  mode: "production",
};
