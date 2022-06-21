<template>
  <div style="position: relative">
    <Loading v-if="show"></Loading>
    <button @click="show = !show">切换显示/隐藏</button>
  </div>
</template>

<script>
import Loading from '@/components/Loading'
export default {
  components: {
    Loading
  },
  data() {
    return {
      show: true
    }
  }
}
</script>

<style lang="less" scoped>
@import '@/styles//mixin.less';
.loading-container {
  .self-center();
}
</style>
