module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: ["plugin:vue/vue3-essential", "eslint:recommended"],
    parserOptions: {
        parser: "@babel/eslint-parser",
    },
    rules: {
        "vue/no-multiple-template-root": "off" // vue3无根标签报错
    }
};
