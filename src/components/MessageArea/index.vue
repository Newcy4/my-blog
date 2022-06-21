<template>
  <div class="message-area-container">
    <!-- v-on可以绑定一个对象，$listeners是包含父组件身上所有事件处理函数的一个对象 -->
    <DataForm v-on="$listeners" />
    <h3>
      {{ title }}
      <span>{{ subTitle }}</span>
    </h3>
    <DataList :list="list" />
    <div class="loading" v-loading="isListLoading"></div>
  </div>
</template>

<script>
import DataForm from './DataForm'
import DataList from './DataList'
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    subTitle: {
      type: String,
      default: ''
    },
    list: {
      type: Array,
      default: () => []
    },
    isListLoading: {
      type: Boolean,
      default: false
    }
  },
  components: {
    DataForm,
    DataList
  }
}
</script>

<style scoped lang="less">
.loading {
  position: relative;
  height: 100px;
}
</style>
