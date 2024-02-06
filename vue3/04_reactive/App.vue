<!--
 * @Description: 
 * @Author: zugelu
 * @Date: 2021-07-07 15:13:04
 * @LastEditors: zugelu
 * @LastEditTime: 2021-07-15 10:20:50
-->
<template>
  <div>哈哈哈，我又来了！！</div>
  <h3>姓名：{{user.name}}</h3>
  <h3>年龄：{{user.age}}</h3>
  <h3>性别：{{user.gender}}</h3>
  <h3>妻子：{{user.wife}}</h3>

  <button @click="updateUser">改变</button>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: "App",
  setup() {
    const obj: any = {
      name: "小明纸",
      age: 22,
      wife: {
        name: "小花花",
        age: 25,
        cars: ["宝马", "大众", "四个圈"],
      },
    };
    const user = reactive(obj);
    console.log(user);

    // reactive
    // 作用: 定义多个数据的响应式
    // const proxy = reactive(obj): 接收一个普通对象然后返回该普通对象的响应式代理器对象
    // 响应式转换是“深层的”：会影响对象内部所有嵌套的属性
    // 内部基于 ES6 的 Proxy 实现，通过代理对象操作源对象内部数据都是响应式的

    const updateUser = () => {
      // 2021年7月7日16:28:52  可以用
      // obj.name = "假假";
      // console.log(obj);

      // user.name = "小胡";
      // user.wife.name = "小法";
      // user.wife.age++;

      // obj.gender = "男"; // 这种方式界面没有更新
      user.gender = "男";

      // delete obj.age;
      delete user.age;
    };
    return {
      user,
      updateUser,
    };
  },
});
</script>