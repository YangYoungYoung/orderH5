import Vue from 'vue'
import App from './App'
import axios from 'axios'
import qs from 'qs'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import router from './router'
import './rem.js';
Vue.use(Mint)

Vue.config.productionTip = false

Vue.prototype.$axios = axios
Vue.prototype.qs = qs

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
