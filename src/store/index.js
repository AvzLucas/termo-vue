import { createStore } from 'vuex'

export default createStore({
  state: {
    wordSet : null,
    headerView : false,
    dailyWord : '',
    chances : 6,
    chance : 1
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
    },
    oneLessChance(state){
      state.chances = state.chances - state.chance
      state.chance++
      console.log(state.chance)
    }
  },
  actions: {
  },
  modules: {
  }
})
