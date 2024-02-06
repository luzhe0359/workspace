<template>
  <div>哈哈哈，我又来了！！</div>
  <h3>{{count}}</h3>
  <button @click="updateCount">自增</button>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "App",

  // vue2
  // data() {
  //   return {
  //     count: 0,
  //   };
  // },
  // methods: {
  //   updateCount() {
  //     this.count++;
  //   },
  // },

  // vue3
  setup() {
    // setup
    // 新的 option, 所有的组合 API 函数都在此使用, 只在初始化时执行一次
    // 函数如果返回对象, 对象中的属性或方法, 模板中可以直接使用

    let count = ref(0);
    // ref
    // 作用: 定义一个数据的响应式
    // 语法: const xxx = ref(initValue):
    // 创建一个包含响应式数据的引用(reference)对象
    // js 中操作数据: xxx.value
    // 模板中操作数据: 不需要.value
    // 一般用来定义一个基本类型的响应式数据

    function updateCount() {
      console.log(count);
      count.value++;
    }

    return {
      count,
      updateCount,
    };
  },
});
</script>