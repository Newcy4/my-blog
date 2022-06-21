import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/styles/global.less'
// 导入mock模拟数据
import './mock'
import './eventBus'

// 一开始就加载全局网站配置
store.dispatch('setting/fetchSetting')

import { showMessage } from './utils'
// 因为弹出消息这个方法导出都有可能用到，因此直接挂载到全局vue上
Vue.prototype.$showMessage = showMessage

// 注册全局指令
import vLoading from '@/directives/loading'
Vue.directive('loading', vLoading)
import vLazy from '@/directives/lazy'
Vue.directive('lazy', vLazy)

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
