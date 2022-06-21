<template>
  <!-- 只有总页数大于1时才显示 -->
  <div class="pager-container" v-if="pageNumber > 1">
    <a @click="changePage(1)" :class="{ disable: current === 1 }">|&lt;&lt;</a>
    <a @click="changePage(current - 1)" :class="{ disable: current === 1 }">&lt;&lt;</a>
    <a @click="changePage(n)" v-for="(n, i) in numbers" :key="i" :class="{ active: n === current }">{{ n }}</a>
    <a @click="changePage(current + 1)" :class="{ disable: current === pageNumber }">&gt;&gt;</a>
    <a @click="changePage(pageNumber)" :class="{ disable: current === pageNumber }">&gt;&gt;|</a>
  </div>
</template>

<script>
export default {
  props: {
    current: {
      type: Number,
      default: 1
    },
    total: {
      type: Number,
      default: 0
    },
    limit: {
      typeof: Number,
      default: 10
    },
    visibleNumber: {
      type: Number,
      default: 10
    }
  },
  data() {
    return {}
  },
  methods: {
    // 抛出一个事件，通知父组件页面变动了
    changePage(newPage) {
      // console.log(newPage)
      this.$emit('pageChange', newPage) // 传给父组件新的页面值
    }
  },
  computed: {
    // 总页数
    pageNumber() {
      return Math.ceil(this.total / this.limit)
    },
    // 得到显示的最小数字
    visibleMin() {
      let min = this.current - Math.floor(this.visibleNumber / 2)
      if (min < 1) {
        min = 1
      }
      return min
    },
    visibleMax() {
      let max = this.visibleMin + this.visibleNumber - 1
      if (max > this.pageNumber) {
        max = this.pageNumber
      }
      return max
    },
    numbers() {
      let nums = []
      for (let i = this.visibleMin; i <= this.visibleMax; i++) {
        nums.push(i)
      }
      return nums
    }
  }
}
</script>

<style lang="less" scoped>
@import '@/styles/var.less';
.pager-container {
  display: flex;
  justify-content: center;
  margin: 20px 0;
  a {
    color: @primary;
    margin: 0 6px;
    cursor: pointer;
    &.disable {
      color: @lightWords;
      cursor: not-allowed;
    }
    &.active {
      color: @words;
      font-weight: bold;
      cursor: text;
    }
  }
}
</style>
