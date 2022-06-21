<template>
  <div class="app-container">
    <Layout>
      <template #left>
        <div class="aside">
          <SiteAside></SiteAside>
        </div>
      </template>
      <div class="main">
        <router-view></router-view>
      </div>
      <template #right> </template>
    </Layout>
  </div>
</template>

<script>
import Layout from '@/components/Layout'
import SiteAside from '@/components/SiteAside'

export default {
  components: {
    Layout,
    SiteAside
  },
  data() {
    return {}
  },
  methods: {}
}
</script>
<style lang="less" scoped>
@import '@/styles/mixin.less';
.app-container {
  .self-fill(fixed); // 将页面固定定位占满
}
.aside {
  width: 250px;
  height: 100%;
}
</style>
