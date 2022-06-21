<template>
  <div class="site-aside-container">
    <template v-if="data">
      <div class="avatar">
        <Avatar :url="data.avatar"></Avatar>
      </div>
      <h1 class="title">{{ data.siteTitle }}</h1>
      <Menu></Menu>
      <Contact></Contact>
      <p class="footer">{{ data.icp }}</p>
    </template>
  </div>
</template>

<script>
import Avatar from '@/components/Avatar'
import Contact from '@/components/SiteAside/Contact'
import Menu from '@/components/SiteAside/Menu'
import { mapState } from 'vuex'

export default {
  components: {
    Avatar,
    Contact,
    Menu
  },
  computed: {
    ...mapState('setting', ['data'])
  }
}
</script>

<style lang="less" scoped>
@import '@/styles//var.less';
.site-aside-container {
  width: 100%;
  height: 100%;
  background: @dark;
  padding: 20px 0;
  box-sizing: border-box; // 由于写了height100%，想padding生效就需要这个
  overflow-x: hidden;
  overflow-y: auto; // 纵向如果超出就出现滚动条
  .avatar {
    text-align: center;
  }
  .footer {
    text-align: center;
    font-size: 12px;
  }
  .title {
    color: #cecece;
    font-size: 1.2em;
    text-align: center;
  }
}
</style>
