import("./css/index.css");

console.log("hello main ~");

console.log("clean-log-loader1");
console.log("clean-log-loader2");
console.log("clean-log-loader3");

const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
};
