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
      <van-swipe-item   v-for="(v,i) in columns.bannNotices" :key='i'>
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
      <!-- <van-count-down millisecond :time="time" format="HH:mm:ss:SSS"/> -->
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
    <div class="products" >
        <div v-for="(v,i) in columns.products" :key='i'>
          <img :src="v.img_url" alt="">
          <p>
            <span class="newprice">{{ v.newprice }}</span>
            <span class="oldprice">{{ v.oldprice }}</span>
          </p>        
        </div>
    </div>
  </div>
</template>

<script>
import * as api from "../api/commonApi";
import { Dialog, Swipe, SwipeItem } from "vant";
import router from "vue-router";
import axios from "axios";
// import { } from "vant"; 
// import CountDown from 'vant';
// import 'vant/lib/CountDown/style';

export default {
    data(){
      return{
          columns:{
            
          },
          time:1598097090000
      }
    },
   components: {
     Swipe,
     Dialog,
     SwipeItem
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

  },
  mounted() {
    this.loadhomehearder();
    
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
  // position: fixed;
}
.topwiper{
  width: 100%;
  height: 200px;
  // background: black;
  margin-top: 45px;
  color: #fff;
  line-height: 40px;
  // position: fixed;
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
  // position: fixed;
}
.banner4left{
  width: 180px;
  height: 180px;
  float: left;
  // position: fixed;
}
.banner4right{
  width: 195px;
  height: 90px;
  float: left;
  // position: fixed;
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
  width: 1320px;
  // overflow-x: auto;
  // white-space: nowrap;
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
.item {
  display: inline-block;
  width: 22px;
  margin-right: 5px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  background-color: #1989fa;
}
</style>
