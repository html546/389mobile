import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import Index from '@/pages/Index'
import Trade from '@/pages/Trade'
import Team from '@/pages/Team'
import Mine from '@/pages/Mine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/trade',
      name: 'Trade',
      component: Trade
    },
    {
      path: '/team',
      name: 'Team',
      component: Team
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    }
  ]
})
