<template>
  <div id="app">
    <!-- 内容主视区 -->
    <router-view/>
    <!-- 内容主视区 -->
    <!-- 底部导航 -->
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

        },
        methods: {

        }
    }
</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
