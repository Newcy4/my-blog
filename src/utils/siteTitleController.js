// 控制网站标题的工具模块

let routeTitle = '',
  siteTitle = ''

function setTitle() {
  if (!routeTitle && !siteTitle) {
    document.title = 'loading...'
  } else if (routeTitle && !siteTitle) {
    document.title = routeTitle
  } else if (!routeTitle && siteTitle) {
    document.title = siteTitle
  } else {
    document.title = `${routeTitle}-${siteTitle}`
  }
}

export default {
  // 设置路由标题
  setRouteTitle(title) {
    // console.log('设置路由标题', title)
    routeTitle = title
    setTitle()
  },
  // 设置网站标题
  setSiteTitle(title) {
    // console.log('设置网站标题', title)
    siteTitle = title
    setTitle()
  }
}
