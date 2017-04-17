import api from '../../api/index'
import * as types from '../mutation-type'

// initial state
const state = {
  categories: {}
}

// getters
const getters = {
  categories: state => state.categories
}

// actions
const actions = {
  getCategories ({ commit }) {
    api.getCategories(categories => {
      commit(types.GET_CATEGORIES, { categories })
    })
  }
}

// mutations
const mutations = {
  [types.GET_CATEGORIES] (state, { categories }) {
    state.categories = categories
    console.log(categories)
    
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}