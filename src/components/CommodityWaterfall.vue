<template>
    <div :class="unshow?'pages_ar':'pages_en'" >
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了"  @load="onLoad" :offset="300">
            <div  v-for="(v,i) in Lists"  :key="i"  class="van-cell">
                <img :src="v.img_url" alt="">
                <span class="message">{{ v.saleMessage }}</span>
                <p class="price">
                    <span class="newprice">{{ v.newprice }}</span>
                    <span class="oldprice">{{ v.oldprice }}</span>
                </p> 
            </div>       
       </van-list>
        <button class="button" @click="changeolalng()">切换</button>
    </div>
</template>
<script>
import * as api from "../api/commonApi";
import { Dialog, List  } from 'vant';
import router from "vue-router";
import axios from "axios";
import $ from "jquery"
import store from '../store/store.js'

export default {
    data(){
        return{
            Lists:[],
            loading: false,
            finished: false,
            listData:{
                id_currency:"1",
                page:"1"
            },
            total_page:"" ,
            unshow:true,

        }
    },
    components:{
        router,
        List,
        Dialog
    },
    methods:{
        //点击切换样式类
        changeolalng(){
            this.unshow = !this.unshow
            store.commit('changeStore',{key:'unshow',val: !this.$store.state.unshow});
        },
        // 瀑布流请求
        loadhomeWaterfall(data){
        this.$post("/api/home/getHomeProductList",data).then(redata => {
            this.Lists = this.Lists.concat(redata.data.data.products);
            this.total_page = redata.data.data.total_page;
            }).catch(error => {
                console.log(error);
            });
        },
        onLoad() {
        // 异步更新数据
            setTimeout(() => {
                if(this.total_page >= this.listData.page ){
                    this.listData.page=Number(this.listData.page)+1;
                    this.loadhomeWaterfall(this.listData);
                    if(this.total_page = this.listData.page){
                        this.loading = false;
                        this.finished = true;
                    }
                }else{
                    this.loading = false;
                    this.finished = true;
                }
            }, 3000);
        },

    },
    mounted(){
         this.loadhomeWaterfall(this.listData);

    }
}
</script>
<style lang="scss" scoped>
.pages_ar{
    margin-bottom: 5rem;
    .newprice{
        color:#444040;
    }
    .oldprice{
        color:red;
    }
    .van-list{
        overflow: hidden;
        // display: flex;
    }
    .van-cell{
        float: left;
        width: 50%;
        height: 325px;
        padding: 5px 5px;
    }
    .van-cell img{
        width: 100%;
        height: 75%;
    }
    .price{
        position: absolute;
        top: 255px;
        left: 55px;
        font-weight: bold;
        font-size: 14px;
    }
    .message{
        position: absolute;
        top: 245px;
        left: 115px;
        font-size: 22px;
        font-weight: bold;
    }
    button{
        border-radius: 5px;
        background-color: lightblue;
    }
}
.pages_en{
    margin-bottom: 70px;
    .newprice{
        color:#444040;
    }
    .oldprice{
        color:red;
    }
    .van-list{
        overflow: hidden;
        // display: flex;
    }
    .van-cell{
        float: left;
        width: 50%;
        height: 325px;
        padding: 5px 5px;
    }
    .van-cell img{
        width: 100%;
        height: 75%;
    }
    .price{
        position: absolute;
        top: 255px;
        font-weight: bold;
        font-size: 14px;
    }
    .message{
        position: absolute;
        top: 245px;
        font-size: 22px;
        font-weight: bold;
    }
    button{
        border-radius: 5px;
        background-color: lightblue;
    }
}

</style>