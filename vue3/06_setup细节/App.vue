<!--
 * @Description: 
 * @Author: zugelu
 * @Date: 2021-07-07 15:13:04
 * @LastEditors: zugelu
 * @LastEditTime: 2021-07-16 14:41:21
-->
<template>
  <h2>父组件</h2>
  <h3>msg:{{msg}}</h3>
  <button @click="msg+='==='">点击事件</button>
  <Child :msg="msg" id="child" msg2="234" @addMsg="addMsg" />
  <hr />
</template>

<script lang='ts'>
import { defineComponent, ref } from "vue";
import Child from "./components/Child.vue";

export default defineComponent({
  name: "App",
  // 注册组件
  components: {
    Child,
  },
  /*
    setup 执行的时机
    在 beforeCreate 之前执行(一次), 此时组件对象还没有创建
    this 是 undefined, 不能通过 this 来访问 data/computed/methods / props
    其实所有的 composition API 相关回调函数中也都不可以
    
    setup 的返回值
    一般都返回一个对象: 为模板提供数据, 也就是模板中可以直接使用此对象中的所有属性/方法
    返回对象中的属性会与 data 函数返回对象的属性合并成为组件对象的属性
    返回对象中的方法会与 methods 中的方法合并成功组件对象的方法
    如果有重名, setup 优先
    注意:
    一般不要混合使用: methods 中可以访问 setup 提供的属性和方法, 但在 setup 方法中不能访问 data 和 methods
    setup 不能是一个 async 函数: 因为返回值不再是 return 的对象, 而是 promise, 模板看不到 return 对象中的属性数据
    
    setup 的参数
    setup(props, context) / setup(props, {attrs, slots, emit})
    props: 包含 props 配置声明且传入了的所有属性的对象
    attrs: 包含没有在 props 配置中声明的属性的对象, 相当于 this.$attrs
    slots: 包含所有传入的插槽内容的对象, 相当于 this.$slots
    emit: 用来分发自定义事件的函数, 相当于 this.$emit
  */
  setup() {
    const msg = ref("123 -------");
    function addMsg(txt: string) {
      msg.value += txt;
    }
    return {
      msg,
      addMsg,
    };
  },
});
</script>