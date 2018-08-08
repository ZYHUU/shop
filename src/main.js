// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './assets/MUI/css/mui.min.css'
import './assets/fa/css/font-awesome.min.css'
import './style/main.css'
import axios from 'axios'
import moment from 'moment'
import VuePreview from 'vue-preview'
axios.defaults.baseURL = 'http://www.liulongbin.top:3005'
Vue.prototype.axios = axios
Vue.use(MintUI)
Vue.use(VuePreview)
Vue.filter('fmTime', function (date,fmt) {
  return moment(date).format(fmt)
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
