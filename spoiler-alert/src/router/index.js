import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/views/HomePage'
import Pantry from '@/views/Pantry'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },{
      path: '/pantry',
      name: 'Pantry',
      component: Pantry
    }
  ]
})
