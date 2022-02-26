import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import bb from '@/components/HI'
// import bb1 from '@/components/HI1'
// import bb2 from '@/components/HI2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/hi',
      name: 'HI',
      component: bb
    }
  ]
})
