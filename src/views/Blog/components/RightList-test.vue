<template>
  <div class="app-container">
    <RightList :list="list"></RightList>
  </div>
</template>

<script>
import Layout from '@/components/Layout'
import SiteAside from '@/components/SiteAside'
import RightList from '@/views/Blog/components/RightList.vue'

export default {
  components: {
    RightList
  },
  data() {
    return {
      list: [
        { name: 'a', isSelect: false },
        { name: 'b', isSelect: false },
        {
          name: 'c',
          isSelect: true,
          children: [
            { name: 'c-1', isSelect: false },
            {
              name: 'c-2',
              isSelect: false,
              children: [
                { name: 'c-2-1', isSelect: false },
                { name: 'c-2-2', isSelect: false },
                { name: 'c-2-3', isSelect: false }
              ]
            },
            { name: 'c-3', isSelect: false },
            { name: 'c-4', isSelect: false }
          ]
        },
        { name: 'd', isSelect: false },
        { name: 'e', isSelect: false }
      ]
    }
  },
  methods: {}
}
</script>
<style lang="less" scoped>
@import '@/styles/mixin.less';
.app-container {
  .self-fill(fixed); // 将页面固定定位占满
}
.aside {
  width: 250px;
  height: 100%;
}
</style>
