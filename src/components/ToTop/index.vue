<template>
  <div v-show="show" @click="handleClick" class="to-top-container">Top</div>
</template>

<script>
export default {
  data() {
    return {
      show: false
    }
  },
  created() {
    this.$bus.$on('mainScroll', this.handleScroll)
  },
  destroyed() {
    this.$bus.$off('mainScroll', this.handleScroll)
  },
  methods: {
    handleScroll(dom) {
      if (!dom) {
        this.show = false
        return
      }
      this.show = dom.scrollTop >= 500
    },
    handleClick() {
      // 回到顶部
      this.$bus.$emit('setMainScroll', 0)
    }
  }
}
</script>

<style lang="less" scoped>
@import '@/styles/var.less';
.to-top-container {
  background: @primary;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  z-index: 999;
  position: fixed;
  right: 50px;
  bottom: 50px;
  cursor: pointer;
  text-align: center;
  line-height: 50px;
  font-weight: bold;
  color: #fff;
}
</style>
