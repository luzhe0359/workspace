<template>
  <h3>父组件</h3>
  <button @click="isShow = !isShow">显示/隐藏</button>
  <hr>
  {{isShow}}
  <Child v-if="isShow" />
</template>

<script lang='ts'>
import { defineComponent, ref, reactive } from "vue";
import Child from "./components/Child.vue";

export default defineComponent({
  name: "App",
  components: { Child },
  setup() {
    const isShow = ref(true);
    console.log(isShow);
    return {
      isShow,
    };
  },
});
</script>