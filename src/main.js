import Vue from 'vue'
import App from './App'
import axios from 'axios'
import qs from 'qs'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import router from './router'
import './rem.js';
import {post,fetch,patch,put} from './utils/http'


Vue.use(Mint)

Vue.config.productionTip = false
//定义全局变量
Vue.prototype.$post=post;
Vue.prototype.$fetch=fetch;
Vue.prototype.$patch=patch;
Vue.prototype.$put=put;

Vue.prototype.$axios = axios
Vue.prototype.qs = qs
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
