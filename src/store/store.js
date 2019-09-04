import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token:'',
    unshow:true,
    access_token:'cb99f6e8efa4fe871e8eb4325c5ce50f',
    orderId:'',
    langID:'1',
    id_cart:'0',
    id_cart_not_login:'0',
    id_currency:'1',
    lang_id:'1'
  },
  mutations: {
      changeStore(state,data){
          state[data.key] = data.val
      }
  },
  actions: {

  }
})
