<template>
  <div>哈哈哈，我又来了！！</div>
  <h3>{{number}}</h3>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  setup() {
    const number = 10;
    console.log("hello world");

    return {
      number,
    };
  },
});
</script>
