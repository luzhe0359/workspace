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

  apply(compiler) {
    // debugger;
    // console.log("compiler", compiler); // 使用node调试代码 npm run debug
    console.log("TestPlugin apply");

    // 从文档可知，从文档可知, compile hook 是 SyncHook, 即同步钩子, 只能用tap注册
    compiler.hooks.compile.tap("TestPlugin", () => {
      console.log("compiler.compile()");
    });

    // 从文档可知, make 是 AsyncParallelHook, 即异步并行钩子, 特点就是异步任务同时执行
    // 可以使用 tap、tapAsync、tapPromise 注册。
    // 如果使用tap注册的话，进行异步操作是不会等待异步操作执行完成的。
    //  - 也就是说，异步内容和webpack已经没有关系了，webpack不会等待该异步任务执行完毕，就继续往下执行
    compiler.hooks.make.tap("TestPlugin", (compilation) => {
      setTimeout(() => {
        console.log("compiler.make() 1");
      }, 800);
    });

    // 使用tapAsync、tapPromise注册，进行异步操作会等异步操作做完再继续往下执行
    compiler.hooks.make.tapAsync("TestPlugin", (compilation, callback) => {
      // compilation 使用
      compilation.hooks.seal.tap("TestPlugin", () => {
        console.log("compiler.seal()");
      });

      setTimeout(() => {
        console.log("compiler.make() 2");
        // 必须调用
        callback();
      }, 1000);
    });

    compiler.hooks.make.tapPromise("TestPlugin", (compilation) => {
      console.log("compiler.make() 3");
      // 必须返回promise
      return new Promise((resolve) => {
        resolve();
      });
    });

    // 从文档可知, emit 是 AsyncSeriesHook, 即异步串行钩子，特点就是异步任务顺序执行
    compiler.hooks.emit.tapAsync("TestPlugin", (compilation, callback) => {
      setTimeout(() => {
        console.log("compiler.emit() 1");
        callback();
      }, 3000);
    });

    compiler.hooks.emit.tapAsync("TestPlugin", (compilation, callback) => {
      setTimeout(() => {
        console.log("compiler.emit() 2");
        callback();
      }, 2000);
    });

    compiler.hooks.emit.tapAsync("TestPlugin", (compilation, callback) => {
      setTimeout(() => {
        console.log("compiler.emit() 3");
        callback();
      }, 1000);
    });
  }
}

module.exports = TestPlugin;
