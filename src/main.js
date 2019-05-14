/**
 * 依赖引入
 */
import Vue from 'vue' /* 声明vue */
import App from './App.vue'/* 引入App组件 */
import router from './router/router'/* 引入路由 */
import store from './store/store'/* 引入vuex状态管理 */
import config from './config.js' /* 全局状态管理 */
import vant from 'vant' /* vantUI */
import $ from 'jquery' /* jquery */
import axios from 'axios' /* 引入axios库处理http请求 */

/**
 * 依赖全局调用
 * @type {boolean}
 */
Vue.use(config);


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
