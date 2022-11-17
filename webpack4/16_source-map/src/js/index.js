// import '@babel/polyfill'
import print from './print'
import '../css/index.css';
import '../css/index.less';


console.log('index.js 文件被加载~~~');
// 什么都不配置，无法解析const、箭头函数等

print()

if (module.hot) {
    // 一旦module.hot 为true,说明开启了HMR功能  --> 让HMR代码生效
    module.hot.accept('./print.js', function () {
        // 监听 print.js 文件变化、一旦发生改变、其他文件默认不会重新打包构建。
        // 会执行后面的回调函数
        print()
    })
}