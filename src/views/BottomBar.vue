<template>
    <div class="bottom-box">
        <router-link to="" tag="div" class="item">
            <img src="../assets/img/index/me.png" alt="">
            <span> مستعمل </span>
        </router-link>
        <router-link to="" tag="div" class="item">
           <img src="../assets/img/index/bag.png" alt="">
            <span>  التسوق </span>
        </router-link>
        <router-link to="/Category" tag="div" class="item">
            <img src="../assets/img/index/category.png" alt="">
            <span> الرئيسية </span>
        </router-link>
        <router-link to="/" tag="div" class="item">
            <img src="../assets/img/index/home.png" alt="">
            <span> الرئيسية </span>
        </router-link>
    </div>
</template>
<script>
import * as api from "../api/commonApi";
import { Dialog, Icon   } from 'vant';
import router from "vue-router";
import axios from "axios";
export default {
    data(){
        return{

        }
    },
    components:{
        Dialog,
        Icon,
        router
    },
    mounted(){

    }
}
</script>
<style lang="scss" scoped>
 .bottom-box{
    position: fixed;
    bottom: 0px;
    left: 0px;
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    text-align: center;
    border-top: 1PX solid #efefef;
    height:10% ;
    align-items: center;
    box-sizing: border-box;
    background-color: white;
    .item{
        width: 100% / 4;
        cursor: pointer;
        margin-left: 7%;
        >span{
            display: block;
            padding-top: 6px;
            font-size: 20px;
        }
        
    }
 }
</style>