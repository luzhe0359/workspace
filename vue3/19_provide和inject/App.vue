<!--
 * @Description: 
 * @Author: zugelu
 * @Date: 2021-07-21 09:47:23
 * @LastEditors: zugelu
 * @LastEditTime: 2021-07-21 09:55:15
-->
<template>
  <h3>provide 与 inject</h3>
  <h4>当前颜色: {{color}}</h4>
  <hr>
  <button @click="color = 'red'">按钮</button>
  <button @click="color = 'yellow'">按钮</button>
  <button @click="color = 'green'">按钮</button>

  <hr>
  <Son />
</template>

<script lang='ts'>
import { defineComponent, ref, reactive, provide } from "vue";
import Son from "./components/Son.vue";

export default defineComponent({
  name: "App",
  components: {
    Son,
  },
  setup() {
    const color = ref("pink");
    provide("color", color);
    return {
      color,
    };
  },
});
</script>