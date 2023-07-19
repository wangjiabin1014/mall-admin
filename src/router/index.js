import Vue from 'vue'
import VueRouter from 'vue-router'
// 预加载
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'

import store from '../store/index.js'

import getMenuRoute from '../utils/permission.js'

Vue.use(VueRouter)

const asyncRouterMap = [
  {
    path: '/product',
    name: 'Product',
    mate: {
      title: '商品'
    },
    component: Home,
    children: [
      {
        path: 'list',
        name: 'ProductList',
        mate: {
          title: '商品列表'
        },
        component: () => import('../components/ProductList.vue')
      },
      {
        path: 'add',
        name: 'ProductAdd',
        mate: {
          title: '添加商品'
        },
        component: () => import('../components/ProductAdd.vue')
      },
      {
        path: 'category',
        name: 'Category',
        mate: {
          title: '类目管理'
        },
        component: () => import('../components/Category.vue')
      }
    ]
  }
]

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    mate: {
      title: '首页',
      hidden: false
    },
    children: [
      {
        path: 'index',
        name: 'Index',
        mate: {
          title: '统计'
        },
        // 懒加载
        component: () => import('../components/Index.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    mate: {
      title: '登录',
      hidden: true
    },
    component: Login
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

let isAddRoute = false
router.beforeEach((to, from, next) => {
  if (to.path !== '/login') {
    if (store.state.user.appkey && store.state.user.username && store.state.user.role) {
      if (!isAddRoute) {
        const menuRoutes = getMenuRoute(store.state.user.role, asyncRouterMap)
        router.addRoutes(menuRoutes)
        console.log(menuRoutes)
        store.dispatch('changeMenuRoutes', routes.concat(menuRoutes))
        isAddRoute = true
      }
      return next()
    }
    return next('/login')
  }
  return next()
})

export default router
