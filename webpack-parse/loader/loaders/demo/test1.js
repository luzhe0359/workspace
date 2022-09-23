// 同步loader

// 方式一
// module.exports = function(content) {
//     return content
// }

// 方式二
module.exports = function (content, map, meta) {
    /** 
     * @params err 是否有错误 
     * @params content 处理后的内容
     * @params source-map 继续传递source-map
     * @params meta 给下一个loader传递参数
    */
    console.log('test1 - 1');
    this.callback(null, content, map, meta)

    // 同步loader 不能使用异步操作，下一个loader中content为undefined导致报错
    // setTimeout(() => {
    //     console.log('test1 - 2');
    //     this.callback(null, content, map, meta)
    // }, 1000);
}