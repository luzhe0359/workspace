<template>
  <h3>toRaw 与 markRaw</h3>
  <h4>{{user1}}</h4>

  <button @click="testToRaw">测试toRaw</button>
  <button @click="testMarkRaw">测试markRaw</button>
</template>

<script lang='ts'>
import { defineComponent, markRaw, reactive, toRaw } from "vue";

export default defineComponent({
  name: "App",
  setup() {
    /* 
      oRaw
      返回由 reactive 或 readonly 方法转换成响应式代理的普通对象。
      这是一个还原方法，可用于临时读取，访问不会被代理/跟踪，写入时也不会触发界面更新。

      markRaw
      标记一个对象，使其永远不会转换为代理。返回对象本身
      应用场景:
      有些值不应被设置为响应式的，例如复杂的第三方类实例或 Vue 组件对象。
      当渲染具有不可变数据源的大列表时，跳过代理转换可以提高性能。
    */
    interface IUserInfo {
      name: string;
      age: number;
      likes?: string[];
    }
    const user1 = reactive<IUserInfo>({
      name: "消费",
      age: 22,
    });

    const testToRaw = () => {
      console.log("ceshi 1");
      const user2 = toRaw(user1);
      user2.age++;
    };

    const testMarkRaw = () => {
      const likes = ["足球", "篮球"];

      // user1.likes = likes;
      // user1.likes[0] += "=";

      // markRaw 标记的对象数据，从此以后都不能成为代理对象了
      user1.likes = markRaw(likes);
      setInterval(() => {
        if (user1.likes) {
          user1.likes[0] += "=";
          console.log("定时器");
        }
      }, 1000);
    };
    return {
      user1,
      testToRaw,
      testMarkRaw,
    };
  },
});
</script>