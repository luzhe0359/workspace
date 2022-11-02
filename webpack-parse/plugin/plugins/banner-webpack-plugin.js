class BannerWebpackPlugin {
  constructor(options = {}) {
    this.options = options;
  }

  apply(compiler) {
    compiler.hooks.emit.tap("BannerWebpackPlugin", (compliation) => {
      debugger;
      const extensions = ["css", "js"];
      // 1. 获取即将输出的资源文件，compliation.assets
      // 2. 过滤只保留js和css资源
      const assets = Object.keys(compliation.assets).filter((assetPath) => {
        // 将文件名分割 ['xxx','js'] ['xxx','css']
        const splitted = assetPath.split(".");
        // 获取最后一个文件扩展名
        const extension = splitted[splitted.length - 1];
        // 判断是否存在
        return extensions.includes(extension);
      });
      // console.log(assets); // [ 'js/main.js', 'js/18.js' ]
      // 3. 遍历并添加注释
      const prefix = `/*
* Author: ${this.options.author}
*/
`;
      assets.forEach((asset) => {
        // 获取原来的内容
        const source = compliation.assets[asset].source();
        // 拼接上注释
        const content = prefix + source;

        // 修改资源
        compliation.assets[asset] = {
          // 最终资源输出时，调用source方法（source方法的返回值就是资源的内容）
          source() {
            return content;
          },
          size() {
            return content.length;
          },
        };
      });
    });
  }
}

module.exports = BannerWebpackPlugin;
