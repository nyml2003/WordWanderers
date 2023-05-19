
import { createStore } from 'vuex'

export default createStore({
  state: {
    user:null,
    isLogin:false
  },
  getters: {
  },
  mutations: {
    setUser(state, user) {
      state.user = user
      state.isLogin = true
    }
  },
  actions: {
  },
  modules: {
  }
})
