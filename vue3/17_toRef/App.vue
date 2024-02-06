<template>
  <h3>toref的特点及使用</h3>
  <h4>user1:{{user1}}</h4>
  <h4>age:{{age}}</h4>
  <h4>money:{{money}}</h4>
  <hr>

  <button @click="update">更新</button>

  <hr>

  <Child :age="age" />
</template>

<script lang='ts'>
import { defineComponent, ref, reactive, toRef } from "vue";
import Child from "./components/Child.vue";

/* 
  为源响应式对象上的某个属性创建一个 ref 对象, 二者内部操作的是同一个数据值, 更新时二者是同步的
  区别 ref: 拷贝了一份新的数据值单独操作, 更新时相互不影响
  应用: 当要将 某个 prop 的 ref 传递给复合函数时，toRef 很有用
*/
export default defineComponent({
  name: "App",
  components: { Child },
  setup() {
    const user1 = reactive({
      age: 9,
      money: 99,
    });

    const age = toRef(user1, "age");
    const money = ref(user1.money);
    const update = () => {
      console.log("1");
      // 内部操作的是同一个数据值, 同时修改
      // age.value += 2;
      user1.age += 2;

      // 拷贝了一份新的数据值单独操作, 更新时相互不影响
      // user1.money += 2;
      // money.value += 2;
    };
    return {
      age,
      money,
      user1,
      update,
    };
  },
});
</script>