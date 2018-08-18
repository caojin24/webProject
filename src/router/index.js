import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/storeTest'
import Home from '@/components/home'
import Hot from '@/components/hot'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/storeTest',
      name: 'storeTest',
      component: HelloWorld
    },
    {
      path: '/',
      component: Home,
      redirect: '/hot',
      children: [
        {
          path: '/hot',
          component: Hot
        }
      ]
    }
  ]
})
