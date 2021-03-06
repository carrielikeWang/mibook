import Vue from 'vue'
// import Vuex from 'vuex'
import Router from 'vue-router'
import MuseUI from 'muse-ui'
import VueResource from 'vue-resource'
import 'muse-ui/dist/muse-ui.css'

import Home from '@/components/pages/Home'
import BookDetail from '@/components/pages/BookDetail'
import Bookshelf from '@/components/pages/Bookshelf'
import Search from '@/components/pages/Search'
import Category from '@/components/pages/Category'



Vue.use(VueResource)
Vue.use(Router)
// Vue.use(Vuex)
Vue.use(MuseUI)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/bookshelf',
      name: 'Bookshelf',
      component: Bookshelf
    },
     {
      path: '/bookdetail',
      name: 'BookDetail',
      component: BookDetail
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/category',
      name: 'Category',
      component: Category
    }
  ]
})
