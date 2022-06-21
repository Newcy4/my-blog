<template>
  <Layout>
    <div ref="mainContainer" class="main-container" v-loading="isLoading">
      <BlogDetail :blog="data" v-if="data" class="markdown-body"></BlogDetail>
      <BlogComment v-if="!isLoading"></BlogComment>
    </div>
    <template #right>
      <div class="right-container" v-loading="isLoading">
        <BlogTOC :toc="data.toc" v-if="data"></BlogTOC>
      </div>
    </template>
  </Layout>
</template>

<script>
import fetchData from '@/mixins/fetchData'
import { getBlog } from '@/api/blog'
import Layout from '@/components/Layout'
import BlogDetail from './components/BlogDetail'
import BlogTOC from './components/BlogTOC'
import BlogComment from './components/BlogComment.vue'
import mainScroll from '@/mixins/mainScroll.js'
import { siteTitleController } from '@/utils'

export default {
  mixins: [fetchData(null), mainScroll('mainContainer')],
  components: {
    Layout,
    BlogDetail,
    BlogTOC,
    BlogComment
  },
  methods: {
    async fetchData() {
      let resp = await getBlog(this.$route.params.id)
      // resp = null // 404测试
      if (!resp) {
        // 文章不存在
        this.$router.push('/404')
        return
      }
      if (resp && resp.title) {
        siteTitleController.setRouteTitle(resp.title)
      }
      return resp
    }
  },
  updated() {
    // console.log('页面刷新啦')
    const hash = location.hash
    location.hash = ''
    setTimeout(() => {
      location.hash = hash
    }, 50)
  }
}
</script>

<style lang="less" scoped>
.main-container {
  overflow-y: scroll;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  overflow-x: hidden;
  scroll-behavior: smooth;
}
.right-container {
  width: 300px;
  height: 100%;
  overflow-y: scroll;
  box-sizing: border-box;
  position: relative;
  padding: 20px;
}
</style>
