import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'
import order from '@/views/order'
import cart from '@/views/cart'
import schedule from '@/views/schedule'
import form from '@/views/form'
import details from '@/views/details'
import register from '@/views/register'
import coupon from '@/views/coupon'
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
        name: 'coupon',
        component: coupon,
        meta: {
        title: '会员详情'
        }
    },
    {
        path: '/',
        name: 'details',
        component: details,
        meta: {
        title: '会员详情'
        }
    },
    {
        path: '/',
        name: 'register',
        component: register,
        meta: {
        title: '登录注册'
        }
    },
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
    },
    {
        path: '/',
        name: 'cart',
        component: cart,
        meta: {
        title: '购物车'
        }
    },
    {
        path: '/',
        name: 'schedule',
        component: schedule,
        meta: {
        title: '购物车'
        }
    },
    {
        path: '/',
        name: 'form',
        component: form,
        meta: {
        title: '支付'
        }
    }
    
]
})