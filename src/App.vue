<template>
  <div id="app">
    <!-- 内容主视区 -->
    <router-view/>
    <!-- 内容主视区 -->
    <!-- 底部导航 -->
    <BottomBar></BottomBar>
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
            this.md5()
        },
        methods: {
            md5(){
                let date = new Date().getTime().toString();
                store.state.defaultData.sign = this.$md5(date + '安全码');
                store.state.defaultData.tamp = date;
                console.log('md5',store.state.defaultData.sign)
            }
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
