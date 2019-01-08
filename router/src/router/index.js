import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Mine from '@/components/mine'
import Release from '@/components/releases'
import Style from '@/components/styless'
import Renovation from '@/components/Renovation'
import Err from '@/components/error/error.vue'
import Shop from '@/components/shop'
import Register from '@/components/register'
import Login from '@/components/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
        path: '/register',
        name: 'register',
        component: Register,
        meta: {
          flag: false,
          requireAuth: true
        }
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
          flag: false,
          requireAuth: true
        }
    },
    {
      path: '/home',
      name: 'name',
      component: Home,
      meta: {
        //tab栏
        flag: true,
        //路由守卫
        requireAuth: true
      }
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine,
      meta: {
        //tab栏
        flag: true,
        //路由守卫
        requireAuth: true
      }
    },
    {
      path: '/release',
      name: 'release',
      component: Release,
      meta: {
        //tab栏
        flag: true,
        //路由守卫
        requireAuth: true
      }
    },
    {
      path: '/style',
      name: 'style',
      component: Style,
      meta: {
        //tab栏
        flag: true,
        //路由守卫
        requireAuth: true
      }
    },
    {
      path: '/renovation',
      name: 'renovation',
      component: Renovation,
      meta: {
        //tab栏
        flag: true,
        //路由守卫
        requireAuth: true
      }
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop,
      meta: {
        //tab栏
        flag: false,
        //路由守卫
        requireAuth: true
      }
    },
    {
      path:'**',
      component:Err
    }
    
  ]
})
