import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const Home = resolve => require(['../views/Home.vue'],resolve);
const utilPage = resolve => require(['../views/utilPage.vue'],resolve);
const BottomBar = resolve => require(['../views/BottomBar.vue'],resolve);
const SearchHot = resolve => require(['../components/SearchHot.vue'],resolve);




var routerMaps = [
    {name:'Home',path:'/',component:Home,meta: { name:'home' }},
    // {name:'utilPage',path:'/utilPage',component:utilPage,meta: { name:'utilPage' }},
    {name:'BottomBar', path:'/BottomBar',component:BottomBar,meta:{name:'bottomBar'}},
    {name:'SearchHot', path:'/SearchHot',component:SearchHot,meta:{name:'searchHot'}},
];

const router = new Router({
    routes:routerMaps
});

export default router
