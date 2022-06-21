<template>
  <div class="blog">
    <Layout>
      <BlogList></BlogList>
      <template #right>
        <BlogCategory></BlogCategory>
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from '@/components/Layout'
import BlogList from './components/BlogList.vue'
import BlogCategory from './components/BlogCategory.vue'

export default {
  components: {
    Layout,
    BlogList,
    BlogCategory
  },
  data() {
    return {
      categoryId: this.$route.params.categoryId
    }
  }
}
</script>

<style lang="less" scoped>
.blog {
  height: inherit;
}
</style>
