import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import UserData from '@/components/mine/userData.vue'
import Cart from '@/components/mine/cart.vue'
import Favorite from '@/components/mine/favorite.vue'
import Order from '@/components/mine/order'
import Release from '@/components/releases'
import Style from '@/components/styless'
import Renovation from '@/components/Renovation'
import Err from '@/components/error/error.vue'


import Shopdetails from '@/components/shop/components/goods_details_j'

import Shophome from '@/components/shop/components/shophome'
import Hotlist from '@/components/shop/components/shophome/components/main.vue'
import Alllist from '@/components/shop/components/shophome/components/wholemain.vue'

import Checkstand from '@/components/shop/components/checkstand'
import Confirm from '@/components/shop/components/confirmorder'
import Viewphoto from '@/components/shop/components/viewphoto_g'
import Address from '@/components/shop/components/address'



import Register from '@/components/register'
import Login from '@/components/login'
import Welcome from '@/components/welcome'
import Shopserver from '@/components/shop/components/server_j'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/register'
    },
    {
        path: '/welcome',
        name: 'welcome',
        component: Welcome,
        meta: {
          flag: false,
          requireAuth: true
        }
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
      component: ()=>import('@/components/Mine'),
      meta: {
        //tab栏
        flag: true,
        //路由守卫
        requireAuth: true
      }
    },
    {
      path: '/mine/cart',
      component: Cart,
      meta: {
        flag:false
      }
    },
    {
      path: '/mine/userData',
      component: UserData,
      meta: {
        flag:false
      }
    },
    {
      path: '/mine/favorite',
      component: Favorite,
      meta: {
        flag:false
      }
    },
    {
      path: '/mine/order',
      component: Order,
      name: 'order',
      meta: {
        flag:false
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
      path: '/shop/goodsdetails',
      name: 'Shopdetails',
      component: Shopdetails,
      meta: {
        //tab栏
        flag: false,
        //路由守卫
        requireAuth: true
      }
    },
     {
       path: '/shop/shopserver',
       name: 'Shopserver',
       component: Shopserver,
       meta: {
         //tab栏
         flag: false,
         //路由守卫
         requireAuth: true
       }
     },
    {
      path: '/shop/shophome',
      name: 'shophome',
      redirect:'/shop/shophome/hotlist',
      component: Shophome,
      meta: {
        //tab栏
        flag: false,
        //路由守卫
        requireAuth: true
      },
      children:[
		     {
		      path: '/shop/shophome/hotlist',
		      name: 'hotlist',
		      component: Hotlist,
		      meta: {
		        //tab栏
		        flag: false,
		        //路由守卫
		        requireAuth: true
		      }
		    }, 
		    {
		      path: '/shop/shophome/alllist',
		      name: 'alllist',
		      component: Alllist,
		      meta: {
		        //tab栏
		        flag: false,
		        //路由守卫
		        requireAuth: true
		      }
		    },
      ]
    },
   
    {
      path: '/shop/checkstand',
      name: 'checkstand',
      component: Checkstand,
      meta: {
        //tab栏
        flag: false,
        //路由守卫
        requireAuth: true
      }
    },
    {
      path: '/shop/confirm',
      name: 'confirm',
      component: Confirm,
      meta: {
        //tab栏
        flag: false,
        //路由守卫
        requireAuth: true
      }
    },
    {
      path: '/shop/viewphoto',
      name: 'viewphoto',
      component: Viewphoto,
      meta: {
        //tab栏
        flag: false,
        //路由守卫
        requireAuth: true
      }
    },
    {
      path: '/shop/address',
      name: 'address',
      component: Address,
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

export default router;
