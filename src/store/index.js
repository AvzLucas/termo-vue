import { createStore } from 'vuex'

export default createStore({
  state: {
    wordSet : null,
    headerView : true,
    dailyWord : ''
  },
  getters: {
  },
  mutations: {
    loadWordSet(state, dataSet){
      state.wordSet = dataSet
    },
    headerToggle(state){
      state.headerView = !state.headerView
    }
  },
  actions: {
  },
  modules: {
  }
})
