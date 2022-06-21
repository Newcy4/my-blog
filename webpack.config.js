const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

if (process.env.NODE_ENV === 'production') {
  module.exports = {
    // 打包结果分析插件
    plugins: [new BundleAnalyzerPlugin()],
    externals: {
      vue: 'Vue',
      vuex: 'Vuex',
      'vue-router': 'VueRouter',
      axios: 'axios'
    }
  }
} else {
  module.exports = {}
}
