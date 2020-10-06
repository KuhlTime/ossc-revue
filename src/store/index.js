import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// import router from '@/router/router'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    moduleExtractResponse: undefined,
    loginURL: 'https://ossc.kuhlti.me/'
  },
  mutations: {
    updateModuleExtractResponse(state, data) {
      state.moduleExtractResponse = data
    }
  },
  getters: {
    isAuthorized(state) {
      return state.moduleExtractResponse !== undefined
    }
  },
  actions: {
    login({ commit, state }, user) {
      console.info(`Logging in: ${user.username}`)

      return new Promise((resolve, reject) => {
        axios
          .get(state.loginURL, {
            auth: {
              username: user.username,
              password: user.password
            }
          })
          .then(res => {
            commit('updateModuleExtractResponse', res.data)
            resolve()
          })
          .catch(err => {
            console.error(err)
            reject(err)
          })
      })
    }
  }
})

export default store
