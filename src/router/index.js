import Vue from 'vue'
import VueRouter from 'vue-router'
// 预加载

import store from '../store/index.js'

import getMenuRoute from '../utils/permission.js'

Vue.use(VueRouter)

const asyncRouterMap = [
  {
    path: '/product',
    name: 'Product',
    mate: {
      title: '商品',
      hidden: false,
      icon: 'inbox'
    },
    component: () => import('../views/Home.vue'),
    children: [
      {
        path: 'list',
        name: 'ProductList',
        mate: {
          title: '商品列表',
          hidden: false,
          icon: 'unordered-list'
        },
        component: () => import('../components/ProductList.vue')
      },
      {
        path: 'add',
        name: 'ProductAdd',
        mate: {
          title: '添加商品',
          hidden: false,
          icon: 'file-add'
        },
        component: () => import('../components/ProductAdd.vue')
      },
      {
        path: 'category',
        name: 'Category',
        mate: {
          title: '类目管理',
          hidden: false,
          icon: 'project'
        },
        component: () => import('../components/Category.vue')
      }
    ]
  }
]


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    mate: {
      title: '首页',
      hidden: false,
      icon: 'home'
    },
    children: [
      {
        path: 'index',
        name: 'Index',
        mate: {
          title: '统计',
          hidden: false,
          icon: 'number'
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
    component: () => import('../views/Login.vue')
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
        store.dispatch('changeMenuRoutes', routes.concat(menuRoutes)).then(() => {
          router.addRoutes(menuRoutes)
          next()
        })
        isAddRoute = true
      }
      return next()
    }
    return next('/login')
  }
  return next()
})

export default router
