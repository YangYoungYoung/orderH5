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
Vue.prototype.HOST= '/flask-api'
Vue.prototype.baseUrl= process.env.API_ROOT
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
