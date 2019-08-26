import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const Home = resolve => require(['../views/Home.vue'],resolve);
const utilPage = resolve => require(['../views/utilPage.vue'],resolve);




var routerMaps = [
    {name:'Home',path:'/',component:Home,meta: { name:'home' }},
    // {name:'utilPage',path:'/utilPage',component:utilPage,meta: { name:'utilPage' }},
];

const router = new Router({
    routes:routerMaps
});

export default router
