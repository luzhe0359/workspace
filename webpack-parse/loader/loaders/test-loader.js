
/*
    loader本质是一个函数
    当webpack解析资源时，会调用响应的loader去处理
    loader接收到文件内容作为参数，处理后将内容返回
     - context 文件内容
     - map SourceMap
     - meta 别的loader传递的数据
*/

module.exports = function (context, map, meta) {
    console.log(context);
    return context
}