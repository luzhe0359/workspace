// import '@babel/polyfill'
import '../css/index.css';
import '../css/index.less';

const add = (a, b) => a + b;
console.log(add(2, 6));
// 什么都不配置，无法解析const、箭头函数等

const promise = new Promise((resolve) => {
  setTimeout(() => {
    console.log('定时器执行完了~');
    resolve();
  }, 1000);
});

console.log(promise);
