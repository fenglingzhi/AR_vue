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
            <span class="color999">{{lists.meta_title}}</span>
            <!-- <span>نتائج البحث</span> -->
        </div>

        <div class="faq_details_title">
            <span>{{lists.category_name}}</span>
        </div>

        <div class="faq_details_content">
            <span class="fontSize12">{{lists.content}}</span>
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
            lists:{},
            listData:{
                action:'getFaqs',
                id_faq:''
            },
        }
    },
    methods: {
        getDetails(data){
            var that = this;
            this.$post('/api/faq/getFaqById',data).then(data => {
                that.lists = data.data;
                console.log("list",that.lists )
            }).catch(error => {
                console.log(error);
            });
        },
        back(){
            this.$router.go(-1);//返回上一层
        },
    },
    mounted() {
        this.listData.id_faq = this.$route.params.page;
        this.listData ={ ...this.$store.state.defaultData,...this.listData}
        this.getDetails(this.listData)
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
  .faq_details_title{
      padding:24px 20px 10px 20px;
  }
  .faq_details_content{
      padding:0 20px;
      line-height: 20px;
  }
</style>


