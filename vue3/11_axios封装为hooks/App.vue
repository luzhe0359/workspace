<template>
  <h3>加载数据</h3>
  <h4 v-if="loading">加载中</h4>
  <h4 v-else-if="errMsg">{{errMsg}}</h4>
  <ul v-else>
    <li>{{result.id}}</li>
    <li>{{result.name}}</li>
    <li>{{result.des}}</li>
  </ul>

  <hr>

  <ul v-for="item in result" :key="item.id">
    <li>{{item.id}}</li>
    <li>{{item.name}}</li>
    <li>{{item.des}}</li>
  </ul>
</template>

<script lang='ts'>
import { defineComponent, watch } from "vue";
import useRequest from "./hooks/useRequest";

export default defineComponent({
  name: "App",
  setup() {
    interface IAddressData {
      id: number;
      name: string;
      des: string;
    }
    // const { loading, result, errMsg } = useRequest<IAddressData>("/data/address.json");
    const { loading, result, errMsg } = useRequest<IAddressData[]>(
      "/data/products.json"
    );

    // 监视 result
    watch(result, () => {
      if (result.value) {
        console.log(result.value.length);
      }
    });
    return { loading, result, errMsg };
  },
});
</script>