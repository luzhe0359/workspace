<!--
 * @Description: 
 * @Author: zugelu
 * @Date: 2021-07-21 15:19:49
 * @LastEditors: zugelu
 * @LastEditTime: 2021-07-21 15:24:04
-->
<template>
  <button @click="dialog = true">显示</button>
  <hr>

  <teleport to="body">
    <div v-if="dialog">
      <div>
        <p>我是对话框</p>
        <p>Teleport 提供了一种干净的方法, 让组件的 html 在父组件界面外的特定标签(很可能是 body)下插入显示</p>
        <button @click="dialog= false">隐藏</button>
      </div>
    </div>
  </teleport>
</template>

<script lang='ts'>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Child",
  setup() {
    const dialog = ref(false);
    return {
      dialog,
    };
  },
});
</script>