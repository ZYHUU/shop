// 入口文件
import Vue from 'vue'
import App from './App'
import router from './router'

// 导入 MUI样式
import './assets/mui/css/mui.css'

// 按需导入Mint-ui组件
// import {Header} from 'mint-ui'
// Vue.component(Header.name, Header)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
