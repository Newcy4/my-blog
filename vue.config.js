const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  // 模拟真实开发中存在后台测试服务器的场景，使用代理请求测试服务器数据
  devServer: {
    proxy: {
      '/api': {
        target: 'http://test.my-site.com'
      }
    }
  },
  // 配置该Vue项目webpack打包结果
  configureWebpack: require('./webpack.config')
})
