import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'
import order from '@/views/order'
Vue.use(Router)
/**
 * 重写路由的push方法
 */
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}
export default new Router({
routes: [
    {
        path: '/',
        name: 'index',
        component: index,
        meta: {
            title: '首页'
        }
    },
    {
        path: '/',
        name: 'order',
        component: order,
        meta: {
        title: '点餐'
        }
    }
]
})