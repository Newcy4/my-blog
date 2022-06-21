<template>
  <div class="blog-category-container" v-loading="isLoading">
    <h2>文章分类</h2>
    <RightList :list="list" @select="handleSelect"></RightList>
  </div>
</template>

<script>
import RightList from './RightList.vue'
import fetchData from '@/mixins/fetchData'
import { getBlogCategories } from '@/api/blog'
export default {
  mixins: [fetchData([])],
  components: {
    RightList
  },
  computed: {
    categoryId() {
      return +this.$route.params.categoryId || -1
    },
    limit() {
      return +this.$route.query.limit || 10
    },
    list() {
      const totalArticleCount = this.data.reduce((a, b) => a + b.articleCount, 0)
      const result = [{ name: '全部', id: -1, articleCount: totalArticleCount }, ...this.data]
      return result.map((it) => ({ ...it, isSelect: it.id === this.categoryId, aside: `${it.articleCount}篇` })) // 在原来对象的基础上加一个isSelect属性
    }
  },
  methods: {
    async fetchData() {
      return await getBlogCategories()
    },
    handleSelect(item) {
      const query = {
        page: 1,
        limit: this.limit
      }
      if (item.id === -1) {
        // 当前没有分类
        // 跳转到这个地址/article?page=${newPage}&limit=${this.routeInfo.limit}

        this.$router.push({
          name: 'Blog',
          query
        })
      } else {
        // 有分类
        // 跳转到/article/cate/${this.routeInfo.categoryId}?page=${newPage}&limit=${this.routeInfo.limit}
        this.$router.push({
          name: 'CategoryBlog',
          query,
          params: {
            categoryId: item.id
          }
        })
      }
    }
  }
}
</script>

<style lang="less" scoped>
.blog-category-container {
  width: 300px;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  height: 100%;
  overflow-y: auto;
  h2 {
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1em;
    margin: 0;
  }
}
</style>
