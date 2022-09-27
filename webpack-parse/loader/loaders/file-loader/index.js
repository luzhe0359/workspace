const loaderUtils = require("loader-utils");

module.exports = function (content) {
  // 1. 根据文件内容生产带hash值文件
  let interpolatedName = loaderUtils.interpolateName(
    this,
    "[name]-[hash].[ext][query]",
    { content }
  );
  interpolatedName = `images/${interpolatedName}`;
  //   console.log(interpolatedName);
  // 2. 将文件输出到dist
  this.emitFile(interpolatedName, content);
  // 3. 返回： module.exports = "文件路径（文件名）"
  return `module.exports="${interpolatedName}"`;
};

// 需要处理图片、字体等文件，他们都是buffer数据
// 需要使用raw loader 才能处理
module.exports.raw = true;
