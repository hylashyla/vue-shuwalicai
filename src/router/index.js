import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import CurrentList from '@/pages/currentList'
import FixedList from '@/pages/fixedList'
import FundList from '@/pages/fundList'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/currentList',
      name: 'currentList',
      component: CurrentList
    },
    {
      path: '/fixedList',
      name: 'fixedList',
      component: FixedList
    },
    {
      path: '/fundList',
      name: 'fundList',
      component: FundList
    }
  ]
})
