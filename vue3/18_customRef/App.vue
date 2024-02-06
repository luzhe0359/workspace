
<template>
  <h3>customRef</h3>
  <input v-model="keyword" placeholder="搜索关键字" />
  <p>{{ keyword }}</p>
</template>

<script lang='ts'>
import { customRef, defineComponent, reactive } from "vue";

export default defineComponent({
  name: "App",
  setup() {
    /*
      创建一个自定义的 ref，并对其依赖项跟踪和更新触发进行显式控制
      需求: 使用 customRef 实现 debounce 的示例
    */
    const keyword = useDebouncedRef("", 500);
    return {
      keyword,
    };
  },
});

/*
实现函数防抖的自定义ref
*/
function useDebouncedRef<T>(value: T, delay = 200) {
  let timeout: number;
  return customRef((track, trigger) => {
    return {
      // 返回的数据
      get() {
        // 告诉Vue追踪数据
        track();
        return value;
      },
      // 设置数据的
      set(newVal: T) {
        //清除定时器
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          value = newVal;
          // 告诉Vue更新界面
          trigger();
        }, delay);
      },
    };
  });
}
</script>