const schema = require("./schema.json"); // additionalProperties 约束不能再添加属性了

module.exports = function (content) {
  // 添加loader的作者
  // 获取loader的options，同时对options内容进行校验
  // schema是options的校验规则（符合 JSON schema 规则）
  const options = this.getOptions(schema); //schema对options进行约束

  const prefix = `
    /*
     * Author: ${options.author}
     */ 
    `;
  return prefix + content;
};
