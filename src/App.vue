<template>
  <div id="app">
    <!-- 内容主视区 -->
    <router-view/>
    <!-- 内容主视区 -->
    <!-- 底部导航 -->
    <!--<BottomBar></BottomBar>-->
  </div>
</template>
<script>
import BottomBar from "./views/BottomBar"
import store from './store/store.js'
    export default {
        components : {
            BottomBar,
            store
        },
        data () {
            return {

            }
        },
        mounted() {
            if(localStorage.getItem('token')){
                store.commit('changeStore',{key:'token',val:localStorage.getItem('token')});
            }
            if(localStorage.getItem('id_cart')){
                store.commit('changeStore',{key:'id_cart',val:localStorage.getItem('id_cart')});
            }
        },
        methods: {

        }
    }
</script>
<style lang="scss">
  .van-collapse-item__content{
    overflow: auto;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
