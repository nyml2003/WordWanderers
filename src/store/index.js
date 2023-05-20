
import { createStore } from 'vuex'

export default createStore({
  state: {
    user:{
      id:null,
      user_name:null,
      avatar:null,
    },
    isLogin:false
  },
  getters: {
  },
  mutations: {
    setUser(state, user) {
      state.user = user
      state.isLogin = true
    },
    Register(state,responce){
      state.user.id=responce.id
      state.user.user_name=responce.user_name
    },
    setAvatar(state,avatar){
      state.user.avatar=avatar
    },
    setUser_name(state,user_name){
      state.user.user_name=user_name
    }
  },
  actions: {
  },
  modules: {
  }
})
