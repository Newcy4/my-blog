<template>
  <ul class="right-list-container">
    <li v-for="(item, i) in list" :key="i">
      <span @click="handleClick(item)" :class="{ active: item.isSelect }">{{ item.name }}</span>
      <span v-if="item.aside" @click="handleClick(item)" class="aside" :class="{ active: item.isSelect }">{{ item.aside }}</span>
      <!-- 显示当前组件 -->
      <!-- 这里@select="handleClick"很巧妙，因为递归的子组件无法处理，因此点击之后会一层层网上抛 -->
      <!-- 这里需要重点理解一下这个@select="handleClick" -->
      <RightList :list="item.children" @select="handleClick"></RightList>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'RightList',
  props: {
    // [{ name: 'xxx', isSelect:true,  children:[{ name: 'xxx', isSelect:false, children:[...] }] }]
    list: {
      type: Array,
      default: () => [] //默认值是空数组或对象的需要写一个函数返回值是空数组或对象
    }
  },
  methods: {
    handleClick(item) {
      // console.log(item)
      if (!item.isSelect) {
        this.$emit('select', item)
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import '@/styles/var.less';
.right-list-container {
  // 最外层ul没有margin
  list-style: none;
  padding: 0;
  .right-list-container {
    margin-left: 1em;
  }
  li {
    min-height: 40px; // 不能设置height，li的height和line-height有冲突，具体可以网上查，需要min-height才可以
    line-height: 40px;
    cursor: pointer;
    .active {
      font-size: bold;
      color: @warn;
    }
  }
}
.aside {
  font-size: 12px;
  margin-left: 1em;
  color: @gray;
}
</style>
