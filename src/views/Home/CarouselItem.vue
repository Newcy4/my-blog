<template>
  <div class="carousel-item-container" ref="container" @mousemove="handleMouseMove" @mouseleave="handleMouseLeave">
    <div class="carousel-img" :style="imagePosition" ref="image">
      <ImageLoader @load="this.showWords" :src="carousel.bigImg" :placeholder="carousel.midImg"></ImageLoader>
    </div>
    <div class="title" ref="title">{{ carousel.title }}</div>
    <div class="desc" ref="desc">{{ carousel.description }}</div>
  </div>
</template>

<script>
import ImageLoader from '@/components/ImageLoader'
export default {
  props: ['carousel'],
  components: {
    ImageLoader
  },
  data() {
    return {
      titleWidth: 0,
      descWidth: 0,
      containerSize: null, //外层容器尺寸
      innerSize: null, //内层图片尺寸
      mouseX: 0, // 鼠标横坐标
      mouseY: 0 // 鼠标纵坐标
    }
  },
  mounted() {
    // 想实现一个动画效果，文字刚出现的时候是width为0慢慢增长到auto
    // 但是由于css内部的计算问题，0到auto是不会有动画效果的，需要0到一个精确的值才可以
    // 想模拟出0 → auto的效果就需要用js获取该元素的值
    // 具体步骤：
    // 1.先将元素opacity设为0，此时元素看不到但存在
    // 2.获取元素宽度，然后将元素宽度设为0，opacity设为1，此时也是看不到的
    // 3.再将元素的宽度设为获取的宽度
    this.titleWidth = this.$refs.title.clientWidth
    this.descWidth = this.$refs.desc.clientWidth

    // 放大移动效果需要获取外层容器和里层图片的尺寸
    this.setSize()
    // 初始化一下鼠标位置
    this.mouseX = this.center.x
    this.mouseY = this.center.y
    // 监听窗口尺寸的变化，随时更新最新尺寸值
    window.addEventListener('resize', this.setSize)
  },
  destroyed() {
    window.removeEventListener('resize', this.setSize)
  },
  methods: {
    // 调用该方法显示文字,等图片加载完后再显示，因此挂载到ImageLoader的load事件中调用
    showWords() {
      this.$refs.title.style.opacity = 1
      this.$refs.title.style.width = 0
      this.$refs.desc.style.opacity = 1
      this.$refs.desc.style.width = 0
      // 强制让浏览器渲染一次
      this.$refs.title.clientHeight // reflow
      // this.$refs.desc.clientWidth // reflow
      // 添加动画过度，修改宽度
      this.$refs.title.style.transition = '1s'
      this.$refs.title.style.width = this.titleWidth + 'px'
      this.$refs.desc.style.transition = '2s 1s'
      this.$refs.desc.style.width = this.descWidth + 'px'
    },
    // 设置各种尺寸
    setSize() {
      this.containerSize = {
        width: this.$refs.container.clientWidth,
        height: this.$refs.container.clientHeight
      }
      this.innerSize = {
        width: this.$refs.image.clientWidth,
        height: this.$refs.image.clientHeight
      }
      // console.log(this.containerSize, this.innerSize)
    },
    // 获取最新的鼠标位置
    handleMouseMove(e) {
      const rect = this.$refs.container.getBoundingClientRect()
      this.mouseX = e.clientX - rect.left
      this.mouseY = e.clientY - rect.top
      // console.log(this.mouseX, this.mouseY)
      // console.log(e.clientX, e.clientY)
    },
    handleMouseLeave() {
      this.mouseX = this.center.x
      this.mouseY = this.center.y
    }
  },
  computed: {
    // 得到图片坐标
    imagePosition() {
      // 排除元素还未挂载的时候的情况，否则未挂载去获取dom元素的尺寸会报错
      if (!this.innerSize || !this.containerSize) {
        return {}
      }
      const extraHeight = this.innerSize.height - this.containerSize.height //多出的高度
      const extraWidth = this.innerSize.width - this.containerSize.width // 多出的宽度
      const left = (-extraWidth / this.containerSize.width) * this.mouseX
      const top = (-extraHeight / this.containerSize.height) * this.mouseY
      return {
        // 为了优化效率，不要用left和top，会引起重排
        // left: left + 'px',
        // top: top + 'px'
        transform: `translate(${left}px, ${top}px)`
      }
    },
    center() {
      return {
        x: this.containerSize.width / 2,
        y: this.containerSize.height / 2
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import '@/styles/var.less';
.carousel-item-container {
  background-color: @dark;
  width: 100%;
  height: 100%;
  color: #fff;
  position: relative;
  overflow: hidden;
}
.carousel-img {
  width: 110%;
  height: 110%;
  position: absolute;
  top: 0;
  left: 0;
  transition: 0.3s;
}
.title,
.desc {
  position: absolute;
  letter-spacing: 3px;
  left: 30px;
  color: #fff;
  text-shadow: 1px 0 0 rgba(0, 0, 0, 0.5), -1px 0 0 rgba(0, 0, 0, 0.5), 0 1px 0 rgba(0, 0, 0, 0.5), 0 -1px 0 rgba(0, 0, 0, 0.5); // 防止浅色背景看不清文字，给文字描边
  white-space: nowrap;
  overflow: hidden;
  opacity: 0;
}
.title {
  top: calc(50% - 40px);
  font-size: 2em;
}
.desc {
  top: calc(50% + 20px);
  font-size: 1.2em;
  color: lighten(@gray, 20%);
}
</style>
