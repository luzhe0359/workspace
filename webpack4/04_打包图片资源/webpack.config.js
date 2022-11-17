const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'built.js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                // 使用多个loader用use
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            // webpack 4
            // {
            //     test: /\.(jpg|png|gif)$/,
            //     // 使用单个直接用loader 
            //     loader: 'url-loader' // url-loader 依赖于file-loader
            // }
            // webpack 5
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
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    mode: 'development'
}