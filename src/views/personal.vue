<template>
  <div>
    <header>
        <div class="person_detail dis_flex">
            <label for="upfile" class="pTitleRight" @click="IDRecognition">
                <img :src="imageUrl" alt="" class="person_detail_img">
                <input ref="filElem" type="file" accept="image/*" id="upfile" name="upfile" style="display: none;" @change="uploadPic($event)">
            </label>
            <span class="person_detail_name">John</span>
        </div>
        <div class="person_menu">
            <ul class="person_menu_ul dis_flex">
                <router-link to="/personalSetup">
                    <li><img src="@/assets/img/personal/my_settings.png" alt=""><p>وضع</p></li>
                </router-link>
                <router-link to="/personalAdress">
                    <li><img src="@/assets/img/personal/my_address.png" alt=""><p>عنواني</p></li>
                </router-link>
                <router-link to="/support">
                    <li><img src="@/assets/img/personal/my_support.png" alt=""><p>دعم</p></li>
                </router-link>
                <router-link to="/PersonHistoryOrder">
                    <li><img src="@/assets/img/personal/my_order.png" alt=""><p>طلبي</p></li>
                </router-link>
            </ul>
        </div>
    </header>
    <div class="personal_content">
        <div class="personal_content_title">
            <p>تصفح السجلات</p>
        </div>
        <div class="collectionCon">
          <van-list v-model="loading" :finished="finished" finished-text="没有更多了"  @load="loadMore" :offset="300">
            <div class="productItem" v-for="(item, index) in lists" :key="index">
                <div class="productImg">
                    <div class="proTip">ON SALE</div>
                    <img src="@/assets/img/mode.png" width="100%" alt="">
                </div>
                <div class="proText">
                    <div class="productName">بطاقة يمنكنتيثقللقز</div>
                    <div class="proDes">
                        <span class="oldPrice"> S.R.1140.00 </span>
                        <span class="newPrice"> S.R.35.00 </span>
                        <span class="moreColor">(الألوان)</span>
                    </div>
                </div>
            </div>
          </van-list>
        </div>
        <div class="loadMore">
            loading more ...
        </div>
        <div id="backTop">
            <img src="@/assets/img/backTop.png" width="40" alt="">
        </div>
    </div>
     <BottomBar></BottomBar>
  </div>
</template>


<script>
import Vue from 'vue'
import * as api from "../api/commonApi";
import router from "vue-router";
import axios from "axios";
import { Dialog, Swipe, SwipeItem, CountDown, List,Toast } from 'vant';
import store from '../store/store.js'
import $ from "jquery"
import BottomBar from "./BottomBar"
export default {
    data() {
        return {
            lists:[1,1,1,1],
            loading: false,
            finished: false,
            listData:{
                action:'getWishlists',
                id_currency:"1",
                page:"1"
            },
            total_page:"" ,
            imageUrl: this.$store.state.photo,     //图片base64码
        }
    },
    components:{
        router,
        Swipe,
        Dialog,
        SwipeItem,
        router,
        CountDown, 
        Toast,
        BottomBar
    },
    methods: {
     getWishlist(data){
      this.$post('/api/wishlist/getWishlists',data).then(data => {
         console.log("list",data)
          this.Lists = this.Lists.concat(redata.data.data.products);
          this.total_page = redata.data.data.total_page;
      }).catch(error => {
        console.log(error);
      });
    },
    IDRecognition: function() {},  //触发事件 
    uploadPic: function(e) {
        console.log(e.target.files)
        this.beforeUpload (e.target.files[0])
        
    },
    beforeUpload (file) {
        console.log("111",file)
        const isJPG = file.type.indexOf("image") != -1 ;
        if (!isJPG) {
            Toast.fail("只能上传图片")
        }

        const isLt2M = file.size / 1024 / 1024 <2
        if (!isLt2M) {
           Toast.fail("图片不能大于2M")
        }else {
            var reader = new FileReader();
            reader.readAsDataURL(file);
            let that = this;
            reader.onloadend = function () {
                that.imageUrl = reader.result;
                console.log("111",that.imageUrl)
                var data = {...that.$store.state.defaultData};
                data.action = 'uploadPhoto';
                data.photo = that.imageUrl;
                that.$post('/api/user_identity/uploadPhoto',data).then(data => {
                    console.log("list",data)
                    if (data.code == 200) {
                        store.commit('changeStore',{key:'photo',val:data.data.photo});
                    }
                    if (data.code == 400) {
                        Toast.fail(data.message)
                    }
                }).catch(error => {
                    console.log(error);
                });
            }
           



            return false;
        }

    },
    loadMore() {
    // 异步更新数据
      setTimeout(() => {
          if(this.total_page >= this.listData.page ){
              console.log("下拉",this.listData)
              this.listData.page = Number(this.listData.page) + 1;
              this.getWishlist(this.listData);
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
    back(){
        this.$router.go(-1);//返回上一层
    },
  },
  mounted() {
    this.listData ={ ...this.$store.state.defaultData,...this.listData}
    console.log(this.listData)
    // this.getWishlist(this.listData)
  },
}
</script>

<style lang="scss" scoped>
 body{
      background-color: #F6F6F6 ;
  }
 header{
      background-color: #fff;
  }
  .van-list{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .person_detail{
      margin-right: 14px;
      direction: rtl;
      align-content: center;
      padding-top: 30px;
      display: flex;
      box-sizing: border-box;
  }
  .person_detail_img{
      width: 62px;
      height: 62px;
      border-radius: 50%;
  }
  .person_detail_name{
      font-size: 34px;
      line-height: 62px;
      margin-right: 12px;
  }
  .person_menu_ul{
      display: flex;
      list-style: none;
      justify-content:space-between;
      padding: 50px 60px 20px 60px;
  }
  .person_menu_ul li>p{
      line-height: 26px;
      font-size: 14px;
      color: #000000;
      text-align: center;
  }
  .personal_content{
      margin-top:10px;
      background-color: #fff;
      margin-bottom:50px;
  }
  .personal_content_title{
      line-height: 24px;
      direction: rtl;
      font-size: 14px;
      color: #000000;
      padding-right:14px;
      padding-top:10px;
      display: flex;
      box-sizing: border-box;
  }
  .personal_content_title p {
      margin: 0;
  }
  .collectionCon{
    display: flex;
    flex-wrap: wrap-reverse;
  }
  .loadMore{
      text-align: center;
      padding: 14px;
      display: none;
  }

  .productItem{
      direction: rtl;
      width: 50%;
      padding: 10px;
      box-sizing: border-box;
  }
  .proTip{
      position: absolute;
      background: black;
      text-align: center;
      color: white;
      padding: 2px 5px;
  }
  .productName{
      font-weight: bold;
  }
  .oldPrice{
      font-size: 12px;
      text-decoration: line-through;
      font-weight: bold;
  }
  .newPrice{
      font-size: 14px;
      font-weight: bold;
      color: red;
  }
  .moreColor{
      color: #999999;
  }
  .proDes{
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
  }
  #backTop{
      position: fixed;
      z-index: 99;
      bottom: 36px;
      left: 12px;
      width: 44px;
      display: none;
  }
</style>


