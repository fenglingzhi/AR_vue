import axios from 'axios'

/**
 * 配置baseurl接口地址
 */
export const BasicUrl = 'http://rap2api.taobao.org/app/mock/121288/cupshe';


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
