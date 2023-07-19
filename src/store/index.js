import Vue from 'vue'
import Vuex from 'vuex'
import { setCookie, getUserCookie, removeUserCookie } from '@/utils/userCookie'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 用于切换菜单
    collapsed: false,
    // 用户信息
<<<<<<< HEAD
    user: getUserCookie(),
    // 存储菜单的路由
    menuRoutes: [],
=======
    user: getUserCookie()
>>>>>>> 4e95d7ebd4bcd59e07dd1f6a7a5db08a47976514
  },
  mutations: {
    changeCollapsed(state) {
      state.collapsed = !state.collapsed
    },
    setUserInfo(state, userInfo) {
      state.user = userInfo
    },
    logout(state) {
      state.user = {
        username: '',
        appkey: '',
        role: '',
        email: ''
      }
<<<<<<< HEAD
    },
    changeMenuRoutes(state, routes){
      state.menuRoutes = routes
=======
>>>>>>> 4e95d7ebd4bcd59e07dd1f6a7a5db08a47976514
    }
  },
  actions: {
    changeCollapsed({ commit }) {
      commit('changeCollapsed')
    },
    setUserInfo({ commit }, userInfo) {
      commit('setUserInfo', userInfo)
      setCookie(userInfo)
    },
    logout({ commit }) {
      commit('logout')
      removeUserCookie()
<<<<<<< HEAD
    },
    changeMenuRoutes({commit}, routes){
      commit('changeMenuRoutes', routes)
=======
>>>>>>> 4e95d7ebd4bcd59e07dd1f6a7a5db08a47976514
    }
  },
  modules: {
  }
})
