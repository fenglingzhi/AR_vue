<template>
  <div class="home_ar">
    <header>
    <div class="header_wrap" v-if="unshow">
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
    <div class="header_wrap" v-if="!unshow">
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
         <img :src="a.image_url"  v-for="(a,b) in banner1" :key="'b'+b">
      </div>
       <div class="banner3" v-for="(c,d) in banner2" :key="'d'+d">
         <img :src="c.image_url" >
      </div>
      <div class="banner4">
          <div class="banner4left" v-for="(e,f) in banner3left" :key="'f'+f">
            <img :src="e.image_url" >
          </div>
          <div class="banner4right" v-for="(h,j) in banner3right1" :key="'j'+j">
            <img :src="h.image_url" >
          </div>
          <div class="banner4right" v-for="(k,l) in banner3right2" :key="'l'+l">
            <img :src="k.image_url" >
          </div>
      </div>
       <van-count-down :time="time">
        <template v-slot="timeData">
          <span class="item">{{ timeData.days }}</span><span class="maohao">:</span>
          <span class="item">{{ timeData.hours }}</span><span class="maohao">:</span>
          <span class="item">{{ timeData.minutes }}</span><span class="maohao">:</span>
          <span class="item">{{ timeData.seconds }}</span>
          <span class="text"> العد التنازلي </span>
        </template>
      </van-count-down>
      <div class="countdownimg">
        <img src="../assets/漏斗,倒计时.png" alt="">
      </div>
      <div class="countlists">
        <div class="countdown" :style="{width:contentWidth}">
            <img v-for="(m,n) in countdown" :key="n" :src="m.img_url" alt="" class="countimg">
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
        <img v-for="(v,i) in banner9" :key="i" :src="v.image_url" alt="">
      </div>
    </div>
    <CommodityWaterfall></CommodityWaterfall>
  </div>
</template>

<script>
import * as api from "../api/commonApi";
import { Dialog, Swipe, SwipeItem, CountDown, List  } from 'vant';
import router from "vue-router";
import axios from "axios";
import CommodityWaterfall from "../components/CommodityWaterfall.vue";

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
          this.contentWidth = Number(this.countdown.length)*172 + 40+"px";
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
  width: 111px;
  height: 190px;
  margin-top: 10px;
  padding-left: 10px;
}
.banner3{
  float: left;
  width: 170px;
  height: 214px;
  margin-top: 15px;
  margin-left: 10px;
}
.banner4left{
  width: 173px;
  height: 196px;
  float: left;
  margin-top: 15px;
  margin-left: 8px;
  margin-right: 8px;
  margin-bottom: -1px
}
.banner4right{
  width: 174px;
  height: 90px;
  float: left;
  margin-top: 15px;
}
.countimg{
   width: 172px;
   height: 236px;
   margin-top: 10px;
   display: inline-block;
   margin-left: 7px;

}
.countdown{
  margin-top: 10px;
  /*width: 900px;*/
}
.countdownimg{
  width: 34px;
  height: 30px;
  margin-left: 304px;
  margin-top: -16px;
 
}
.van-count-down{
  height: 14px;
  margin-top: 525px;
  padding-top: 135px;
  margin-left: -180px;
}
.text{
  font-weight: bold;
  font-size: 20px;
  position: absolute;
  left: 215px;
}
.maohao{
  font-size: 18px;
  font-weight: bold;
  margin-right: 3px;
}
.item {
  display: inline-block;
  width: 23px;
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
  margin-top: 10px;
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
.banner5,.banner7,.banner8{
  margin: 10px 10px;
}
}
.home_en{
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
        width: 115px;
        height: 190px;
        // margin-left: 2px;
        margin-top: 10px;
        padding-left: 10px;
        // position: fixed;
    }
    .banner3{
        float: left;
        width: 170px;
        height: 214px;
        margin-top: 15px;
        margin-left: 10px;
    }
    .banner4left{
        width: 173px;
        height: 194px;
        float: left;
        margin-top: 15px;
        margin-left: 8px;
        margin-right: 8px;
    }
    .banner4right{
        width: 174px;
        height: 90px;
        float: left;
        margin-top: 15px;
    }
    .countdown img{
        width: 172px;
        height: 236px;
        margin-top: 10px;
        display: inline-block;
        margin-left: 7px;

    }
    .countdown{
        margin-top: 10px;
        width: 900px;
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
        margin-top: 525px;
        padding-top: 135px;
        margin-left: -180px;
    }
    .text{
        font-weight: bold;
        font-size: 20px;
        position: absolute;
        left: 215px;
    }
    .maohao{
        font-size: 18px;
        font-weight: bold;
        margin-right: 3px;
    }
    .item {
        display: inline-block;
        width: 23px;
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
    .van-cell__value{
        text-align: right;
    }
    .van-cell__value{
        text-align: left;
    }
    .newprice{
        color:#444040;
    }
    .oldprice{
        color:red;
    }
    .van-list{
        overflow: hidden;
    }
    .van-cell{
        float: left;
        width: 185px;
        height: 325px;
        padding: 5px 5px;
    }
    .van-cell img{
        width: 100%;
        height: 75%;
    }
    .banner5,.banner7,.banner8{
        margin: 10px 10px;
    }
}
</style>
