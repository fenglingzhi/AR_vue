import { getData,postData } from '../config.js';
export function Login(username,pwd) {
    let req = {
        username:username,
        password:pwd
    };
    return postData('/login',req)
}
export function getCategoryList() {
    let req = {
        // username:username,
        // password:pwd
    };
    return postData('/api/category/getCategoryProducts',req)
}
// import Vue from 'vue'
// import VueJsonp  from "vue-jsonp";
// Vue.use(VueJsonp);

