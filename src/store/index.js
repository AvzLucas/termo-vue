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
      let index = Math.round(Math.random() * 2193)
      state.dailyWord = state.wordSet[index]
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
