import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 1
  },
  getters: {
    doneTodos: state => {
      return (state.count) + 10
    }
  },
  mutations: {
    increment (state) {
      // 变更状态
      state.count++
    },
    decrease (state) {
      state.count--
    }
  },
  actions: {
    increment (context) {
      context.commit('increment')
    },
    decrease (context) {
      context.commit('decrease')
    }
  }
})
