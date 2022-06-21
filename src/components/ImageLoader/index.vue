<template>
  <div class="image-loader-container">
    <img v-if="!everythingDone" class="placeholder" :src="placeholder" alt="" />
    <img @load="handleLoad" :src="src" alt="" :style="{ opacity: originOpacity, transition: `${duration}ms` }" />
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: true
    },
    duration: {
      type: Number,
      default: 500
    }
  },
  data() {
    return {
      originLoaded: false, // 原图是否加载完成
      everythingDone: false // 图片是否完全显现
    }
  },
  computed: {
    originOpacity() {
      return this.originLoaded ? 1 : 0
    }
  },
  methods: {
    handleLoad() {
      this.originLoaded = true
      // console.log('原图加载完成')
      setTimeout(() => {
        this.everythingDone = true
        // console.log('原图完全显现')
        this.$emit('load') //通知父组件图片已经加载完成
      }, this.duration)
    }
  }
}
</script>

<style lang="less" scoped>
@import '@/styles/mixin.less';
.image-loader-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  img {
    .self-fill();
    object-fit: cover;
  }
  .placeholder {
    filter: blur(2vw); // 虚化占位图
  }
}
</style>
