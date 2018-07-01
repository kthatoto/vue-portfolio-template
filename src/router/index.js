import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/Top'
import Works from '@/components/Works'
import Work from '@/components/Work'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Top',
      component: Top
    },
    {
      path: '/works',
      name: 'Works',
      component: Works
    },
    {
      path: '/works/:workId',
      name: 'Work',
      component: Work
    }
  ]
})
