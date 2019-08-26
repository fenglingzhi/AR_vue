<template>
  <div>
    <header>
    <div class="header_wrap">
      <div class="search">
        <img src="../assets/img/index/serch.png" alt />
      </div>
      <div class="title">
        <img src="../assets/img/index/AR-logo.png" alt />
      </div>
      <div class="announce">
        <img src="../assets/img/index/message.png" alt />
      </div>
    </div>
  </header>
  <div class="toptexts"  >
      <van-swipe :autoplay="3000" :show-indicators="false"  vertical style="height:45px">
      <van-swipe-item   v-for="(v,i) in columns.bannNotices" :key="i">
        {{ v.title }}
      </van-swipe-item>
    </van-swipe>
  </div>
  <div class="banner">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(v,i) in columns.banner.banner_tops" :key='i'>
          <img :src="v.image_url" />
        </van-swipe-item>
      </van-swipe>
      <div class="banner2">
         <img :src="a.image_url"  v-for="(a,b) in columns.banner.banner_1" :key="b">
      </div>
      <div class="banner3" v-for="(c,d) in columns.banner.banner_2" :key="d">
         <img :src="c.image_url" >
      </div>
      <div class="banner4">
          <div class="banner4left" v-for="(e,f) in columns.banner.banner_3_left" :key="f">
            <img :src="e.image_url" >
          </div>
          <div class="banner4right" v-for="(h,j) in columns.banner.banner_3_right_1" :key="j">
            <img :src="h.image_url" >
          </div>
          <div class="banner4right" v-for="(k,l) in columns.banner.banner_3_right_2" :key="l">
            <img :src="k.image_url" >
          </div>
      </div>
      <van-count-down :time="time">
        <template v-slot="timeData">
          <span class="item">{{ timeData.days }}:</span>
          <span class="item">{{ timeData.hours }}:</span>
          <span class="item">{{ timeData.minutes }}:</span>
          <span class="item">{{ timeData.seconds }}</span>
           <span class="text"> العد التنازلي </span>
        </template>       
      </van-count-down>
      <div class="countdownimg">
        
        <img src="../assets/漏斗,倒计时.png" alt="">
      </div>
      <div class="countlists">
        <div class="countdown" > 
            <img v-for="(m,n) in columns.count_down.products" :key="n" :src="m.img_url" alt="">     
        </div>
      </div>
      <div class="banner5" v-for="(v,i) in columns.banner.banner_5" :key="i"> 
         <img :src="v.image_url" alt="">
      </div>
      <div class="banner6" > 
        <img v-for="(v,i) in columns.banner.banner_4" :key="i" :src="v.image_url" alt="">
      </div>
      <div class="banner7" > 
        <img v-for="(v,i) in columns.banner.banner_6" :key="i" :src="v.image_url" alt="">
      </div>
      <div class="banner8" > 
        <img v-for="(v,i) in columns.banner.banner_7" :key="i" :src="v.image_url" alt="">
      </div>
       <div class="banner9" > 
        <img v-for="(v,i) in columns.policy" :key="i" :src="v.image_url" alt="">
      </div>
    </div>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了"  @load="onLoad">
      <van-cell  v-for="item in Lists"  :key="item"  >
          <img :src="item.img_url" alt="">
          <p>
            <span class="newprice">{{ item.newprice }}</span>
            <span class="oldprice">{{ item.oldprice }}</span>
          </p> 
    </van-cell>       
    </van-list> 
  </div>
</template>

<script>
import * as api from "../api/commonApi";
import { Dialog, Swipe, SwipeItem, CountDown, List  } from 'vant';
import router from "vue-router";
import axios from "axios";

export default {
    data(){
      return{
          Lists:[],   
          columns:{
              
           },
          time:1598097090000,       
          loading: false,
          finished: false,
          listData:{
            id_currency:"1",
            page:"1"
          },
          total_page:""      
          }
    },
   components: {
       Swipe,
       Dialog,
       SwipeItem,
       router,
       CountDown,
       List
   },
   methods: {  
    loadhomehearder() {
      this.$post("/api/home/getHome", {
        id_currency: "1"
      }).then(data => {
          this.columns = data.data.data;
          console.log(this.columns);
        }).catch(error => {
          console.log(error);
        });
    },
    loadhomeWaterfall(data){
      this.$post("/api/home/getHomeProductList",data).then(redata => {
          this.Lists = redata.data.data.products;
          this.total_page = redata.data.total_page;
          // console.log(data);
        }).catch(error => {
          console.log(error);
        });
    },

    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        if(this.total_page>=this.listData.page){
          this.listData.page=this.listData.page+1
          this.Lists.push(this.loadhomeWaterfall(this.listData))
        }else{
          this.loading = false;
           this.finished = true;
        }
        // // 数据全部加载完成
        // if (this.Lists.length >=  ) {
        //   this.finished = true;
        // }
      }, 2000);
    }
  },
  mounted() {
    this.loadhomehearder();
    this.loadhomeWaterfall(this.listData);
  }
  
};
</script>
<style lang="scss" scoped>
p {
  margin: 0;
}
img {
  width: 100%;
  height: 100%;
}
header {
  position: fixed;
  overflow: auto;
  background: #fff;
  width: 100%;
  border-bottom: 1px solid #e7e7e7;
  z-index: 999;
}
.header_wrap {
  height: 44px;
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
  padding: 0 10px;
  align-items: center;
}
.topwiper{
  width: 100%;
  height: 200px;
  // background: black;
  margin-top: 45px;
  color: #fff;
  line-height: 40px;
}
.toptexts{
  height: 45px;
  background: black;
  line-height: 45px;
  padding-top: 45px;
  color: white;
}
.banner2 img{
  float: left;
  width: 120px;
  height: 190px;
  // margin-left: 2px;
  margin-top: 10px;
  padding-left: 4px;
  // position: fixed;
}
.banner3{
  float: left;
  width: 187px;
  height: 214px;
  margin-top: 15px;
}
.banner4left{
  width: 180px;
  height: 194px;
  float: left;
  margin-top: 15px;
}
.banner4right{
  width: 195px;
  height: 90px;
  float: left;
  margin-top: 15px;
}
.countdown img{
   width: 120px;
   height: 180px;
  //  float: left;
   margin-top: 10px;
   display: inline-block;

}
.countdown{
  margin-top: 10px;
  width: 1200px;
  // overflow-x: auto;
  // white-space: nowrap;
}
.countdownimg{
  width: 34px;
  height: 30px;
  margin-left: 304px;
  margin-top: -16px;
}
.van-count-down{
  height: 14px;
  margin-top: 550px;
  padding-top: 110px;
  margin-left: -120px;
}
.text{
  font-weight: bold;
  font-size: 20px;
}
.item {
  display: inline-block;
  width: 30px;
  margin-right: 5px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  background-color: #4b555f;
}
.countlists{
  width: 100%;
  overflow: auto;
}
.banner6 img{
  width: 180px;

}
.banner9 img{
  width:120px ;
  height: 190px;
}
.products div{
  float: left;
  width: 180px;
  height: 230px;
}
.newprice{
  color:#ccc;
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
  width: 187px;
  height: 230px;
}
</style>
