class CleanWebpackPlugin {
  apply(compiler) {
    // 1. 注册钩子，在打包输出之前 emit
    compiler.hooks.emit.tap("CleanWebpackPlugin", (compilation) => {
      // 2. 获取打包输出的目录
      const outputPath = compiler.options.output.path; // D:\workspace\webpack5\workspace\webpack-parse\plugin\dist
      const fs = compiler.outputFileSystem;
      // 判断dist文件夹是否存在
      if (!fs.existsSync(outputPath)) return;
      // 3. 通过fs删除打包输出的目录下所有文件
      this.removeFiles(fs, outputPath);
    });
  }
  removeFiles(fs, filepath) {
    // 目的：删除打包输出目录下的所有资源
    // 前提：需要先将目录下的资源删除，才能删除这个目录
    // 1. 读取当前目录下所有资源
    const files = fs.readdirSync(filepath);
    // console.log(files); // [ 'test', 'index.html', 'js' ]
    // 2. 遍历逐级删除
    files.forEach((file) => {
      // 2.1 遍历所有文件，判断是文件夹还是文件
      const path = `${filepath}/${file}`;
      const fileStat = fs.statSync(path);
      //   console.log(fileStat);

      if (fileStat.isDirectory()) {
        // 2.2 是文件夹，递归删除内部的文件
        this.removeFiles(fs, path);
        // 2.3. 再次获取当前文件夹的内容，如果内容为空[]则删除文件夹
        if (!fs.readdirSync(path).length) fs.rmdirSync(path);
      } else {
        // 2.4 是文件，直接删除
        fs.unlinkSync(path);
      }
    });
  }
}

module.exports = CleanWebpackPlugin;
