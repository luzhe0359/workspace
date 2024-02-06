<template>
  <h3>点击记录鼠标的坐标</h3>
  <h4>x:{{x}} y:{{y}}</h4>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
import useMousePosition from "./hooks/useMousePosition";

export default defineComponent({
  name: "App",
  setup() {
    const { x, y } = useMousePosition();
    return {
      x,
      y,
    };
  },
});
</script>