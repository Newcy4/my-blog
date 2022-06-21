<template>
  <div class="test-container">
    <Layout>
      <template #left>
        <div class="left">左侧区域，宽度适应内容，溢出隐藏</div>
      </template>
      <div class="main">主区域，宽度占满剩余空间，溢出隐藏</div>
      <template #right>
        <div class="right">右侧区域，宽度适应内容，溢出隐藏</div>
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from '@/components/Layout'

export default {
  components: {
    Layout
  },
  data() {
    return {}
  },
  methods: {}
}
</script>
<style lang="less" scoped>
.test-container {
  width: 1000px;
  height: 600px;
  margin: 0 auto;
  border: 2px solid red;
  overflow: hidden;
  padding: 0;
}
.left {
  width: 200px;
  height: 100%;
  background: pink;
}
.main {
  width: 100%;
  height: 100%;
  background: skyblue;
}
.right {
  width: 150px;
  height: 100%;
  background: orange;
}
</style>
