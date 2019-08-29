<template>
  <div class="home_ar">
    <header>
    <div class="header_wrap" v-if="$store.state.unshow">
      <router-link to="/SearchHot">
          <div class="search">
              <img src="../assets/img/index/serch.png" alt />
          </div>
      </router-link>
      <div class="title">
        <img src="../assets/img/index/AR-logo.png" alt />
      </div>
      <div class="announce">
        <img src="../assets/img/index/message.png" alt />
      </div>
    </div>
    <div class="header_wrap" v-if="!$store.state.unshow">
        <div class="announce">
            <img src="../assets/img/index/message.png" alt />
        </div>
        <div class="title">
            <img src="../assets/img/index/AR-logo.png" alt />
        </div>
        <div class="search">
            <img src="../assets/img/index/serch.png" alt />
        </div>
    </div>
  </header>
  <div class="toptexts"  >
      <van-swipe :autoplay="3000" :show-indicators="false"  vertical style="height:45px">
      <van-swipe-item   v-for="(v,i) in  bann_Notices" :key="i">
        {{ v.title }}
      </van-swipe-item>
    </van-swipe>
  </div>
  <div class="banner">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(v,a) in banner_tops" :key='"a"+a'>
          <img :src="v.image_url" />
        </van-swipe-item>
      </van-swipe>
      <div class="banner2">
         <div class="banner22"  v-for="(a,b) in banner1" :key="'b'+b">
             <img :src="a.image_url" >
         </div>
      </div>
       <div class="banner3" >
         <div class="banner33" v-for="(c,d) in banner2" :key="'d'+d">
             <img :src="c.image_url" >
         </div>
      </div>
      <div class="banner4">
          <div class="banner4left" v-for="(e,f) in banner3left" :key="'f'+f">
                <img :src="e.image_url" >
          </div>
          <div class="banner4right" v-for="(h,j) in banner3right1" :key="'j'+j">
            <div class="banner4right1" v-for="(h,j) in banner3right1" :key="'j'+j">
                <img :src="h.image_url" >
            </div>
            <div class="banner4right2" v-for="(k,l) in banner3right2" :key="'l'+l">
                <img :src="k.image_url" >
            </div>
          </div>
      </div>
      <div class="countdowns">
          <van-count-down :time="time">
              <template v-slot="timeData">
                  <span class="item">{{ timeData.days }}</span><span class="maohao">:</span>
                  <span class="item">{{ timeData.hours }}</span><span class="maohao">:</span>
                  <span class="item">{{ timeData.minutes }}</span><span class="maohao">:</span>
                  <span class="item">{{ timeData.seconds }}</span>
              </template>
          </van-count-down>
          <div class="count">
              <span class="text"> العد التنازلي </span>
          </div>
      </div>
      <div class="countdownlist">
          <div class="countlists" :style="{width:contentWidth}">

              <div class="countdown"  v-for="(m,n) in countdown" :key="n">
                  <img  :src="m.img_url" alt="" class="countimg">
              </div>
          </div>
      </div>
      <div class="banner5" v-for="(v,i) in banner5" :key="i">
         <img :src="v.image_url" alt="">
      </div>
      <div class="banner6" >
        <img v-for="(v,i) in banner4" :key="i" :src="v.image_url" alt="">
      </div>
      <div class="banner7" >
        <img v-for="(v,i) in banner6" :key="i" :src="v.image_url" alt="">
      </div>
      <div class="banner8" >
        <img v-for="(v,i) in banner7" :key="i" :src="v.image_url" alt="">
      </div>
       <div class="banner9" >
        <div class="banner99" v-for="(v,i) in banner9" :key="i">
            <img  :src="v.image_url" alt="">
        </div>
      </div>
    </div>
      <!--商品瀑布流组件-->
    <CommodityWaterfall></CommodityWaterfall>
  </div>
</template>

<script>
import * as api from "../api/commonApi";
import { Dialog, Swipe, SwipeItem, CountDown, List  } from 'vant';
import router from "vue-router";
import axios from "axios";
import CommodityWaterfall from "../components/CommodityWaterfall.vue";
import store from '../store/store.js'

export default {
    data(){
      return{
          bann_Notices:[],
          banner_tops:[],
          banner1:[],
          banner2:[],
          banner3left:[],
          banner3right1:[],
          banner3right2:[],
          countdown:[],
          banner5:[],
          banner4:[],
          banner6:[],
          banner7:[],
          banner9:[],
          time:1598097090000,
          contentWidth:0,
      }
    },
   components: {
       Swipe,
       Dialog,
       SwipeItem,
       router,
       CountDown,
       CommodityWaterfall,
   },
   methods: {  
    loadhomehearder() {
      this.$post("/api/home/getHome", {
        id_currency: "1"
      }).then(data => {
          this.bann_Notices = data.data.data.bannNotices
          this.banner_tops = data.data.data.banner.banner_tops;
          this.banner1 = data.data.data.banner.banner_1;
          this.banner2 = data.data.data.banner.banner_2;
          this.banner3left = data.data.data.banner.banner_3_left;
          this.banner3right1 = data.data.data.banner.banner_3_right_1;
          this.banner3right2 = data.data.data.banner.banner_3_right_2;
          this.countdown = data.data.data.count_down.products;
          this.banner5 = data.data.data.banner.banner_5;
          this.banner4 = data.data.data.banner.banner_4;
          this.banner6 = data.data.data.banner.banner_6;
          this.banner7 = data.data.data.banner.banner_7;
          this.banner9 = data.data.data.policy;
          //计算倒计时列表长度
          this.contentWidth = Number(this.countdown.length)*170 + 95 +"px";
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
 .none{
     display: none;
 }
.home_ar{
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
  /*height: 44px;*/
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
  padding: 0 10px;
  align-items: center;
}
.toptexts{
  height: 45px;
  background: black;
  line-height: 45px;
  padding-top: 45px;
  color: white;
}
.banner2{
   display: flex;
}
.banner22{
  padding: 1%;
  width: 33.3%;
}
.banner3{
  display: flex;
}
.banner33{
  padding: 1%;
  width: 48%;
 }
.banner4{
  display: flex;
}
.banner4left{
  width: 46%;
  padding: 1%;
}
.banner4right{
  width: 49%;
  padding: 1%;
}
.countdowns{
   display: flex;
}
.count{
    width: 50%;
}
.van-count-down{
   width: 50%;
   padding: 1%;
}
.text{
  font-weight: bold;
  font-size: 20px;
}
.maohao{
  font-size: 18px;
  font-weight: bold;
  margin-right: 1%;
}
.item {
 display: inline-block;
 width: 15%;
 margin-right: 1%;
 color: #fff;
 font-size: 18px;
 text-align: center;
 background-color: #4b555f;
 height: 2rem;
 line-height: 2.2rem;
}
.countdownlist{
  width: 100%;
  overflow: auto;
}
.countdown{
    display: inline-block;
    width:170px ;
    margin: 1%;
}
.banner6 img{
  width: 45%;
  margin-top: 1%;
  margin-left: 1%;
}
.banner9{
    display: flex;
}
.banner99{
  width:33.3% ;
  padding: 1%;
}
.products div{
  float: left;
  width: 180px;
  height: 230px;
}
.banner5,.banner7,.banner8{
  margin: 10px 10px;
}
}

</style>
