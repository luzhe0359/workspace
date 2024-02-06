<template>
  <h3>ref获取元素</h3>
  <!-- <input type="text" ref="inputRef"> -->
  <el-autocomplete type="text" ref="inputRef" />
</template>

<script lang='ts'>
import { defineComponent, ref, reactive, onMounted } from "vue";

export default defineComponent({
  name: "App",
  setup() {
    const inputRef = ref<HTMLElement | null>(null);

    onMounted(() => {
      console.log(inputRef);
      console.log(inputRef.value);
      inputRef.value && inputRef.value.focus();
    });
    return {
      inputRef,
    };
  },
});
</script>