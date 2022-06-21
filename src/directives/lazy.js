import eventBus from '@/eventBus'
import { debounce } from '@/utils'
import defaultGif from '@/assets/default.gif'

let imgs = [] // 待处理图片数组

function setImage(img) {
  img.dom.src = defaultGif // 先暂时使用默认图片
  // 处理图片
  // 该图片是否在视口范围内
  const clientHeight = document.documentElement.clientHeight // 视口高度
  const rect = img.dom.getBoundingClientRect()
  const height = rect.height || 150
  if (rect.top >= -height && rect.top <= clientHeight) {
    //在视口范围内，加载图片
    // const tempImg = new Image()
    // // 这里的tempImg是用来请求真实大图片用的，请求的图片进入缓存，到时候img元素设置src之后就会从缓存直接读取而不用远程加载
    // tempImg.onload = function () {
    //   // 绑定加载完成触发的事件
    //   // 当真实图片加载完成之后，由于有缓存，将url直接复制给真实的dom元素就可以了
    //   img.dom.src = img.src
    // }
    // tempImg.src = img.src
    img.dom.src = img.src
    // console.log('加载真实图片', img.dom)
    imgs = imgs.filter((i) => i !== img) // 加载完毕从待处理图片数组中移除图片
  }
}

// 希望，调用该函数就可以设置那些合适的图片
function setImages() {
  for (const img of imgs) {
    setImage(img)
  }
}

function handleScroll(dom) {
  setImages()
}

eventBus.$on('mainScroll', debounce(handleScroll, 50))

export default {
  // dom元素插入页面后才能拿到值，所以需要用inserted
  inserted(el, bindings) {
    const img = {
      dom: el,
      src: bindings.value
    }
    imgs.push(img)
    // 将该图片加入到imgs数组后，立即处理它
    setImage(img)
  },
  unbind(el) {
    imgs = imgs.filter((img) => {
      return img.dom !== el
    })
  }
}
