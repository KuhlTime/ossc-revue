import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from '@/store'
import VueScreen from 'vue-screen'

import './extensions'

import 'normalize.css'
import i18n from './i18n'

Vue.config.productionTip = false

Vue.use(VueScreen)

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
