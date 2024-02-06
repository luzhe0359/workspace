<!--
 * @Description: 
 * @Author: zugelu
 * @Date: 2021-07-07 15:13:04
 * @LastEditors: zugelu
 * @LastEditTime: 2021-07-21 10:03:17
-->
<template>
  <h3>响应式数据的判断</h3>
</template>

<script lang='ts'>
import {
  defineComponent,
  ref,
  isRef,
  isReactive,
  reactive,
  isReadonly,
  readonly,
  isProxy,
} from "vue";

export default defineComponent({
  name: "App",
  setup() {
    // isRef: 检查一个值是否为一个 ref 对象
    console.log(isRef(ref("")));
    // isReactive: 检查一个对象是否是由 reactive 创建的响应式代理
    console.log(isReactive(reactive({})));
    // isReadonly: 检查一个对象是否是由 readonly 创建的只读代理
    console.log(isReadonly(readonly({})));
    // isProxy: 检查一个对象是否是由 reactive 或者 readonly 方法创建的代理
    console.log(isProxy(readonly({})));
    return {};
  },
});
</script>