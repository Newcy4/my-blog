import loadingUrl from '@/assets/loading.svg'
import styles from './loading.module.less'

// 得到el中loading效果的img元素
function getLoadingImg(el) {
  return el.querySelector('img[data-role=loading]')
}

// 创建loading效果img元素
function createLoadingImg() {
  const img = document.createElement('img')
  img.dataset.role = 'loading'
  img.src = loadingUrl
  img.className = styles.loading
  return img
}

// 导出指令的配置对象(可以简写成一个函数)
export default function (el, binding) {
  // 创建一个img元素，放到el元素内部
  // 根据 binding.value 的值，决定创建或删除 img 元素
  const curImg = getLoadingImg(el) // 获取当前页面的loading img
  if (binding.value) {
    // 加载中
    // 判断页面是否存在Loading img
    if (!curImg) {
      const img = createLoadingImg()
      el.appendChild(img)
    }
  } else {
    // 非加载中
    // 判断当前页面是否有Loading img
    if (curImg) {
      curImg.remove()
    }
  }
}
