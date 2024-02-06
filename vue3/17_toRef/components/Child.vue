<!--
 * @Description: 
 * @Author: zugelu
 * @Date: 2021-07-20 19:12:58
 * @LastEditors: zugelu
 * @LastEditTime: 2021-07-20 19:18:53
-->
<template>
  <h3>子组件</h3>
  <h4>age:{{age}}</h4>
  <h4>length:{{len}}</h4>
</template>

<script lang='ts'>
import { computed, defineComponent, reactive, Ref, toRef } from "vue";

function ussGetLength(foo: Ref) {
  return computed(() => {
    return foo.value.toString().length;
  });
}
export default defineComponent({
  name: "Child",
  props: {
    age: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const len = ussGetLength(toRef(props, "age"));
    return {
      len,
    };
  },
});
</script>