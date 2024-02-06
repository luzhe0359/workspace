<!--
 * @Description: 
 * @Author: zugelu
 * @Date: 2021-07-15 16:08:33
 * @LastEditors: zugelu
 * @LastEditTime: 2021-07-16 14:37:56
-->
<template>
  <h3>子组件</h3>
  <h4>msg:{{msg}}</h4>
  <button @click="look">你看mssg增加不</button>
</template>

<script lang='ts'>
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: "Child",
  props: ["msg"],
  /*
    在 beforeCreate 之前执行(一次), 此时组件对象还没有创建
    this 是 undefined, 不能通过 this 来访问 data/computed/methods / props
    其实所有的 composition API 相关回调函数中也都不可以
    */
  beforeCreate() {
    console.log("进入 beforeCreate");
  },
  setup(props, { attrs, emit, slots }) {
    console.log(props.msg);
    console.log(attrs);
    console.log(emit);
    console.log(slots);

    function look() {
      console.log("111");

      emit("addMsg", "------  ");
    }

    console.log("进入了 setup", this);
    return {
      look,
    };
  },
});
</script>