<!--
 * @Description: 
 * @Author: zugelu
 * @Date: 2021-07-21 15:18:43
 * @LastEditors: zugelu
 * @LastEditTime: 2021-07-21 15:18:59
-->
<template>
  <h3>Teleport(瞬移)</h3>
  <p>
    在 Vue2 中: 组件必须有一个根标签
    在 Vue3 中: 组件可以没有根标签, 内部会将多个标签包含在一个 Fragment 虚拟元素中
    好处: 减少标签层级, 减小内存占用
  </p>
</template>

<script lang='ts'>
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: "App",
});
</script>