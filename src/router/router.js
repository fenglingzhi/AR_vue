import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const Home = resolve => require(['../views/Home.vue'],resolve);




var routerMaps = [
    {name:'Home',path:'/',component:Home,meta: { name:'home' }},
];

const router = new Router({
    routes:routerMaps
});

export default router
