import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routers'
import { siteTitleController } from '@/utils'

// 看看是否是生产环境，生产环境通过script引入的vuex会产生一个VueRouter全局变量，此时不需要注册插件
if (!window.VueRouter) {
  // 注册VueRouter插件
  Vue.use(VueRouter)
}

const router = new VueRouter({
  routes,
  mode: 'history'
})

// 后置导航守卫，跳转过去之后进行更改页面标题的操作
router.afterEach((to, from) => {
  // console.log(to.meta.title)
  if (to.meta.title) {
    siteTitleController.setRouteTitle(to.meta.title)
  }
})

export default router
