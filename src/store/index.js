import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    moduleExtractResponse: undefined,
    url: 'https://api.kuhlti.me/ossc/modules'
  },
  mutations: {
    updateModuleExtractResponse(state, data) {
      state.moduleExtractResponse = data
    }
  },
  getters: {
    isAuthorized(state) {
      return state.moduleExtractResponse !== undefined
    },
    moduleExtractResponseData(state) {
      return state.moduleExtractResponse.data
    },
    modules(state, getters) {
      return getters.moduleExtractResponseData.modules
    },
    student(state, getters) {
      return getters.moduleExtractResponseData.student
    },
    passedModules(state, getters) {
      return getters.modules.filter(module => module.exams.find(ex => ex.passed))
    },
    averageGrade(state) {
      return state.moduleExtractResponse.data.avgGrade
    },
    totalCreditPoints(state) {
      return state.moduleExtractResponse.data.totalCreditPoints
    }
  },
  actions: {
    login({ commit, state }, user) {
      console.info(`Logging in: ${user.username}`)

      return new Promise((resolve, reject) => {
        axios
          .get(state.url, {
            auth: {
              username: user.username,
              password: user.password
            }
          })
          .then(res => {
            const data = res.data
            commit('updateModuleExtractResponse', data)
            console.log('Recieved Data')
            console.dir(data)
            resolve()
          })
          .catch(err => {
            console.error(err)
            alert(err.message)
            reject(err)
          })
      })
    }
  }
})

export default store
