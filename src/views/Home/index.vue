<template>
  <div v-loading="loading" class="home-container" ref="container" @wheel="handleWheel">
    <ul class="carousel-container" :style="{ marginTop }" @transitionend="handleTransitionEnd">
      <li v-for="item in data" :key="item.id">
        <CarouselItem :carousel="item"></CarouselItem>
      </li>
    </ul>
    <div v-show="index >= 1" @click="switchTo(index - 1)" class="icon icon-up">
      <Icon type="arrowUp"></Icon>
    </div>
    <div v-show="index < data.length - 1" @click="switchTo(index + 1)" class="icon icon-down">
      <Icon type="arrowDown"></Icon>
    </div>
    <ul class="indicator">
      <li v-for="(item, i) in data" :key="item.id" @click="switchTo(i)" :class="{ active: i === index }"></li>
    </ul>
  </div>
</template>

<script>
import CarouselItem from './CarouselItem'
import Icon from '@/components/Icon'
import { mapState } from 'vuex'

export default {
  components: {
    CarouselItem,
    Icon
  },
  data() {
    return {
      index: 0, //当前显示的是第几张轮播图
      containerHeight: 0, // 整个容器的高度
      switching: false // 轮播图是否正在切换中
    }
  },
  created() {
    this.$store.dispatch('banner/fetchBanner')
  },
  computed: {
    ...mapState('banner', ['loading', 'data']),
    marginTop() {
      return -this.index * this.containerHeight + 'px'
    }
  },
  methods: {
    // 切换轮播图
    switchTo(i) {
      this.index = i
    },
    // 鼠标滚轮切换轮播图事件
    handleWheel(e) {
      if (this.switching) {
        return
      }
      if (e.deltaY < -50 && this.index > 0) {
        // 往上滚动
        // console.log('往上滚了')
        this.switching = true
        this.index--
      } else if (e.deltaY > 50 && this.index < this.data.length - 1) {
        // 往下滚动
        // console.log('往下滚了')
        this.switching = true
        this.index++
      }
    },
    handleTransitionEnd() {
      // console.log('过渡效果结束')
      this.switching = false
    },
    // 当窗口尺寸改变时重新获取窗口尺寸
    handleResize() {
      // console.log('窗口尺寸改变了！')
      this.containerHeight = this.$refs.container.clientHeight
    }
  },
  mounted() {
    // 组件渲染时获取当前窗口尺寸，但这个函数只会运行一次，因此需要监听窗口尺寸的变化
    this.containerHeight = this.$refs.container.clientHeight
    // 监听窗口尺寸
    window.addEventListener('resize', this.handleResize)
  },
  destroyed() {
    // 组件删除时删除监听事件
    window.removeEventListener('resize', this.handleResize)
  }
}
</script>

<style lang="less" scoped>
@import '@/styles/mixin.less';
@import '@/styles/var.less';
.home-container {
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden; //转换为bfc防止margin合并
  // background: @dark;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
}
.carousel-container {
  height: 100%;
  width: 100%;
  transition: 500ms;
  li {
    height: 100%;
    width: 100%;
  }
}
.icon {
  .self-center();
  font-size: 30px;
  color: @gray;
  cursor: pointer;
  transform: translateX(-50%);
  @gap: 25px;
  &.icon-up {
    top: @gap;
    animation: jump-up 2s infinite;
  }
  &.icon-down {
    top: auto;
    bottom: @gap;
    animation: jump-down 2s infinite;
  }
  @jump: 5px;
  @keyframes jump-up {
    0% {
      transform: translate(-50%, @jump);
    }
    50% {
      transform: translate(-50%, -@jump);
    }
    100% {
      transform: translate(-50%, @jump);
    }
  }
  @keyframes jump-down {
    0% {
      transform: translate(-50%, -@jump);
    }
    50% {
      transform: translate(-50%, @jump);
    }
    100% {
      transform: translate(-50%, -@jump);
    }
  }
}
.indicator {
  .self-center();
  transform: translateY(-50%);
  left: auto;
  right: 20px;
  li {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: @words;
    cursor: pointer;
    margin-bottom: 10px;
    border: 1px solid #fff;
    box-sizing: border-box;
    &.active {
      background: #fff;
    }
  }
}
</style>
>
