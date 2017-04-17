import Vue from 'vue'
import Vuex from 'vuex'
import * as action from './action'
import * as getter from './getter'
import category from './modules/category'
import home from './modules/home'
import bookdetail from './modules/bookdetail'


// import createLogger from '../../../src/plugins/logger'

Vue.use(Vuex)

// const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  action,
  getter,
  modules: {
    category,
    home,
    bookdetail
  },
//   strict: debug,
//   plugins: debug ? [createLogger()] : []
})