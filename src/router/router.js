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
const Bag = resolve => require(['../views/bag.vue'], resolve);
const CouponList = resolve => require(['../views/CouponList.vue'], resolve);
const SearchHot = resolve => require(['../components/SearchHot.vue'], resolve);
const Category = resolve => require(['../views/category.vue'], resolve);


const Collection = resolve => require(['../views/collection.vue'], resolve);

const Login = resolve => require(['../views/login.vue'], resolve);
const wishlist = resolve => require(['../views/wishlist.vue'], resolve);
const Faq = resolve => require(['../views/faq.vue'], resolve);
const FaqDetails = resolve => require(['../views/faqDetails.vue'], resolve);
const FaqSearchResult = resolve => require(['../views/faqSearchResult.vue'], resolve);
const fogetPwd = resolve => require(['../views/fogetPwd.vue'], resolve);


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

    {name:'SearchHot', path:'/SearchHot',component:SearchHot,meta:{name:'searchHot'}},
    {name:'Login', path:'/login',component:Login,meta:{name:'Login'}},
    {name:'wishlist', path:'/wishlist',component:wishlist,meta:{name:'wishlist'}},
    {name:'Faq', path:'/faq',component:Faq,meta:{name:'Faq'}},
    {name:'FaqDetails', path:'/faqDetails',component:FaqDetails,meta:{name:'FaqDetails'}},
    {name:'FaqSearchResult', path:'/faqSearchResult',component:FaqSearchResult,meta:{name:'FaqSearchResult'}},
    {name:'fogetPwd', path:'/fogetPwd',component:fogetPwd,meta:{name:'fogetPwd'}},
];

const router = new Router({
    routes: routerMaps
});

export default router
