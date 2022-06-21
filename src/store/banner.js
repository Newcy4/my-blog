import { getBanners } from '@/api/banner'

export default {
  namespaced: true, // 开启命名空间
  state: {
    loading: false,
    data: []
  },
  mutations: {
    setLoading(state, payload) {
      state.loading = payload
    },
    setData(state, payload) {
      state.data = payload
    }
  },
  actions: {
    async fetchBanner(ctx) {
      // 判断是否加载过数据，如果数组非空就不用再获取数据了
      if (ctx.state.data.length) {
        return
      }
      ctx.commit('setLoading', true)
      const resp = await getBanners()
      ctx.commit('setData', resp)
      ctx.commit('setLoading', false)
    }
  }
}
