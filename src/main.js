// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
var axios = require('axios')
axios.defaults.baseURL = 'http://47.107.38.151:8080'
Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.use(iView)
/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
