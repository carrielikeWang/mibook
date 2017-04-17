import * as types from '../mutation-type'

import api from '../../api/index'



// initial state
const state = {
  bookdetail: {}
}

// getters
const getters = {
  bookdetail: state => state.bookdetail
}

// actions
const actions = {
  getBookdetail ({ commit }, id) {
    api.getBookdetail(id, bookdetail => {
      commit(types.GET_CATEGORY, { bookdetail })
    })
  }
}

// mutations
const mutations = {
  [types.GET_CATEGORY] (state, { bookdetail }) {
    state.bookdetail = bookdetail
    console.log(bookdetail)
    
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}