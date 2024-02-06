<!--
 * @Description: 
 * @Author: zugelu
 * @Date: 2021-07-07 15:13:04
 * @LastEditors: zugelu
 * @LastEditTime: 2021-07-16 15:17:57
-->
<template>
  <h3>{{m1}}</h3>
  <h3>{{m2}}</h3>
  <h3>{{m3}}</h3>
  <button @click="update">更新</button>
</template>

<script lang='ts'>
import { defineComponent, ref, reactive } from "vue";

/*
  是 Vue3 的 composition API 中 2 个最重要的响应式 API
  ref 用来处理基本类型数据, reactive 用来处理对象(递归深度响应式)
  如果用 ref 对象/数组, 内部会自动将对象/数组转换为 reactive 的代理对象
  ref 内部: 通过给 value 属性添加 getter/setter 来实现对数据的劫持
  reactive 内部: 通过使用 Proxy 来实现对对象内部所有数据的劫持, 并通过 Reflect 操作对象内部数据
  ref 的数据操作: 在 js 中要.value, 在模板中不需要(内部解析模板时会自动添加.value)
*/

export default defineComponent({
  name: "App",
  setup() {
    const m1 = ref("aaa");
    const m2 = reactive({
      name: "小米",
    });
    const m3 = ref({
      name: "小哈",
      wife: {
        name: "乌鸡",
      },
    });
    function update() {
      m1.value += "===";
      m2.name += "===";
      m3.value.name += "===";
      m3.value.wife.name += "===";
    }
    return {
      m1,
      m2,
      m3,
      update,
    };
  },
});
</script>