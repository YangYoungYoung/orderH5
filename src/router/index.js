import Vue from 'vue'
import Router from 'vue-router'
import center from '@/views/center'
Vue.use(Router)

export default new Router({
routes: [
{
path: '/',
name: 'center',
component: center,
} 
]
})