<template>
  <div class="test-container">
    <ImageLoader src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304" placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100" :duration="2000" @load="handleLoaded" />
  </div>
</template>

<script>
import ImageLoader from '@/components/ImageLoader'

export default {
  components: {
    ImageLoader
  },
  data() {
    return {
      current: 1,
      total: 300
    }
  },
  methods: {
    handleLoaded() {
      console.log('ImageLoader组件load时间出发，图片加载完成')
    }
  }
}
</script>
<style scoped>
.test-container {
  width: 500px;
  height: 400px;
  margin: 0 auto;
  border: 2px solid black;
}
</style>
