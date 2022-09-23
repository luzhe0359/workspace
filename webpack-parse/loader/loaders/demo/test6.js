// pitch 方法

module.exports = function (content) {
    console.log('loader 3');
    return content;
};
module.exports.pitch = function (remainingRequest, precedingRequest, data) {
    console.log("pitch 3");
};