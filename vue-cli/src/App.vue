<template>
  <h1>hello app</h1>
  <ul>
    <li>
      <router-link to="/home">home</router-link>
    </li>
    <li>
      <router-link to="/about">about</router-link>
    </li>
  </ul>

  <router-view />
</template>
<script setup>
// import Home from "./views/Home/index.vue";

</script>

<style lang="less">
h1 {
  color: pink;
}
</style>