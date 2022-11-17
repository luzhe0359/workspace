/* 
    index.js:webpack 入口起点文件

    1.运行指令
    开发环境：webpack ./src/index.js -o ./build/built.js --mode=development
        webpack会以 ./src/index.js 为入口文件开始打包，打包后输出到 ./build/built.js
        整体打包环境为：开发
    生产环境：webpack ./src/index.js -o ./build/built.js --mode=production
        webpack会以 ./src/index.js 为入口文件开始打包，打包后输出到 ./build/built.js
        整体打包环境为：生产
    2.结论
     - webpack 能处理js/json，不能处理css/img等其他只有
     - 生产和开发环境，都可以将es6模块化编译成浏览器能识别的模块化
     - 生产比开发环境多一步，压缩js代码
*/


// import './index.css'

import data from './data.json'
console.log(data)

function add (x, y) {
    return x + y
}

console.log(add(1, 2))