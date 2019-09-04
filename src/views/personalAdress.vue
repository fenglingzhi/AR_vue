<template>
  <div>
    <header class="dis_flex">
        <span></span>
        <span class="header_titile">عنو اني</span>
        <span><img src="@/assets/img/personal/adress_return.png" alt="" class="header_return_img"></span>
    </header>
    <div class="adress_content">
        <div class="adress_item">
            <div class="adress_item_detail">
                <p class="adress_item_detail_name">Ding Jie</p>
                <p class="adress_item_detail_des">Jiaoyang zhang SA 541236984</p>
                <p class="adress_item_detail_des">Flat 15</p>
                <p class="adress_item_detail_des">victoria avenue Alrass AI-Qassim Saudi Arabia 999088 19</p>
            </div>
            <div class="adress_item_deal dis_flex">
                <div class="adress_item_deal_img">
                    <img src="@/assets/img/personal/adress_delete.png" width="16" alt="" style="margin-right: 20px;" class="adress_delete">
                    <img src="@/assets/img/personal/adress_edit.png" width="16" alt="">
                </div>
                <div class="adress_item_deal_select">
                    <span>افتراضي</span>
                    <img src="@/assets/img/select.png" width="20" alt="" class="checkImg">
                </div>
            </div>
        </div>
        <div class="adress_item">
            <div class="adress_item_detail">
                <p class="adress_item_detail_name">Ding Jie</p>
                <p class="adress_item_detail_des">Jiaoyang zhang SA 541236984</p>
                <p class="adress_item_detail_des">Flat 15</p>
                <p class="adress_item_detail_des">victoria avenue Alrass AI-Qassim Saudi Arabia 999088 19</p>
            </div>
            <div class="adress_item_deal dis_flex">
                <div class="adress_item_deal_img">
                    <img src="@/assets/img/personal/adress_delete.png" width="16" alt="" style="margin-right: 20px;" class="adress_delete">
                    <img src="@/assets/img/personal/adress_edit.png" width="16" alt="">
                </div>
                <div class="adress_item_deal_select">
                    <span>افتراضي</span>
                    <img src="@/assets/img/option.png" width="20" alt="" class="checkImg">
                </div>
            </div>
        </div>
    </div>
    <div class="adress_addContainer">
        <div class="adress_addButton">
            <span>+ افحنستامنمص الآن</span>
        </div>
    </div>
    <div class="Mask dis_flex">
        <div class="Popup">
            <div class="Popup_word dis_flex">
                <span>متاناخهثر متيكتلانتسسرترزازدر ررر نسهتثب</span>
            </div>
            <div class="Popup_buttons dis_flex">
                <div class="Popup_buttons_item dis_flex Popup_buttons_item_cancel">
                    <span>لا</span>
                </div>
                <div class="Popup_buttons_item dis_flex">
                    <span>نعم</span>
                </div>
            </div>
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
import BottomBar from "./BottomBar"

export default {
  data() {
    return {
      lists:[],
      
    }
  },
  methods: {
    getAdress(data){

    }
  },
  mounted() {
    
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
      z-index: 999;
      display: flex;
      box-sizing: border-box;
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
  .adress_content{
      margin-top:55px;
      margin-bottom:80px;
  }
  .adress_item{
      margin-top:10px;
      background: #FFFFFF;
  }
  .adress_item_detail{
      text-align: right;
      padding:14px 20px 20px 20px;
      direction: rtl;
  }
  .adress_item_detail_name{
      font-size: 14px;
      color: #333333;
      font-weight: 600;
      line-height: 17px;
      margin: 0;
  }
  .adress_item_detail_des{
      font-size: 12px;
      color: #999999;
      line-height: 14px;
      margin-top: 7px;
      margin-bottom: 0px;
  }
  .adress_item_deal{
      display: flex;
      border-top: 1px solid #D8D8D8;
      border-bottom: 1px solid #D8D8D8;
      padding:16px 20px 18px 24px;
      justify-content: space-between;
  }
  .adress_item_deal_img:nth-child(1) {
      margin-right: 20px;
  }
  .adress_item_deal_select span{
      font-size: 12px;
      color: #333333;
      margin-right:14px;
  }
  .adress_addContainer{
      padding: 0 15px ;
      position: fixed;
      width:100%;
      padding-bottom:26px;
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
  .Mask{
      width:100%;
      background: rgba(51,51,51,0.40);
      height: 100%;
      position: fixed;
      top:0;
      z-index: 999;
      align-items: center;
      justify-content: center;
      display: none;
  }
  .Popup{
      width:218px;
      height:124px;
      background: #fff;
  }
  .Popup_word{
      text-align: center;
      padding: 0 12px;
      height:80px;
      align-items: center;
      justify-content: center;
  }
  .Popup_buttons_item{
      width:50%;
  }
  .Popup_buttons{
      height:44px;
      text-align: center;
      border-top: 1px solid #F6F6F6;
  }
  .Popup_buttons_item{
      justify-content: center;
      align-items: center;
      font-size: 14px;
      font-weight: 600;
  }
  .Popup_buttons .Popup_buttons_item:nth-child(2){
      background: #333333;
      color: #fff;
  }
</style>
