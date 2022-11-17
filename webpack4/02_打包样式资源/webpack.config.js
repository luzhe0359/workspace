/*
  webpack.config.js  webpack的配置文件
    作用: 指示 webpack 干哪些活（当你运行 webpack 指令时，会加载里面的配置）

    所有构建工具都是基于nodejs平台运行的~模块化默认采用commonjs。
*/

const { resolve } = require('path')

module.exports = {
    // webpack 配置
    // 入口
    entry: './src/index.js',
    // 输出
    output: {
        // 输出文件名
        filename: 'built.js',
        // 输出路径（__dirname 代表当前文件的目录绝对路径）
        path: resolve(__dirname, 'build')
    },
    // loader 配置
    module: {
        // 详细loader 配置
        rules: [
            // 不同文件必须配置不同的loader配置
            {
                // 匹配规则：以.css结尾
                test: /\.css$/,
                // 使用哪些loader 进行处理
                use: [
                    // use 中执行顺序：从右到左/从下到上，依次执行
                    'style-loader', // 创建style标签，将js中的样式资源插入进去，并添加到head中生效
                    'css-loader' // 将css文件转为 commonjs 模块加载到js中，里面的内容是样式字符串
                ]
            },
            {
                // 匹配规则：以.css结尾
                test: /\.less$/,
                // 使用哪些loader 进行处理
                use: [
                    // use 中执行顺序：从右到左/从下到上，依次执行
                    'style-loader', // 创建style标签，将js中的样式资源插入进去，并添加到head中生效
                    'css-loader', // 将css文件转为 commonjs 模块加载到js中，里面的内容是样式字符串
                    'less-loader' // 将less文件编译成css文件（需要下载less和less-loader）
                ]
            }
        ]
    },
    // plugins 配置
    plugins: [
        // 详细plugins 配置
    ],
    // 模式
    mode: 'development', // 开发
    // mode: 'production' // 生产 
}