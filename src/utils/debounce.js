// 函数防抖

export default function (fn, duration = 200) {
  let timer = null
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn(...args)
    }, duration)
  }
}
