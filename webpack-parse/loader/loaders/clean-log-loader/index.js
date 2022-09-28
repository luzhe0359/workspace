module.exports = function (content) {
  // 清除代码中 console.log(xxx)
  return content.replace(/console\.log\(.*\);?/g, "");
};
