<template>
  <div>
    <!-- 更改币种 -->
    <header class="dis_flex">
        <span></span>
        <span></span>
        <span>
            <span class="fontSize12 color000000" style="margin-right:10px;font-weight: 600;">شصيسضصثذبد</span>
            <img src="@/assets/img/personal/faq_back.png" alt="" width="16" @click="back()">
        </span>
    </header>
    
    <div class="faq_content">
        <div class="faq_title">
            <span class="color999">شصيسضصثذبد /</span>
            <span>نتائج البحث</span>
        </div>
        <div class="faq_search dis_flex">
            <input type="text" name="search" placeholder="" class="flexone" v-model="listData.search_query">
            <img src="@/assets/img/personal/faq_search.png" class="search-img" alt="" srcset="" @click="searchResBtn()">
        </div>

         <div class="faq_result_title">
            <span>نالالبابي</span>
            <div>
                <span class="fontSize12">&nbsp;10</span>
                <span class="fontSize12">يتنتمشتام منشت</span>
                <span class="colorFFAE70 fontSize12">“نالالبابي”</span>
            </div>
         </div>
         <div class="faq_result_item">
            <div class="faq_result_item_titile">
                <span>ينمسنكنمشاكنت كمنشتكاكنت؛منش؛كتمتن نالا</span>
                <span class="colorFFAE70">لالبابي؟</span>
            </div>
            <div class="faq_result_item_content textEllipsis2">
                <span>يمناتنتاكسن كمنكشاسيكبناكسنت كنمتسكمينبكناسكنكمنت؛خثهق؛خ ؛ختكمستبشمكنتنسنر،رظ،ورظورشوطرطروظرسو،شرسظ.يمناتنتاكسن كمنكشاسيكبناكسنت كنمتسكمينبكناسكنكمنت؛خثهق؛خ ؛ختكمستبشمكنتنسنر،رظ،ورظورشوطرطروظرسو،شرسظ.يمناتنتاكسن كمنكشاسيكبناكسنت كنمتسكمينبكناسكنكمنت؛خثهق؛خ ؛ختكمستبشمكنتنسنر،رظ،ورظورشوطرطروظرسو،شرسظ.يمناتنتاكسن كمنكشاسيكبناكسنت كنمتسكمينبكناسكنكمنت؛خثهق؛خ ؛ختكمستبشمكنتنسنر،رظ،ورظورشوطرطروظرسو،شرسظ.</span>
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

export default {
  data() {
    return {
      lists:[],
      listData:{
        action:'getFaqs',
        search_query:'',
      },
      
      
    }
  },
  methods: {
    searchRes(data){
      var that = this;
      this.$post('/api/faq/getSearch',data).then(data => {
         console.log("list",data)
          that.that = that.lists.concat(data.data.faqs);
      }).catch(error => {
        console.log(error);
      });
    },
    // 搜索
    searchResBtn(){
      this.listData ={ ...this.$store.state.defaultData,...this.listData}
      this.searchRes(this.listData)
    },
    back(){
        this.$router.go(-1);//返回上一层
    },

    
  },
  mounted() {
    this.listData.search_query = this.$route.params.page;
    this.listData ={ ...this.$store.state.defaultData,...this.listData}
    this.searchRes(this.listData)
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
      border-bottom: 1px solid #D8D8D8;
      line-height: 44px;
      padding: 0 15px;
      display: flex;
      box-sizing: border-box;
      justify-content: space-between;
  }
 .faq_content{
      margin-top:45px;
      direction: rtl;
  }
  .faq_title{
      /* text-align: center; */
      font-size: 12px;
      color: #000000;
      font-weight: 600;
      padding:13px 15px 10px 15px;
  }
  .faq_search{
      line-height: 34px;
      padding:0 15px 10px 0px;
      display: flex;
      width: 100%;
      box-sizing: border-box;
  }
  .faq_search input[name="search"]{
      background: #F6F6F6;
      border-radius: 4px;
      font-size: 14px;
      color: #000000;
      border:none;
      width: 100%;
      padding: 0 12px 0 0px;
  }
   .search-img{
      width: 34px;
      height: 34px;
  }
  .faq_search input[name="search"]:focus{
      outline: 0;
  }
  .faq_search:after{
      width: 34px;
      height: 34px;
      content: '';
      // background: url('@/assets/img/personal/faq_search.png') no-repeat;
      background-size: 100% 100%;
      position: relative;
      top:0;
  }
  .faq_result_title{
      text-align: center;
      border-bottom:1px solid #D8D8D8;
      line-height: 18px;
      padding:10px 0px;
      margin:0 15px;
  }
  .faq_result_item{
      margin:0 20px;
      padding: 10px 0;
      border-bottom:1px solid #D8D8D8;
  }
  .faq_result_item_titile{
      font-size: 12px;
      font-weight: 600;
      line-height: 20px;
      padding-bottom:10px;
  }
  .faq_result_item_content{
      line-height: 24px;
      padding:2px 0;
  }
</style>
