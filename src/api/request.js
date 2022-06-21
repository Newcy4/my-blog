// 封装了请求的通用逻辑
// code为0，返回data
// code不为0，弹窗msg消息并返回null
import axios from 'axios'
import { showMessage } from '@/utils'

// 创建一个axios实例，这个实例有着axios所有功能
const ins = axios.create()
// 定义一个响应拦截器，请求的结果会被拦截器定义的函数处理过后再将结果原封不动返回
// 适合将一些通用逻辑定义在拦截器的函数里面，每次发起请求就运行
ins.interceptors.response.use(function (resp) {
  if (resp.data.code !== 0) {
    showMessage({
      content: resp.data.msg,
      type: 'error'
    })
    return null
  }
  return resp.data.data
})

export default ins
