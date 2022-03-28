import { createStore } from 'vuex'

export default createStore({
  state: {
    wordSet : null,
    headerView : true,
  },
  getters: {
  },
  mutations: {
    loadWordSet(state, dataSet){
      state.wordSet = dataSet
    },
    headerToggle(state){
      state.headerView = !state.headerView
    },
    checkWord(state, word){
      let isWord = false
      for(let i in state.wordSet){
        if(word === state.wordSet[i]){
          isWord = true
        }
      }
      
    }
  },
  actions: {
  },
  modules: {
  }
})
