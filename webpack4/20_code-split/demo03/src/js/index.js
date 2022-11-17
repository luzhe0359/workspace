
console.log('test');


// 设置名字、单独打包test.js
import(/* webpackChunkName: 'test' */'./test').then(({ ful, count }) => {
    console.log(ful(3, 6));
}).catch(() => {
    console.log('加载失败~');
})