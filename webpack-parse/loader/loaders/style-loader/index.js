module.exports = function (content) {
  /*
    1. 直接使用style-loader，只能处理样式
      不能处理样式中引入的其他资源，例 background: url(../images/01.jpg)

      use: ["./loaders/style-loader"],

    2. 借助css-loader解决样式中引入的其他资源的问题

      use: ["./loaders/style-loader", "css-loader"],

      问题是css-loader暴露了一段js代码，style-loader需要执行js代码，得到返回值，再动态创建style标签，插入到页面上
      不好操作

    3. style-loader使用pitch loader用法
  */
  // const style = `
  //       const styleEl = document.createElement('style');
  //       styleEl.innerHTML = ${JSON.stringify(content)}
  //       document.head.appendChild(styleEl);
  //   `;
  // return style;
};

module.exports.pitch = function (remainingRequest) {
  // remainingRequest 剩下还需要处理的loader
  // console.log(remainingRequest); // D:\workspace\webpack5\workspace\webpack-parse\loader\node_modules\css-loader\dist\cjs.js!D:\workspace\webpack5\workspace\webpack-parse\loader\src\css\index.css

  // 1. 将 remainingRequest 中绝对路径改为相对路径（原因：只能用相对路径操作）
  // 这里是inline loader用法，代表后面还有一个css-loader等待处理
  const relativePath = remainingRequest
    .split("!")
    .map((absolutePath) => {
      // 返回相对路径 使用webpack 自带的路径处理方法
      return this.utils.contextify(this.context, absolutePath);
    })
    .join("!");

  // console.log(relativePath); // ../../node_modules/css-loader/dist/cjs.js!./index.css

  // 2. 引入css-loader 处理后续的资源
  // 3. 创建style标签，将处理后的内容插入到页面中
  const script = `
  import style from "!!${relativePath}";
        const styleEl = document.createElement('style');
        styleEl.innerHTML = style;
        document.head.appendChild(styleEl);
    `;

  // 中止后面loader执行
  return script;

  /*  
    相关注释  

    !!${relativeRequest} 
      relativeRequest：../../node_modules/css-loader/dist/cjs.js!./index.css
      relativeRequest是inline loader用法，代表要处理的index.css资源, 使用css-loader处理
      !!代表禁用所有配置的loader，只使用inline loader。（也就是外面我们style-loader和css-loader）,它们被禁用了，只使用我们指定的inline loader，也就是css-loader

    import style from "!!${relativeRequest}"
      引入css-loader处理后的css文件
      为什么需要css-loader处理css文件，不是我们直接读取css文件使用呢？
      因为可能存在@import导入css语法，这些语法就要通过css-loader解析才能变成一个css文件，否则我们引入的css资源会缺少
  */
};
