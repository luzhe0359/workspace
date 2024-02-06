<template>
  <h3>Fragment(片断)</h3>
  <Child />
</template>

<script lang='ts'>
import { defineComponent, reactive } from "vue";
import Child from "./components/Child.vue";
export default defineComponent({
  name: "App",
  components: { Child },
});
</script>