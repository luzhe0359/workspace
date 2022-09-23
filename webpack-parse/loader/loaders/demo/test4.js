// pitch 方法
// loader1 loader2 loader3
/** 
    执行顺序
    pitch 1
    pitch 2
    pitch 3
    loader 3
    loader 2
    loader 1
*/
// 当pitch2 return 则实行熔断机制，即不继续执行后续的pitch和loader，直接返回去执行loader1
/** 
    执行顺序
    pitch 1
    pitch 2
    loader 1
*/

module.exports = function (content) {
    console.log('loader 1');
    return content;
};
module.exports.pitch = function (remainingRequest, precedingRequest, data) {
    console.log("pitch 1");
};