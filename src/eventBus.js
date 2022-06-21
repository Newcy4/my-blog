// 事件总线eventBus
// 可以做到：
// 1. 提供监听某个事件的接口
// 2. 提供取消监听的接口
// 3. 触发事件的接口（可传递数据）
// 4. 触发事件后会自动通知监听者

// 我们可以把事件总线做成这种结构
/* 到时候只需要监听对应事件，把对应运行函数都运行一遍就可以了
** 需要移除监听就将事件从对象里面移除就完事了
{
  'event1': [ handler1, handler2 ],
  'event2': [ handler1, handler2 ],
}
*/

// 方法1：自己写代码实现
// const listeners = {}
// export default {
//   // 监听某一个事件（事件名，处理函数）
//   $on(eventName, handler) {
//     if (!listeners[eventName]) {
//       listeners[eventName] = new Set() // 使用ES6的Set避免重复
//     }
//     listeners[eventName].add(handler)
//   },
//   // 取消监听
//   $off(eventName, handler) {
//     if (!listeners[eventName]) {
//       return
//     }
//     listeners[eventName].delete(handler)
//   },
//   // 触发事件 -> 自动通知监听者
//   $emit(eventName, ...args) {
//     if (!listeners[eventName]) {
//       return
//     }
//     for (const handler of listeners[eventName]) {
//       handler(...args)
//     }
//   }
// }

// 方法2：直接导出一个空的Vue实例作为事件总线（Vue身上就有$on,$off,$emit）
// 效果和方法1是一样的
import Vue from 'vue'

const app = new Vue({})

/**
 * 事件名：mainScroll
 * 含义：主区域滚动条位置变化后触发
 * 参数：
 * - 滚动的dom元素,如果是undefined，则表示dom元素已经不存在了
 *
 * 事件名：setMainScroll
 * 含义： 当需要设置主区域滚动条位置时触发
 */

// 直接放在Vue的原型上
Vue.prototype.$bus = app

export default app
