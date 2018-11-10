import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import Index from '@/pages/Index'
import Trade from '@/pages/Trade'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path:'/index',
      name:'Index',
      component:Index
    },
    {
      path:'/trade',
      name:'Trade',
      component:Trade
    }
  ]
})
