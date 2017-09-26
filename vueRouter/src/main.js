// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Page01 from './components/page01'
import Page02 from './components/page02'

Vue.use(VueRouter) // 全局安装路由功能

// 定义路径
const routes = [
  {path: '/page01', component: Page01},
  {path: '/page02', component: Page02}
]
// 创建路由对象
const router = new VueRouter({
  routes
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
