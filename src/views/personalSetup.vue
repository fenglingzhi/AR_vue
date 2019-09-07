<template>
  <div>
    <!-- 设置 -->
    <header class="dis_flex">
        <span></span>
        <span class="header_titile">إعدادات</span>
        <span><img src="@/assets/img/personal/adress_return.png" alt="" class="header_return_img" @click="back()"></span>
    </header>
    <div class="setup_content">
        <div class="setup_container">
            <!-- 设置 -->
            <div class="setup_item dis_flex" style="border:none;">
                <div class="flexone textEllipsis">
                    <span class="color000000 fontWeight600">إعدادات</span>
                </div>
            </div>
            <!-- 更改币种 -->
            <div class="setup_item dis_flex">
                <router-link to="/personalCurrency">
                    <div class="flexone textEllipsis">
                        <img src="@/assets/img/personal/setup_money.png" width="22" alt="">
                        <span class="fontSize12 color000000 setup_item_rightWord">تغيير العملة</span>
                    </div>
                </router-link>
                <div>
                    <span class="color999">{{currency}}</span>
                </div>
            </div>
            <div class="setup_item dis_flex">
                <router-link to="/personalInfo">
                    <div class="flexone textEllipsis">
                        <img src="@/assets/img/personal/setup_Stroke.png" width="22" alt="">
                        <span class="fontSize12 color000000 setup_item_rightWord">عنوان الشذسيحن</span>
                    </div>
                </router-link>
            </div>
            <!-- 更改密码 -->
            <div class="setup_item dis_flex" style="border:none;">
                <router-link to="/personalPwd">
                    <div class="flexone textEllipsis">
                        <img src="@/assets/img/personal/setup_key.png" width="22" alt="">
                        <span class="fontSize12 color000000 setup_item_rightWord">تغيير كلمة المرور</span>
                    </div>
                </router-link>
            </div>
        </div>
        <div class="setup_container">
            <div class="setup_item dis_flex" style="border:none;">
                <div class="flexone textEllipsis">
                    <span class="color000000 fontWeight600">إعدادات</span>
                </div>

            </div>
            <div class="setup_item dis_flex">
                <router-link to="/Faq">
                    <div class="flexone textEllipsis">
                        <img src="@/assets/img/personal/setup_wenhao.png" width="22" alt="">
                        <span class="fontSize12 color000000 setup_item_rightWord">اختيار   العملة</span>
                    </div>
                </router-link>
            </div>
            <div class="setup_item dis_flex">
                <div class="flexone textEllipsis">
                    <img src="@/assets/img/personal/setup_car.png" width="22" alt="">
                    <span class="fontSize12 color000000 setup_item_rightWord">عنوان الشذسيحن</span>
                </div>
            </div>
            <div class="setup_item dis_flex">
                <div class="flexone textEllipsis">
                    <img src="@/assets/img/personal/setup_ba.png" width="22" alt="">
                    <span class="fontSize12 color000000 setup_item_rightWord">عنوان الشذسيحن</span>
                </div>
            </div>
            <div class="setup_item dis_flex">
                <div class="flexone textEllipsis">
                    <img src="@/assets/img/personal/setup_bag.png" width="22" alt="">
                    <span class="fontSize12 color000000 setup_item_rightWord">عنوان الشذسيحن</span>
                </div>
            </div>
            <div class="setup_item dis_flex" style="border:none;">
                <div class="flexone textEllipsis">
                    <span class="fontSize12 color000000">اختيار   العملة</span>
                </div>
            </div>
        </div>
    </div>
    <div class="adress_addContainer">
        <div class="adress_addButton" @click="signOut()">
            <!-- 登出 -->
            <span>تسجيل الخروج</span>
        </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import * as api from "../api/commonApi";
import router from "vue-router";
import axios from "axios";
import { Dialog, List  } from 'vant';
import store from '../store/store.js'

export default {
    data() {
      return {
          currency:'',
          action:'getDefaultCurrency'
       }
    },
    components:{
        Dialog,
    },
    methods: {
        back(){
            this.$router.go(-1);//返回上一层
        },
        getDefaultCurrency(data){
            this.$post('/api/currency/getDefaultCurrency',data).then(data => {
                console.log("list",data)
                this.currency = data.data.iso_code;
            }).catch(error => {
                console.log(error);
            });
        },
        signOut(){
            Dialog.confirm({
                title: '退出',
                message: '确认要退出？'
            }).then(() => {
                // on confirm
                localStorage.removeItem('token') 
                this.$router.push({
                    name: 'Login'
                })
            }).catch(() => {
                // on cancel
            });
           

        }
    },
    mounted() {
        var data = {...this.actions,...this.$store.state}
        this.getDefaultCurrency(data)
    },
}
</script>

<style lang="scss" scoped>
 body{
      background-color: #F6F6F6 ;
  }
  header{
      position: fixed;
      width:100%;
      background: #fff;
      top: 0;
      display: flex;
      box-sizing: border-box;
      z-index: 999;
      border-bottom: 1px solid #D8D8D8;
      line-height: 44px;
      padding: 0 18px;
      justify-content: space-between;
  }
  .header_titile{
      font-size: 14px;
      color: #000000;
      font-weight: 600;
  }
  .header_return_img{
      width:10px;
  }

  .setup_content{
      margin-top:55px;
      margin-bottom:80px;
  }
  .setup_container{
      margin-top:10px;
      direction: rtl;
      background-color: #fff;
  }
  .setup_item{
      display: flex;
      direction:rtl;
      flex-direction: row;
      justify-content: space-between;
      line-height: 33px;
      padding: 8px 20px;
      border-bottom: 1px solid #D8D8D8;
      box-sizing: border-box;
  }
  .setup_item_rightWord{
      margin-right: 20px;
      color: #2c3e50;
  }
  .adress_addContainer{
      padding: 0 15px ;
      position: fixed;
      width:100%;
      padding-bottom:26px;
      box-sizing: border-box;
      bottom:0;
      background-color: #F6F6F6;
  }
  .adress_addButton{
      background: #333333;
      direction: rtl;
      text-align: center;
      color: #fff;
      font-size: 14px;
      color: #FFFFFF;
      font-weight: 600;
      line-height: 45px;
  }
</style>
