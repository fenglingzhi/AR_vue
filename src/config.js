import axios from 'axios'


/**
 * 配置baseurl接口地址
 */
export const BasicUrl = 'http://rap2api.taobao.org/app/mock/121288/cupshe';

axios.defaults.timeout = 10000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

/* ajax-get */
export const getData = (url,data={}) =>{
    return new Promise((resolve,reject) => {
        axios({
            method:'get',
            url:BasicUrl+url,
            params:data
        }).then(resp=>{
            resolve(resp)
        },reject)
    })
}

/* ajax-post */
export const postData = (url,data={}) =>{
    return new Promise((resolve,reject)=>{
        axios({
            method:'post',
            url:BasicUrl+url,
            data:data
        }).then(resp=>{
            resolve(resp)
        },reject)
    })
}
