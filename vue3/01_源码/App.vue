<template>
  <!-- 对比 vue2 -->
  <!-- vue2 html中必须要有根标签 -->
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
</template>

<script lang="ts">
// 可以使用ts代码

// defineComponent 函数，目的是定义一个组件，内部可以传入一个配置对象
import { defineComponent } from "vue";
// 引入子组件
import HelloWorld from "./components/HelloWorld.vue";

// 暴露出去一个定义好的组件
export default defineComponent({
  // 当前组件名
  name: "App",
  // 注册组件
  components: {
    // 注册子组件
    HelloWorld,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
