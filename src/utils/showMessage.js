import getComponentRootDom from './getComponentRootDom'
import Icon from '@/components/Icon'
import styles from './showMessage.module.less'

/**
 * 弹出消息
 * @param {String} content 消息内容
 * @param {String} type 消息类型 info error success warn
 * @param {Number} duration 多久后消失
 * @param {HTMLElement} container 容器，消息会显示到该容器的正中央，如果不穿则显示到页面正中
 */
export default function (options = {}) {
  const content = options.content || ''
  const type = options.type || 'info'
  const duration = options.duration || 2000
  const container = options.container || document.body
  // 创建消息元素
  const div = document.createElement('div')
  const iconDom = getComponentRootDom(Icon, { type })
  div.innerHTML = `<span class="${styles.icon}">${iconDom.outerHTML}</span><div>${content}</div>`
  // 设置样式
  div.className = `${styles.message} ${styles['message-' + type]}`
  // 将div加入容器中
  // 判断容器的position是否改动过，因为fixed想生效必须父元素非static定位
  if (container !== document.body && getComputedStyle(container).position === 'static') {
    container.style.position = 'relative'
  }

  container.appendChild(div)
  // 浏览器强行渲染（因为样式过渡需要一个状态到另一个状态，需要先把元素渲染到页面再该样式才有过渡效果）
  // 想让浏览器强行渲染一个元素只需要读取这个元素的位置、尺寸等等就可以导致reflow
  div.clientHeight
  // 回归到正常位置
  div.style.opacity = 1
  div.style.transform = `translate(-50%, -50%)`

  // 等一段时间，消失
  setTimeout(() => {
    div.style.opacity = 0
    div.style.transform = `translate(-50%, -50%) translateY(-25px)`
    // 监听div的过渡，结束之后就删掉元素，第三个参数是该事件只触发一次
    div.addEventListener(
      'transitionend',
      function () {
        div.remove()
        // 如果有回调函数，运行回调
        options.callback && options.callback()
      },
      { once: true }
    )
  }, duration)
}
