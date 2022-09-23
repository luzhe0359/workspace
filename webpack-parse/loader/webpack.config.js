const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: path.resolve(__dirname, './src/main.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js',
        clean: true
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
                use: ['./loaders/demo/test4.js', './loaders/demo/test5.js', './loaders/demo/test6.js',]  // pitch loader
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './public/index.html'),
        })
    ],
    mode: 'development'
}