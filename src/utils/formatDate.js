// 将时间戳格式化日期的函数，这么简单的一个需求就没必要引入moment这么大的库了

export default function (timestamp, showtime = false) {
  const date = new Date(+timestamp) // 确保timestamp为数字
  const month = (date.getMonth() + 1).toString().padStart(2, '0') //将月份转换为字符串，然后padStart函数确保字符串长度为2，不足2在开头填充0
  const day = date.getDate().toString().padStart(2, '0')
  let str = `${date.getFullYear()}-${month}-${day}`
  if (showtime) {
    const hour = date.getHours().toString().padStart(2, '0')
    const minute = date.getMinutes().toString().padStart(2, '0')
    const second = date.getSeconds().toString().padStart(2, '0')
    str += ` ${hour}:${minute}:${second}`
  }
  return str
}
