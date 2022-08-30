<template>
  <h1 class="home">Home ~~</h1>
  <div>
    按钮： <el-button type="primary">Primary</el-button>
  </div>
</template>
<script>
import { ElButton } from 'element-plus'
export default {
  components: { ElButton },
}
</script>

<style lang="less">
.home {
  color: orange;
  font-size: 22px;
}
</style>