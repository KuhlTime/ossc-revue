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
    passedExams(state, getters) {
      return getters.passedModules.map(module => module.exams[0])
    },
    averageGrade(state, getters) {
      const sum = getters.passedExams.reduce((a, b) => a + b.grade, 0)
      return sum / getters.passedExams.length
    },
    totalCreditPoints(state, getters) {
      return getters.passedModules.reduce((a, b) => a + b.creditPoints, 0)
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
