<!--
 * @Description: 
 * @Author: zugelu
 * @Date: 2021-07-07 15:13:04
 * @LastEditors: zugelu
 * @LastEditTime: 2021-07-20 11:33:04
-->
<template>
  <h3>shallowReactive 与 shallowRef</h3>

  <h4>{{m1}}</h4>
  <h4>{{m2}}</h4>
  <h4>{{m3}}</h4>
  <h4>{{m4}}</h4>
  <button @click="update">修改</button>
</template>

<script lang='ts'>
/* 
  shallowReactive : 只处理了对象内最外层属性的响应式(也就是浅响应式)
  shallowRef: 只处理了 value 的响应式, 不进行对象的 reactive 处理

  reactive与ref实现的是深度响应式, 而shallowReactive与shallowRef是浅响应式
  什么时候用浅响应式呢?
  一般情况下使用 ref 和 reactive 即可
  如果有一个对象数据, 结构比较深, 但变化时只是外层属性变化 ===> shallowReactive
  如果有一个对象数据, 后面会产生新的对象来替换 ===> shallowRef
*/
import {
  defineComponent,
  ref,
  reactive,
  shallowRef,
  shallowReactive,
} from "vue";

export default defineComponent({
  name: "App",
  setup() {
    const m1 = reactive({ a: 1, b: { c: 2 } });
    const m2 = shallowReactive({ a: 1, b: { c: 2 } });

    const m3 = ref({ a: 1, b: { c: 2 } });
    const m4 = shallowRef({ a: 1, b: { c: 2 } });

    const update = () => {
      // m1.a += 1;
      // m1.b.c += 1;
      //
      // m2.a += 1;
      // m2.b.c += 1; // 不改变
      //
      // m3.value.a += 1;
      // m3.value.b.c += 1;
      //
      // m4.value.a += 1; // 不改变
      // m4.value.b.c += 1; // 不改变
      console.log(m3, m4);
    };
    return {
      m1,
      m2,
      m3,
      m4,
      update,
    };
  },
});
</script>