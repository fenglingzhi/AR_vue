<template>
  <div>
    <header class="dis_flex">
        <span></span>
        <!-- 支持 -->
        <span class="header_titile">دعم</span>
        <span><img src="@/assets/img/personal/adress_return.png" alt="" class="header_return_img" @click="back()"></span>
    </header>
    <div class="support_content">
      <a href="mailto:service@zorafan.com?subject=From ZORAFAN" rel="noopener" target="_blank">
        <div class="support_item dis_flex">
              <div class="support_item_right">
                  <!-- 提交问题邮件 -->
                  <div><img src="@/assets/img/personal/support_word.png" width="20" alt=""><span style="margin-right:20px;">تقديم تذكرة</span></div>
                  <!-- 如果您遇到任何问题，我们将在24小时内回复。 -->
                  <div class="textEllipsis fontSize12 color999"><span style="margin-right:40px;">إذا واجهت أي مشكلة، الاستجابة في غضون 24 ساعة.</span></div>
              </div>
              <div class="support_item_left">
                  <img src="@/assets/img/personal/adress_goLeft.png" alt="" width="8">
              </div>
        </div>
      </a>
       <router-link to="/faq">
        <div class="support_item dis_flex">
              <div class="support_item_right">
                  <!-- 常见问题 -->
                  <div><img src="@/assets/img/personal/support_wenhao.png" width="20" alt=""><span style="margin-right:20px;">الأسئلة المتكررة</span></div>
                  <!-- 你可以在这里找到常见问题。 -->
                  <div class="textEllipsis fontSize12 color999"><span style="margin-right:40px;">يمكنك العثور على الأسئلة الشائعة هنا.</span></div>
              </div>
              <div class="support_item_left">
                  <img src="@/assets/img/personal/adress_goLeft.png" alt="" width="8">
              </div>
        </div>
       </router-link>
    </div>
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

export default {
  data() {
    return {
      
    }
  },
  methods: {
    back(){
      this.$router.go(-1);//返回上一层
    }
  },
}
</script>

<style lang="scss" scoped>
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
  .support_content{
      margin-top:45px;
      background: #fff;
  }
  .support_item{
      direction:rtl;
      flex-direction: row;
      justify-content: space-between;
      line-height: 33px;
      padding: 0 20px;
      display: flex;
      text-align: right;
      color: #2c3e50;
  }
  .support_item_right{
      line-height: 20px;
      padding:10px 0;
      border-bottom: 2px solid #D8D8D8;
      flex: 1;
  }
  .support_item_left{
      padding:10px 0;
      line-height: 40px;
      border-bottom: 2px solid #D8D8D8;
  }
</style>
