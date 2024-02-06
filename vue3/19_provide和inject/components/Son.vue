<!--
 * @Description: 
 * @Author: zugelu
 * @Date: 2021-07-21 09:50:54
 * @LastEditors: zugelu
 * @LastEditTime: 2021-07-21 09:54:51
-->
<template>
  <h3>Son子组件</h3>
  <hr>
  <GrandSon />
</template>

<script lang='ts'>
import { defineComponent, reactive } from "vue";
import GrandSon from "./GrandSon.vue";
export default defineComponent({
  name: "Son",
  components: { GrandSon },
});
</script>