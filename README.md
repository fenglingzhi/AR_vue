##### 项目启动

> npm install 安装项目依赖

> npm run serve 本地启动

> npm run build 项目打包


##### main.js
``` javascript
/* 依赖引入 */
import Vue from 'vue' /* 声明vue */
import App from './App.vue'/* 引入App组件 */
import router from './router'/* 引入路由 */
import store from './store/store'/* 引入vuex状态管理 */
import config from './config.js' /* 全局状态管理 */
import vant from 'vant' /* vantUI */
import $ from 'jquery' /* jquery */

/* 依赖全局调用 */
Vue.use(config);
Vue.use(vant);
Vue.use($);

```
### 三、引用库
 * vant-ui
> https://youzan.github.io/vant/#/zh-CN/quickstart

* vuex
> https://vuex.vuejs.org/zh-cn/intro.html


