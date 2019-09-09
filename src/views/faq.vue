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
            <span>نتسزذنت عهع ظعيزتن!</span>
        </div>

        <div class="faq_search dis_flex">
            <input type="text" name="search" placeholder="ررتالتالبتالمتا ٬ملمالبلايبليبداتمت؟"  v-model="search_query"  dir="rtl" class="flexone" >
            <img src="../assets/img/personal/faq_search.png" class="search-img" alt="" @click="faqSearch()">
        </div>
        
        <div class="faq_item" v-for="(item, index) in lists" :key="index">
            <div class="faq_item_title" @click="selectItem(item,index)">
                <div class="faq_item_one">
                    <img :src="item.img_url" alt="" width="20">
                    <span>{{item.name}}</span>
                    <img src="../assets/img/down.png" width="15" class="active-img"  :class="{activedSel:item.active && index == j }" srcset="">
                </div>
            </div>
            <div class="faq_item_two" :class="{active:item.active && index == j }">
                <ul class="faq_item_two_list">
                    <li v-for="(itemChild, i) in item.child" :key="i"  @click="fagDetails(itemChild.id_faq)">
                        <img :src="itemChild.image" alt="" width="5">
                        <span>{{itemChild.meta_title}}</span>
                    </li>
                    <!-- <li>
                        <img src="@/assets/img/personal/faq_img3.png" alt="" width="5">
                        <span>الخصوصية؟</span>
                    </li>
                    <li>
                        <img src="@/assets/img/personal/faq_img3.png" alt="" width="5">
                        <span>الشروط</span>
                    </li> -->
                </ul>
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
      },
      j:-1,  //判断当前展开的是那个
      search_query:''
    }
  },
  methods: {
    getWishlist(data){
      var that = this; 
      this.$post('/api/faq/getFaqs',data).then(data => {
        console.log("list",data.data.faqs)
        that.lists.push(...data.data.faqs);
        console.log("list",that.lists)
      }).catch(error => {
        console.log(error);
      });
    },
    back(){
        this.$router.go(-1);//返回上一层
    },
    // 转开面板
    selectItem(item,index){
        this.j = index;
        if(item.active){
		    Vue.set(item,'active',false);//为item添加不存在的属性，需要使用vue提供的Vue.set( object, key, value )方法。 
		}else{
		    Vue.set(item,'active',true);
		}
    },
    //详情页面 
    fagDetails(id){
        this.$router.push({
            name: `FaqDetails`,
            params: {
                page: id
            }
        })
    },
    // 搜索
    faqSearch(){
        console.log(this.search_query)
        var that = this;
        this.$router.push({
            name: `FaqSearchResult`,
            params: {
                page: that.search_query
            }
        })
    }
  },
  mounted() {
    this.listData ={ ...this.$store.state.defaultData,...this.listData}
    // delete this.listData.id_currency
    console.log(this.listData)
    this.getWishlist(this.listData)
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
    border-bottom: 1px solid #D8D8D8;
    line-height: 44px;
    padding: 0 15px;
    box-sizing: border-box;
    justify-content: space-between;
  }
   .faq_item_one .active-img{
    float: left;
    margin: 0;
    margin-top: 17px;
  }
  .activedSel{
    transform: rotate(180deg);
  }

  .faq_content{
      margin-top:45px;
      direction: rtl;
      background: #fff;
  }
  .faq_title{
      text-align: center;
      font-size: 12px;
      color: #000000;
      font-weight: 600;
      padding:13px 0 10px 0;
  }
  .faq_search{
      line-height: 34px;
      padding:0 15px 10px 20px;
      display: flex;
      width: 100%;
      box-sizing: border-box;
  }
  .faq_search input[name="search"]{
      background: #F6F6F6;
      border-radius: 4px;
      font-size: 14px;
      color: #999999;
      border:none;
      padding: 0 12px 0 34px;
      width: 100%;
      box-sizing: border-box;
  }
  .faq_search input[name="search"]:focus{
      outline: 0;
  }
  .search-img{
      width: 34px;
      height: 34px;
  }

  .faq_item_title{
      padding:0 20px;
  }
  .faq_item_one{
      position: relative;
      line-height: 44px;
      border-bottom:1px solid #d8d8d8;
      text-align: right;
  }
  .faq_item_one img{
      margin-left: 20px;
  }
  .faq_item_one::after{
      content: "";
      width: 10px;
      height: 6px;
    //   background:url("") no-repeat;
      background-size: 100% 100%;
      position: absolute;
      top: 20px;
      left: 10px;
      transition-duration: .3s;
  }
  .faq_item_two{
      padding:0 20px;
      background-color:#F6F6F6;
      display: none;
  }
  .faq_item_two.active{
      display: block;
  }
  .faq_item_two_list{
      list-style: none;
      line-height: 44px;
      margin-bottom:0;
  }
  .faq_item_two_list li{
      text-align: right;
      border-top:1px solid #D8D8D8;
  }
  .faq_item_two_list li:first-child{
      border:none;
  }
  .faq_item_two_list li img{
      margin-right:2px;
      margin-left:18px;
  }
  .active_img:after{
      -webkit-transform: rotate(180deg);
      -moz-transform: rotate(180deg);
      -ms-transform: rotate(180deg);
      -o-transform: rotate(180deg);
      transform: rotate(180deg);
  }



</style>

