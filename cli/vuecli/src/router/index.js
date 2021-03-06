import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import bb from '@/components/HI'
import bb1 from '@/components/HI1'
import bb2 from '@/components/HI2'

import dd1 from '@/components/display1'
import dd2 from '@/components/display2'

import pp from '@/components/params'

import Error from '@/components/Error'

import count from '@/components/count'

Vue.use(Router)

export default new Router({
  // hash
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/hi',
      name: 'HI',
      component: bb,
      children: [
        // {path:'/',component:bb},
        { path: 'hi1', component: bb1, name: '1111' },
        { path: 'hi2', component: bb2, name: '2222' },
      ]
    },
    {
      path: '/display',
      name: 'wwww',
      components: {
        default: bb,
        left: dd1,
        right: dd2,
      }
    },
    {
      // 支持正则，表示newsId为数字  path:'/params/:newsId(\\d+)/:newsTitle',
      path: '/params/:newsId/:newsTitle',
      component: pp,
      alias: '/uuu/:newsId/:newsTitle',
      beforeEnter: (to, from, next) => {
        console.log('我进入了params模板');
        console.log(to);
        console.log(from);
        next();
      }
    },
    {
      path: '/bwed/:newsId/:newsTitle',
      name: '444',
      redirect: '/params/:newsId/:newsTitle'
    },
    {
      path: '*',
      component: Error
    },
    {
      path: '/Vuex',
      component: count
    },
  ]
})
