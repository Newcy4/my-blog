<template>
  <div class="blog-comment-container">
    <MessageArea title="评论列表" :subTitle="`(${data.total})`" :list="data.rows" :isListLoading="isLoading" @submit="handleSubmit" />
  </div>
</template>

<script>
import MessageArea from '@/components/MessageArea'
import fetchData from '@/mixins/fetchData'
import { getComments, postComment } from '@/api/blog'
export default {
  mixins: [fetchData({ total: 0, rows: [] })],
  components: {
    MessageArea
  },
  data() {
    return {
      page: 1,
      limit: 10
    }
  },
  computed: {
    hasMore() {
      return this.data.rows.length < this.data.total
    }
  },
  created() {
    this.$bus.$on('mainScroll', this.handleScroll)
  },
  destroyed() {
    this.$bus.$off('mainScroll', this.handleScroll)
  },
  methods: {
    async fetchData() {
      return await getComments(this.$route.params.id, this.page, this.limit)
    },
    async fetchMore() {
      if (!this.hasMore) {
        // 没有更多了
        return
      }
      this.isLoading = true
      this.page++
      const resp = await this.fetchData()
      this.data.total = resp.total
      this.data.rows = this.data.rows.concat(resp.rows)
      this.isLoading = false
    },
    async handleScroll(dom) {
      if (this.isLoading || !dom) {
        // 目前正在加载更多
        return
      }
      const range = 100 // 定一个可接受的范围,在这个范围内都算到达了底部
      const dec = Math.abs(dom.scrollTop + dom.clientHeight - dom.scrollHeight)
      if (dec <= range) {
        // 到达了底部
        this.fetchMore()
      }
    },
    async handleSubmit(formData, callback) {
      // console.log(formData)
      // 提交评论，会返回最新评论的数据
      const resp = await postComment({
        blogId: this.$route.params.id,
        formData
      })
      // console.log(resp)
      // 将返回的数据插入到data.rows开头
      this.data.rows.unshift(resp)
      this.data.total++
      callback('评论成功') // 告诉子组件我这边处理完了，你继续
    }
  }
}
</script>

<style lang="less" scoped>
.blog-comment-container {
  margin: 30px 0;
}
</style>
