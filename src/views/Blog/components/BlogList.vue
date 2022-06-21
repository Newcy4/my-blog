<template>
  <div class="blog-list-container" ref="mainContainer" v-loading="isLoading">
    <ul>
      <li v-for="item in data.rows" :key="item.id">
        <div class="thumb" v-if="item.thumb">
          <RouterLink
            :to="{
              name: 'BlogDetail',
              params: {
                id: item.id
              }
            }"
          >
            <img v-lazy="item.thumb" :alt="item.title" :title="item.title" />
          </RouterLink>
        </div>
        <div class="main">
          <RouterLink
            :to="{
              name: 'BlogDetail',
              params: {
                id: item.id
              }
            }"
          >
            <h2>{{ item.title }}</h2>
          </RouterLink>
          <div class="aside">
            <span>日期：{{ formatDate(item.createDate) }}</span>
            <span>浏览：{{ item.scanNumber }}</span>
            <span>评论: {{ item.commentNumber }}</span>
            <RouterLink
              :to="{
                name: 'CategoryBlog',
                params: {
                  categoryId: item.category.id
                }
              }"
              >{{ item.category.name }}</RouterLink
            >
          </div>
          <div class="desc">{{ item.description }}</div>
        </div>
      </li>
    </ul>
    <Empty v-if="data.rows.length === 0 && !isLoading"></Empty>
    <!-- 分页放到这里 -->
    <Pager v-if="data.total" :current="routeInfo.page" :total="data.total" :limit="routeInfo.limit" :visibleNumber="10" @pageChange="handlePageChange"></Pager>
  </div>
</template>

<script>
import Pager from '@/components/Pager'
import fetchData from '@/mixins/fetchData'
import { getBlogs } from '@/api/blog'
import { formatDate } from '@/utils'
import mainScroll from '@/mixins/mainScroll'
import Empty from '@/components/Empty'

export default {
  mixins: [fetchData({ total: 0, rows: [] }), mainScroll('mainContainer')],
  components: {
    Pager,
    Empty
  },
  computed: {
    // 获取地址栏的路由信息
    routeInfo() {
      const categoryId = +this.$route.params.categoryId || -1
      const page = +this.$route.query.page || 1
      const limit = +this.$route.query.limit || 10
      return {
        categoryId,
        page,
        limit
      }
    }
  },
  methods: {
    formatDate,
    async fetchData() {
      return await getBlogs(this.routeInfo.page, this.routeInfo.limit, this.routeInfo.categoryId)
    },
    handlePageChange(newPage) {
      //// console.log(newPage)  // 获得最新的页码
      // 跳转到 当前分类id 当前的页容量 newPage的页码
      //   /article?page=${newPage}&limit=${this.routeInfo.limit}
      //   /article/cate/${this.routeInfo.categoryId}?page=${newPage}&limit=${this.routeInfo.limit}
      // 这两个地址的传入的参数（query）都是相同的，直接提取出来
      const query = {
        page: newPage,
        limit: this.routeInfo.limit
      }
      if (this.routeInfo.categoryId === -1) {
        // 当前没有分类
        // 跳转到这个地址/article?page=${newPage}&limit=${this.routeInfo.limit}
        // 这里是难点，如何跳转界面？location.href？可以，但会刷新页面，而vue-router提供的router-link组件是a标签的形式点击实现跳转，有什么办法可以在代码中实现无刷新跳转呢？
        // 用 $router 用于控制页面跳转，编程式导航
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
            categoryId: this.routeInfo.categoryId
          }
        })
      }
    }
  },
  watch: {
    async $route() {
      this.isLoading = true
      // 滚动高度为0
      this.$refs.mainContainer.scrollTop = 0
      this.data = await this.fetchData()
      this.isLoading = false
    }
  }
}
</script>

<style scoped lang="less">
@import '~@/styles/var.less';
.blog-list-container {
  line-height: 1.7;
  position: relative;
  padding: 20px;
  overflow-y: scroll;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  scroll-behavior: smooth;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
}
li {
  display: flex;
  padding: 15px 0;
  border-bottom: 1px solid @gray;
  .thumb {
    flex: 0 0 auto;
    margin-right: 15px;
    img {
      display: block;
      max-width: 200px;
      border-radius: 5px;
    }
  }
  .main {
    flex: 1 1 auto;
    h2 {
      margin: 0;
    }
  }
  .aside {
    font-size: 12px;
    color: @gray;
    span {
      margin-right: 15px;
    }
  }
  .desc {
    margin: 15px 0;
    font-size: 14px;
  }
}
</style>
