const babel = require("@babel/core");
const schema = require("./schema.json");

module.exports = function (content) {
  // 使用异步loader
  const callback = this.async();
  const options = this.getOptions(schema);

  // 使用babel对代码进行编译
  babel.transform(content, options, function (err, result) {
    if (err) callback(err);
    else callback(null, result.code);
  });
};
