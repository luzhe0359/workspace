<!--
 * @Description: 
 * @Author: zugelu
 * @Date: 2021-07-07 15:13:04
 * @LastEditors: zugelu
 * @LastEditTime: 2021-07-19 14:36:51
-->
<template>
  <h3>计算属性和监视</h3>
  <fieldset>
    <legend>姓名操作</legend>
    姓氏： <input type="text" v-model="user.firstname"> <br>
    名字： <input type="text" v-model="user.lastname"> <br>
  </fieldset>
  <fieldset>
    <legend>姓名操作</legend>
    姓名： <input type="text" v-model="fullName1"> <br>
    姓名： <input type="text" v-model="fullName2"> <br>
    姓名： <input type="text" v-model="fullName3"> <br>
  </fieldset>
</template>

<script lang='ts'>
import {
  defineComponent,
  ref,
  reactive,
  computed,
  watch,
  watchEffect,
} from "vue";

export default defineComponent({
  name: "App",
  setup() {
    const user = reactive({
      firstname: "厨房",
      lastname: "不败",
    });

    // 只有getter的计算属性
    const fullName1 = computed(() => {
      return user.firstname + "_" + user.lastname;
    });

    // 有getter与setter的计算属性
    const fullName2 = computed({
      get() {
        return user.firstname + "_" + user.lastname;
      },
      set(val: string) {
        const names = val.split("_");
        user.firstname = names[0];
        user.lastname = names[1];
      },
    });

    const fullName3 = ref("");
    /*
      使用watch的2个特性:
      深度监视
      初始化立即执行
    */
    // watch(
    //   user,
    //   (val) => {
    //     console.log(val);
    //     fullName3.value = user.firstname + "_" + user.lastname;
    //   },
    //   {
    //     immediate: true, // 是否初始化立即执行一次, 默认是false
    //     deep: true, // 是否是深度监视, 默认是false
    //   }
    // );

    /*
      watchEffect: 监视所有回调中使用的数据
    */
    // watchEffect(() => {
    //   fullName3.value = user.firstname + "_" + user.lastname;
    // });

    // watch 一个数据
    /*    
    watch(fullName3, (val) => {
      console.log("watch");
      const names = val.split("_");
      user.firstname = names[0];
      user.lastname = names[1];
    }); 
    */

    /* 
    watch多个数据:
      使用数组来指定
      如果是ref对象, 直接指定
      如果是reactive对象中的属性,  必须通过函数来指定
    */
    watch([() => user.firstname, () => user.lastname, fullName2], (values) => {
      console.log("监视多个数据", values);
    });

    return {
      user,
      fullName1,
      fullName2,
      fullName3,
    };
  },
});
</script>