<!--
 * @Description: 
 * @Author: zugelu
 * @Date: 2021-07-19 15:19:57
 * @LastEditors: zugelu
 * @LastEditTime: 2021-07-19 15:55:27
-->
<template>
  <h4>子组件</h4>
  <h5>msg: {{msg}}</h5>
  <button @click="update">修改</button>
</template>

<script lang='ts'>
import {
  defineComponent,
  ref,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from "vue";

export default defineComponent({
  name: "Child",
  beforeCreate() {
    console.log("2.x 中 beforeCreate ...");
  },
  created() {
    console.log("2.x 中 created ...");
  },
  beforeMount() {
    console.log("2.x 中 beforeMount ...");
  },
  mounted() {
    console.log("2.x 中 mounted ...");
  },
  beforeUpdate() {
    console.log("2.x 中 beforeUpdate ...");
  },
  updated() {
    console.log("2.x 中 updated ...");
  },
  //   The `beforeDestroy` lifecycle hook is deprecated. Use `beforeUnmount` instead
  beforeUnmount() {
    console.log("2.x 中 beforeDestory ...");
  },
  unmounted() {
    console.log("2.x 中 distoryed ...");
  },
  setup() {
    console.log("setup ...");

    const msg = ref("abc");
    const update = () => {
      msg.value += "===";
    };
    /* 
        新增的钩子函数
        组合式 API 还提供了以下调试钩子函数：
        onRenderTracked
        onRenderTriggered 
    */
    onBeforeMount(() => {
      console.log("3.x 中 onBeforeMount ...");
    });
    onMounted(() => {
      console.log("3.x 中 onMounted ...");
    });
    onBeforeUpdate(() => {
      console.log("3.x 中 onBeforeUpdate ...");
    });
    onUpdated(() => {
      console.log("3.x 中 onUpdated ...");
    });
    onBeforeUnmount(() => {
      console.log("3.x 中 onBeforeUnmount ...");
    });
    onUnmounted(() => {
      console.log("3.x 中 onUnmounted ...");
    });
    return {
      msg,
      update,
    };
  },
});
</script>