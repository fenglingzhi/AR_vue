import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

      token:'',
      unshow:true,
      defaultData:{
        sign:'',
        tamp:'',
        phone_type:'3',
        mobile_version:'1.0.0',
        id_currency:'6',
      },
      access_token:'cb99f6e8efa4fe871e8eb4325c5ce50f',
      collection_id:''
  },
  mutations: {
      changeStore(state,data){
          state[data.key] = data.val
      }
  },
  actions: {

  }
})
