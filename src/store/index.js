// 数据仓库模块
import Vue from 'vue'

// 为了优化项目，可以用具名导出来导出需要用到的部分
// import Vuex from 'vuex'
import { Store, install } from 'vuex'

import setting from './setting'
import banner from './banner'
import about from './about'
import project from './project'

// 看看是否是生产环境，生产环境通过script引入的vuex会产生一个Vuex全局变量，此时不需要注册插件
if (!window.Vuex) {
  // Vue.use(Vuex) // 应用vuex插件
  install(Vue) //vuex的安装插件函数
}

const store = new Store({
  // 仓库配置对象
  modules: {
    setting,
    banner,
    about,
    project
  },
  strict: true
})

// 方便测试
// window.store = store

export default store
