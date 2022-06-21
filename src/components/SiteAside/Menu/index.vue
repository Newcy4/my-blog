<template>
  <nav class="menu-container">
    <!-- <a v-for="item in items" :key="item.link" :href="item.link" :class="{ selected: isSelect(item) }"> -->
    <router-link :exact="item.exact" v-for="item in items" :key="item.link" :to="{ name: item.name }">
      <div class="icon">
        <Icon :type="item.icon"></Icon>
      </div>
      <span>{{ item.title }}</span>
    </router-link>
  </nav>
</template>

<script>
import Icon from '@/components/Icon'
export default {
  components: {
    Icon
  },
  data() {
    return {
      items: [
        {
          name: 'Home',
          title: '首页',
          icon: 'home',
          exact: true // 激活状态是否要精确匹配
        },
        {
          name: 'Blog',
          title: '文章',
          icon: 'blog',
          exact: false // 文章不需要精确匹配
        },
        {
          name: 'About',
          title: '关于我',
          icon: 'about',
          exact: true
        },
        {
          name: 'Project',
          title: '项目&效果',
          icon: 'code',
          exact: true
        },
        {
          name: 'Message',
          title: '留言板',
          icon: 'chat',
          exact: true
        }
      ]
    }
  },
  methods: {}
}
</script>

<style lang="less" scoped>
@import '@/styles//var.less';
.menu-container {
  color: @gray;
  margin: 24px 0;
  a {
    display: block;
    padding: 0 50px;
    display: flex;
    align-items: center;
    height: 45px;
    .icon {
      width: 24px;
    }
    &:hover {
      color: #fff;
    }
    &.router-link-active {
      background: darken(@words, 1%);
    }
  }
}
</style>
