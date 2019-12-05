import Vue from 'vue'
import Router from 'vue-router'
import order from '@/views/order'
Vue.use(Router)

export default new Router({
routes: [
{
path: '/',
name: 'order',
component: order,
}
]
})