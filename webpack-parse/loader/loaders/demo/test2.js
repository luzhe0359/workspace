// 异步loader

module.exports = function (content, map, meta) {
    const callback = this.async()
    console.log('test2 - 1', content);

    // 这里用定时器模拟异步
    setTimeout(() => {
        console.log('test2 - 2', content);
        console.log('test2 - 2', content);
        callback(null, content, map, meta)
    }, 1000);
}