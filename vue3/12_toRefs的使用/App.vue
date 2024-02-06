<template>
  <h3>toRefs</h3>
  <!-- <h4>state: {{state}}</h4>
  <h4>name: {{state.name}} </h4>
  <h4>age: {{state.age}}</h4> -->
  <h4>name: {{name}} </h4>
  <h4>age: {{age}}</h4>

  <hr>
  {{foo2}} {{bar2}}
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs } from "vue";

/*
toRefs:
  将响应式对象中所有属性包装为ref对象, 并返回包含这些ref对象的普通对象
  应用: 当从合成函数返回响应式对象时，toRefs 非常有用，
        这样消费组件就可以在不丢失响应式的情况下对返回的对象进行分解使用
*/
export default defineComponent({
  name: "App",
  setup() {
    const state = reactive({
      name: "返回大理石",
      age: 20,
    });

    const state2 = toRefs(state);

    const { foo2, bar2 } = useReatureX();

    setInterval(() => {
      state2.name.value += "===";
    }, 1000);
    return {
      // state,
      // ...state,
      ...state2,
      foo2,
      bar2,
    };
  },
});

function useReatureX() {
  const state = reactive({
    foo2: "a",
    bar2: "b",
  });

  setTimeout(() => {
    state.foo2 += "++";
    state.bar2 += "++";
  }, 2000);

  // return toRefs(state)
  return {
    ...toRefs(state),
  };
}
</script>