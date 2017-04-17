import * as types from '../mutation-type'

import api from '../../api/index'



// initial state
const state = {
  category: {}
}

// getters
const getters = {
  category: state => state.category
}

// actions
const actions = {
  getCategory ({ commit }, id) {
    api.getCategory(id, category => {
      commit(types.GET_CATEGORY, { category })
    })
  }
}

// mutations
const mutations = {
  [types.GET_CATEGORY] (state, { category }) {
    state.category = category
    console.log(category)
    
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}