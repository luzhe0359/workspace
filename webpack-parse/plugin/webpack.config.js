const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TestPlugin = require("./plugins/test-plugin");
const BannerWebpackPlugin = require("./plugins/banner-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "./src/main.js"),
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "js/[name].js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "./public/index.html"),
    }),
    // new TestPlugin(), // 成功输出打印信息
    new BannerWebpackPlugin({
      author: "小路",
    }),
  ],
  mode: "production",
};
