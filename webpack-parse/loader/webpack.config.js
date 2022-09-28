const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "./src/main.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].js",
    clean: true,
  },
  module: {
    rules: [
      // {
      //     test: /\.js$/,
      //     loader: './loaders/test-loader.js'
      // },
      {
        test: /\.js$/,
        // use: ['./loaders/demo/test1.js', './loaders/demo/test2.js',] // 先执行异步，异步执行完再执行同步
        // use: ['./loaders/demo/test2.js', './loaders/demo/test1.js',] // 不能再同步loader中使用异步
        // loader: './loaders/demo/test3.js', // raw loader
        // use: ['./loaders/demo/test4.js', './loaders/demo/test5.js', './loaders/demo/test6.js',]  // pitch loader
        loader: "./loaders/clean-log-loader", // clean-log-loader 清除console.log
      },
      {
        test: /\.js$/,
        loader: "./loaders/banner-loader/index.js", // banner-loader 添加loader的作者
        options: {
          author: "老路233",
          //   author: true, // author should be a string.
          //   age: 22, // additionalProperties 规定不能再额外追加属性
        },
      },
      {
        test: /\.js$/,
        loader: "./loaders/babel-loader/index.js", // babel-loader 解析es6语法
        options: {
          presets: ["@babel/preset-env"], // 智能预设
        },
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        loader: "./loaders/file-loader", // file-loader 解析文件
        type: "javascript/auto", // 阻止wabpack默认处理图片资源、只使用file-loader处理
      },
      {
        test: /\.css$/,
        // use: ["style-loader", "css-loader"],
        // use: ["./loaders/style-loader"], // 使用自定义 style-loader
        use: ["./loaders/style-loader", "css-loader"], // 使用自定义 style-loader
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./public/index.html"),
    }),
  ],
  mode: "development",
};
