import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token:'',
    unshow:true,
    historyword:"",
    access_token:'42a7759723164462acf9f33ece622c08',
    // access_token:'42a7759723164462acf9f33ece622c08',
    id_order:'',
    langID:'1',
    id_currency:'1',
    lang_id:'1',
    product_id:'',
    collection_id: '',
    id_cart:'',
    photo:require('@/assets/img/personal/user_img.png')
  },
  mutations: {
    changeStore(state, data) {
      state[data.key] = data.val
    }
  },
  actions: {
    changeStore(state,data){
        state[data.key] = data.val
    }

  }
})
