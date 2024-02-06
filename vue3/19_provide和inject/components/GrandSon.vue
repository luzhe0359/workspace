<!--
 * @Description: 
 * @Author: zugelu
 * @Date: 2021-07-21 09:52:07
 * @LastEditors: zugelu
 * @LastEditTime: 2021-07-21 09:56:06
-->
<template>
  <h3 :style="{color}">GrandSon:孙组件</h3>

</template>

<script lang='ts'>
import { defineComponent, reactive, inject } from "vue";

export default defineComponent({
  name: "GrandSon",
  setup() {
    const color = inject("color");
    return {
      color,
    };
  },
});
</script>