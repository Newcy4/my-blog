<template>
  <img
    class="avatar-container"
    :style="{
      width: size + 'px',
      height: size + 'px'
    }"
    :src="url"
    alt=""
  />
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true
    },
    size: {
      type: Number,
      default: 150
    }
  }
}
</script>

<style lang="less" scoped>
.avatar-container {
  border-radius: 50%;
  object-fit: cover; // 避免宽高比例不合适导致图片拉伸
}
</style>
