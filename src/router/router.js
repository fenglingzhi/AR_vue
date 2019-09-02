import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const Home = resolve => require(['../views/Home.vue'],resolve);
// const utilPage = resolve => require(['../views/utilPage.vue'],resolve);
const BottomBar = resolve => require(['../views/BottomBar.vue'],resolve);
const SearchPage = resolve => require(['../components/SearchPage.vue'],resolve);
const PersonHistoryOrder = resolve => require(['../components/PersonHistoryOrder.vue'],resolve);
const PersonOrderDetail = resolve => require(['../components/PersonOrderDetail.vue'],resolve);
const ProductDetail = resolve => require(['../views/ProductDetail.vue'], resolve);
const Bag = resolve => require(['../views/Bag.vue'], resolve);
const CouponList = resolve => require(['../views/CouponList.vue'], resolve);
const SearchHot = resolve => require(['../components/SearchHot.vue'], resolve);
const Category = resolve => require(['../views/category.vue'], resolve);


const Collection = resolve => require(['../views/collection.vue'], resolve);


var routerMaps = [
    { name: 'Home', path: '/home', component: Home, meta: { name: 'home' } },
    // {name:'utilPage',path:'/utilPage',component:utilPage,meta: { name:'utilPage' }},
    {name:'BottomBar', path:'/BottomBar',component:BottomBar,meta:{name:'bottomBar'}},
    {name:'SearchPage', path:'/SearchPage',component:SearchPage,meta:{name:'searchPage'}},
    {name:'PersonHistoryOrder', path:'/PersonHistoryOrder',component:PersonHistoryOrder,meta:{name:'personHistoryOrder'}},
    {name:'PersonOrderDetail', path:'/PersonOrderDetail',component:PersonOrderDetail,meta:{name:'personOrderDetail'}},
    { name: 'ProductDetail', path: '/ProductDetail', component: ProductDetail, meta: { name: 'ProductDetail' } },
    { name: 'Bag', path: '/Bag', component: Bag, meta: { name: 'Bag' } },
    { name: 'CouponList', path: '/CouponList', component: CouponList, meta: { name: 'CouponList' } },
    { name: 'SearchHot', path: '/SearchHot', component: SearchHot, meta: { name: 'searchHot' } },
    { name: 'Category', path: '/Category', component: Category, meta: { name: 'Category' } },
    { name: 'Collection', path: '/Collection', component: Collection, meta: { name: 'Collection' } },

];

const router = new Router({
    routes: routerMaps
});

export default router
