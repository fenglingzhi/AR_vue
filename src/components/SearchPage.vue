<template>
    <div class="collection">
        <div class="head">
            <div class="collectionHead">
                <span class="fl" @click="$router.push('Bag')">
                    <img src="../assets/img/bag.png" width="20"  alt="">
                    <div class="cartNum">2</div>
                </span>
                <router-link to="/SearchHot">
                    <span class="fl">
                    <img src="../assets/img/search.png" width="20" alt="">
                </span>
                </router-link>
                <span class="fr">
                    <img src="../assets/img/more3x.png" width="20" alt="">
                </span>
                <span class="fr" style="width: 14px;"></span>
                <span class="fr">
                    <img src="../assets/img/logo.png" width="60" alt="">
                </span>
            </div>
            <div class="headStroke">
                 <div class="fl fitterBut">
                     <span><img src="../assets/img/Stroke.png" width="16" alt=""></span>
                     <span  class="strokeText">تصنيف</span>
                 </div>
                 <div class="fr sortBut">
                     <span><img src="../assets/img/StrokeMore.png" width="16" alt=""></span>
                     <span>فرز</span>
                 </div>
            </div>
            <div class="headStroke" style="border: none;height: 32px;padding: 10px 8px;">
                <div class="fr">
                      <span class="des desed">تالاب بذتزر </span>
                      <span class="des">التزر،وو{{total}}  يع</span>
                </div>
            </div>
        </div>
        <div class="pages_ar">
            <van-list v-model="loading" :finished="finished" finished-text=""  @load="onLoad" :offset="300">
                <div  v-for="(v,i) in Lists"  :key="i"  class="van-cell" @click="detail(v.id_product)">
                    <div class="countimg">
                       <div class="imgbox" >
                           <img :src="v.img_url" alt="">
                       </div>
                       <div>
                           <p class="message">{{ v.saleMessage }}</p>
                           <p class="price">
                               <span class="newprice">{{ v.newprice }}</span>
                               <span class="oldprice">{{ v.oldprice }}</span>
                           </p>
                       </div>
                    </div>
                </div>
            </van-list>
            <!--<button class="button" @click="changeolalng()">切换</button>-->
        </div>
    </div>
</template>

<script>
 import * as api from "../api/commonApi";
 import {  List  } from 'vant';
 import router from "vue-router";
 import axios from "axios";
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
            total:"",
        }
    },
     components:{
         router,
         axios,
         List
     },
     methods: {
         //搜索详情页请求
         loadsearpage(data){
             this.$post("/api/search/getSearch",{
                 search_query:this.$store.state.searchInput,
                 id_currency:"1",
                 page:"1"
             }).then(redata=>{
                 this.Lists = this.Lists.concat(redata.data.products);
                 this.total_page = redata.data.total_page;
                 this.total = redata.data.total;
                 console.log(redata)
             }).catch(error => {
                 console.log(error);
             });
         },
         onLoad() {
             // 异步更新数据
             setTimeout(() => {
                 if(this.total_page >= this.listData.page ){
                     this.listData.page=Number(this.listData.page)+1;
                     this.loadsearpage(this.listData);
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
         this.loadsearpage(this.listData);
     }
 }
</script>

<style lang="scss" scoped>
.head{
    .collection .head{
        position: fixed;
        width: 100%;
        background: white;
        top: 0;
        z-index: 999;

    }
    .collectionHead{
        height: 30px;
        /*width: 100%;*/
        padding: 14px;
        border-bottom: 1px solid #E7E7E7;
    }

    .fr{
        float: right;
    }
    .fl{
        float: left;
    }
    .headStroke span{
        color: #999999;
    }
    .headStroke{
        border-bottom: 1px solid #E7E7E7;
        height: 30px;
        /*width: 100%;*/
        padding: 14px;
    }
    .strokeText{
        /*border-right:2px solid #E7E7E7;*/
        padding-right: 10px;
    }
    .collectionHead .cartNum{
        width: 16px;
        height: 16px;
        background: black;
        color: white;
        font-size: 12px;
        border-radius: 100px;
        margin: -12px 9px;
        text-align: center;
    }
    .collectionHead span{
        display: inline-block;
        height: 30px;
    }
    .headStroke .des{
        margin-right: 6px;
    }
    .headStroke .desed{
        margin-right: 6px;
        color: black;
        font-weight: bold;
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
        /*display: flex;*/
        width: 100%;
    }
    .van-cell{
        width: 50%;
        // float: left;
        display: inline-block;
        padding: 5px 5px;
    }
    .van-cell img{
        width: 100%;
    }
    .price{
        font-weight: bold;
        font-size: 14px;
        text-align: right;
    }
    .message{
        font-size: 22px;
        font-weight: bold;
        text-align: right;
        height: 20px;
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