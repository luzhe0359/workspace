/**
 *  webpack运行编译过程
 *    1. webpack加载webpack.config.js中所有配置,此时就会new TestPlugin(),执行插件的constructor
 *    2. webpack创建compiler对象
 *    3. 遍历所有plugins中的插件,并调用插件的apply方法
 *    4. 执行剩下编译流程（触发各个hooks事件）
 *
 * */

class TestPlugin {
  constructor() {
    console.log("TestPlugin constructor");
  }

  apply() {
    console.log("TestPlugin apply");
  }
}

module.exports = TestPlugin;
