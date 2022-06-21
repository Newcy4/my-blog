import Vue from 'vue'
/**
 * 获取某个组件渲染的Dom根元素
 * @param {*} comp
 * @param {*} props
 * @returns
 */
export default function getComponentRootDom(comp, props) {
  const vm = new Vue({
    //生成vue实例
    render: (h) => h(comp, { props })
  })
  vm.$mount() // 挂载vue实例，不挂载的话生成不了真实的dom元素，这里只是做了挂载的行为，并没有把组件挂载到页面
  return vm.$el // 挂载完就有一个$el属性，里面就是渲染出来的的dom根元素
}
