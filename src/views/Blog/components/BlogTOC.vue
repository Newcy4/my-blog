<template>
  <div class="blog-toc-container">
    <h2>目录</h2>
    <RightList :list="tocWithSelect" @select="handleSelect"></RightList>
  </div>
</template>

<script>
import RightList from './RightList.vue'
import { debounce } from '@/utils'
export default {
  components: {
    RightList
  },
  props: {
    toc: Array
  },
  data() {
    return {
      activeAnchor: ''
    }
  },
  computed: {
    // 根据toc属性以及activeAnchor得到带有isSelect属性的toc数组
    tocWithSelect() {
      const getTOC = (toc = []) => {
        return toc.map((t) => ({
          ...t,
          isSelect: t.anchor === this.activeAnchor,
          children: getTOC(t.children)
        }))
      }
      return getTOC(this.toc)
    },
    doms() {
      const doms = []
      const addToDoms = (toc) => {
        for (const t of toc) {
          doms.push(document.getElementById(t.anchor))
          if (t.children && t.children.length) {
            // 有子目录且子目录长度不为0
            addToDoms(t.children)
          }
        }
      }
      addToDoms(this.toc)
      // console.log(doms)
      return doms
    }
  },
  methods: {
    handleSelect(item) {
      location.hash = item.anchor
    },
    // 设置activeAnchor为正确的值
    setSelect(scrollDom) {
      if (!scrollDom) {
        return
      }
      this.activeAnchor = '' // 由于后续要继续设置，先清空先前的状态
      const range = 200 // 规定 题目元素 距离视窗顶部的距离的范围
      for (const dom of this.doms) {
        // 看一下当前这个dom元素是不是应该被选中
        if (!dom) {
          // dom元素不存在的情况，跳过进入下一次循环
          continue
        }
        // dom元素存在的情况
        // 得到元素离饰扣顶部的距离
        const top = dom.getBoundingClientRect().top
        if (top >= 0 && top <= range) {
          // 在规定的范围内
          this.activeAnchor = dom.id
          return
        } else if (top > range) {
          // 在规定的范围下方
          return
        } else {
          // 在规定的范围上方
          this.activeAnchor = dom.id // 先假设自己是激活的，然后继续看后面
        }
      }
    }
  },
  created() {
    this.setSelectDebounce = debounce(this.setSelect, 50)
    this.$bus.$on('mainScroll', this.setSelectDebounce)
  },
  destroyed() {
    this.$bus.$off('mainScroll', this.setSelectDebounce)
  }
}
</script>

<style lang="less" scoped>
.blog-toc-container {
  h2 {
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1em;
    margin: 0;
  }
}
</style>
