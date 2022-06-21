// 滚动条处理，返回顶部
export default function (refValue) {
  return {
    mounted() {
      this.$refs[refValue].addEventListener('scroll', this.handleMainScroll)
      this.$bus.$on('setMainScroll', this.handleSetMainScroll)
    },
    beforeDestroy() {
      this.$bus.$emit('mainScroll', undefined)
      this.$refs[refValue].removeEventListener('scroll', this.handleMainScroll)
      this.$bus.$off('setMainScroll', this.handleSetMainScroll)
    },
    methods: {
      handleMainScroll() {
        // 给事件总线添加事件，等待别人的监听
        this.$bus.$emit('mainScroll', this.$refs[refValue])
      },
      handleSetMainScroll(scrollTop) {
        this.$refs[refValue].scrollTop = scrollTop
      }
    }
  }
}
