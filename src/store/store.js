import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token:'',
    unshow:true,
    searchInput:'',
  },
  mutations: {
      changeStore(state,data){
          state[data.key] = data.val
      }
  },
  actions: {

  }
})
