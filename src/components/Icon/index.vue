<template>
  <i class="iconfont icon-container" :class="fontClass"></i>
</template>

<script>
const classMap = {
  home: 'icon-zhuye',
  success: 'icon-zhengque',
  error: 'icon-cuowu',
  close: 'icon-guanbi',
  warn: 'icon-jinggao',
  info: 'icon-xinxi',
  blog: 'icon-blog',
  code: 'icon-code',
  about: 'icon-about',
  weixin: 'icon-weixin',
  mail: 'icon-youxiang',
  github: 'icon-github-fill',
  qq: 'icon-QQ-circle-fill',
  arrowUp: 'icon-shangjiantou',
  arrowDown: 'icon-xiajiantou',
  empty: 'icon-empty',
  chat: 'icon-liuyan'
}

export const types = Object.keys(classMap)
export default {
  props: {
    type: {
      type: String,
      required: true
    }
  },
  computed: {
    // 图标类样式映射
    fontClass() {
      return classMap[this.type]
    }
  }
}
</script>

<style lang="less" scoped>
@import '//at.alicdn.com/t/font_3410135_crr8gzgh6hw.css';
.iconfont {
  color: inherit;
  font-size: inherit;
}
</style>
