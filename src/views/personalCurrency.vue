<template>
  <div>
    <!-- 更改币种 -->
    <header class="dis_flex">
        <span></span>
        <span class="header_titile">تغيير العملة</span>
        <span><img src="@/assets/img/personal/adress_return.png" alt="" class="header_return_img" @click="back()"></span>
    </header>
    
    <div class="currency_content currency_ul">
        <ul>
            <li v-for="(item, index) in lists" :key="index" @click="selectCurrency(index,item.currency_id)">
                <div class="currency_li_right">
                    <img src="@/assets/img/personal/currency.png" width="24" alt="">
                    <span style="">{{item.iso_code}}</span>
                </div>
                <div class="currency_li_left" :class="{currency_li_left_active:index ==activeIndex }">
                </div>
            </li>
        </ul>
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
      actions:'getCurrencies',
      activeIndex:0
    }
  },
  methods: {
    getCurrencies(data){
      this.$post('/api/currency/getCurrencies',data).then(data => {
         console.log("list",data)
          this.lists = this.lists.concat(data.data);
      }).catch(error => {
        console.log(error);
      });
    },
    back(){
        this.$router.go(-1);//返回上一层
    },
    // 选择币种
    selectCurrency(index,id_currency){
      this.activeIndex = index
      var data ={...this.$store.state.defaultData};
      data.id_currency = id_currency;
      data.action = 'changeCurrency';
      this.$post('/api/currency/changeCurrency',data).then(data => {
         console.log("list",data)
      }).catch(error => {
        console.log(error);
      });
    }
  },
  mounted() {
    var data = {...this.actions,...this.$store.state.defaultData}
    this.getCurrencies(data)
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
      padding: 0 18px;
      display: flex;
      box-sizing: border-box;
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

  .currency_content{
      margin-top:45px;
      margin-bottom:80px;
      direction: rtl;
  }
  .currency_ul ul{
      list-style: none;
      padding:0 12px 0 18px;
  }
  .currency_ul ul li{
      border-bottom: 2px solid #D8D8D8;
      display: flex;
      padding:15px 0;
      line-height: 24px;
      justify-content:space-between;
      align-items: center;
      font-size: 14px;
      color: #000000;
      position: relative;
  }
  .currency_li_right span{
      margin-right:10px;
  }
  .currency_li_left_active:before{
      content: '';
      position: absolute;
      width: 12px;
      height: 6px;
      background: transparent;
      bottom: 25px;
      left: 8px;
      border: 1px solid #000000;
      border-top: none;
      border-right: none;
      -webkit-transform: rotate(-55deg);
      -ms-transform: rotate(-55deg);
      transform: rotate(-55deg);
      z-index: 9;
  }

</style>

