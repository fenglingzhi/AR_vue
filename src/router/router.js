import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const Home = resolve => require(['../views/Home.vue'],resolve);
const utilPage = resolve => require(['../views/utilPage.vue'],resolve);
const HomeEnglish = resolve => require(['../views/HomeEnglish.vue'],resolve);
const BottomBar = resolve => require(['../views/BottomBar.vue'],resolve);
const checkout = resolve => require(['../views/checkout.vue'],resolve);



var routerMaps = [
    {name:'Home',path:'/home',component:Home,meta: { name:'home' }},
    {name:'HomeEnglish',path:'/homeEnglish',component:HomeEnglish,meta:{ name:'homeEnglish'}},
    // {name:'utilPage',path:'/utilPage',component:utilPage,meta: { name:'utilPage' }},
    {name:'BottomBar', path:'/BottomBar',component:BottomBar,meta:{name:'bottomBar'}},
    {name:'checkout', path:'/checkout',component:checkout,meta:{name:'checkout'}},

];

const router = new Router({
    routes:routerMaps
});

export default router
