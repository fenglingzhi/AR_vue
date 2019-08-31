/**
 * 依赖引入
 */
import Vue from 'vue' /* 声明vue */
import App from './App.vue'/* 引入App组件 */
import router from './router/router'/* 引入路由 */
import store from './store/store'/* 引入vuex状态管理 */
import config from './config.js' /* 全局状态管理 */
import Vant from 'vant' /* vantUI */
import 'vant/lib/index.css' /* vantUI */
import $ from 'jquery' /* jquery */
import axios from 'axios' /* 引入axios库处理http请求 */
import './assets/icon/iconfont.css' /* 引入iconfont字体库 */
import validate from 'vee-validate' /* 表单验证库 */
import md5 from 'js-md5';


import {getData,postData} from './config.js'


/**
 * 依赖全局调用
 * @type {boolean}
 */

Vue.use(Vant);
// Vue.use(config);
Vue.use(validate);
Vue.prototype.$md5 = md5;
Vue.prototype.$get=getData;
Vue.prototype.$post=postData
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
