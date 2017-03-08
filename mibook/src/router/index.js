import Vue from 'vue'
import Router from 'vue-router'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'

import Home from '@/components/Home'
import BookDetail from '@/components/BookDetail'
import Bookshelf from '@/components/Bookshelf'



Vue.use(Router)
Vue.use(MuseUI)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/bookdetail',
      name: 'BookDetail',
      component: BookDetail
    },
    {
      path: '/bookshelf',
      name: 'Bookshelf',
      component: Bookshelf
    }
  ]
})
