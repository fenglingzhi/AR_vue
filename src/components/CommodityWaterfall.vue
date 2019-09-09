<template>
    <div :class="unshow?'pages_ar':'pages_en'" >
        <van-list v-model="loading" :finished="finished" finished-text=""  @load="onLoad" :offset="300">
            <div  v-for="(v,i) in Lists"  :key="i"  class="van-cell" @click="detail(v.id_product)">
                <div class="countimg">
                   <div class="imgbox">
                       <img :src="v.img_url" alt="">
                   </div>
                   <div>
                       <p class="message">{{ v.saleMessage }}</p>
                       <p class="price">
                           <span class="newprice" v-if=" v.oldprice !== v.newprice">{{ v.newprice }}</span>
                           <span class="oldprice"  :class="{textDecoration : v.oldprice !== v.newprice }">{{ v.oldprice }}</span>
                       </p>
                   </div>
                </div>
            </div>       
       </van-list>
        <!--<button class="button" @click="changeolalng()">切换</button>-->
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
            this.Lists = this.Lists.concat(redata.data.products);
            this.total_page = redata.data.total_page;
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
        //详情页跳转
        detail(item){
            this.$store.state.product_id = item;
            this.$router.push('productDetail');
        }

    },
    mounted(){
         this.loadhomeWaterfall(this.listData);

    }
}
</script>
<style lang="scss" scoped>
.pages_ar{
    margin-bottom: 5rem;
    .oldprice{
        color:#444040;
        margin: 10px;
    }
    .newprice{
        color:red;
    }
    .van-list{
        overflow: hidden;
        /*display: flex;*/
        width: 100%;
    }
    .van-cell{
        width: 50%;
        // float: left;
        display: inline-block;
        padding: 5px 5px;
        height: 320px;
    }
    .van-cell img{
        width: 100%;
    }
    .price{
        /*font-weight: bold;*/
        font-size: 14px;
        text-align: right;
        padding: 0px 2px;
    }
    .message{
        font-size: 22px;
        font-weight: bold;
        text-align: right;
        line-height: 20px;
        height: 20px;
        margin: 3px 0 -12px 0;
    }
    .countimg{
        width: 100%;
    }
    button{
        border-radius: 5px;
        background-color: lightblue;
    }
    .imgbox{
        overflow: hidden;
        height: 255px;
        text-align: center;
    }
    .imgbox img{
        transform: translateY(-50%);
        position: relative;
        top: 50%;
    }
    .textDecoration{
        text-decoration: line-through;
        color: #aaa;
    }
}
.pages_en{
    margin-bottom: 5rem;
    .newprice{
        color:#444040;
        margin: 10px;
    }
    .oldprice{
        color:red;
    }
    .van-list{
        overflow: hidden;
        /*display: flex;*/
        width: 100%;
    }
    .van-cell{
        width: 50%;
        // float: left;
        display: inline-block;
        padding: 5px 5px;
        height: 320px;
    }
    .van-cell img{
        width: 100%;
    }
    .price{
        font-weight: bold;
        font-size: 14px;
        text-align: left;
        padding: 0px 2px;
    }
    .message{
        font-size: 22px;
        font-weight: bold;
        text-align: left;
        line-height: 20px;
        height: 20px;
        margin: 3px 0 -12px 0;
    }
    .countimg{
        width: 100%;
    }
    button{
        border-radius: 5px;
        background-color: lightblue;
    }
    .imgbox{
        overflow: hidden;
        height: 255px;
        text-align: center;
    }
    .imgbox img{
        transform: translateY(-50%);
        position: relative;
        top: 50%;
    }
}

</style>