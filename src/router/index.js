import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/tabbar/home.vue'
import member from '../components/tabbar/member.vue'
import shoppingCar from '../components/tabbar/shoppingCar.vue'
import search from '../components/tabbar/search.vue'
import newsList from '../components/news/newsList.vue'
import newsInfo from '../components/news/newsinfo.vue'
Vue.use(Router)

export default new Router({
  linkActiveClass:  'mui-active',
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', name: 'home', component: home },
    { path: '/member', name: 'member', component: member },
    { path: '/shoppingCar', name: 'shoppingCar', component: shoppingCar },
    { path: '/search', name: 'search', component: search },
    { path: '/home/newsList', name: 'newsList', component: newsList },
    { path: '/home/newsinfo/:id', name: 'newsinfo', component: newsInfo }
  ]
})
