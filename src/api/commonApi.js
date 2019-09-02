import { getData,postData } from '../config.js';
export function Login(username,pwd) {
    let req = {
        username:username,
        password:pwd
    };
    return postData('/login',req)
}

// import Vue from 'vue'
// import VueJsonp  from "vue-jsonp";
// Vue.use(VueJsonp);

