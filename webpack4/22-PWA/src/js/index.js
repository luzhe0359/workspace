
console.log('index.js 被加载了~');

// 加载页面的同时会加载test
// import { mul } from './test'


// 懒加载~：当文件需要使用时才加载~
// 预加载 prefetch：会在使用之前，提前加载js文件
// 正常加载可以认为是并行加载（同一时间加载多个文件）
// 预加载 prefetch：等其他资源加载完毕，浏览器空闲了，再偷偷加载资源
document.querySelector('#btn').onclick = function () {
    import(/* webpackChunkName:'test', webpackPrefetch:true */ './test.js').then((mul) => {
        console.log(mul(2, 8));
    })
}



if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then(registration => {
            console.log('SW registered: ', registration);
        }).catch(registrationError => {
            console.log('SW registration failed: ', registrationError);
        });
    });
}