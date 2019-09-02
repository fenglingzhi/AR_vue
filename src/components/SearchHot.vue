<template>
    <div class="search">
        <div class="top">
            <router-link to="/SearchPage">
                <span class="searchtext"> بحث </span>
            </router-link>
            <span class="searchinput"><input  type="text" v-model="$store.state.searchInput"></span>
            <span class="searchicon"><van-icon name="arrow" class="vanicon" @click="goback"/></span>

        </div>
        <div class="searchhistory">
            <div class="history">
                <span> حذف </span>
                <span class="trashs"><img src="../assets/垃圾桶.png"/></span>
                <span class="text"> تاريخ البحث</span>
            </div>
        </div>
        <div class="hotsearch">
            <p class="text"> البحث السريع </p>
            <div class="hotsearchwords" >
                <p v-for="(v,i) in searchhot">{{v.title}}</p>
            </div>
        </div>
    </div>
</template>

<script>
 import * as api from "../api/commonApi";
 import { Icon } from 'vant';
 import router from "vue-router";
 import axios from "axios";
 import store from '../store/store.js'

 export default {
    data(){
       return{
         searchhot:{},
       }
    },
    components:{
        Icon,
        router,
        axios,
    },
    methods: {
        goback(){
            this.$router.go(-1)
        },
        //热门搜索词请求
        loadsearchhot(){
            this.$post("/api/search/getSearchHots",{
                id_currency:"1"
            }).then(data=>{
                this.searchhot = data.data.MobileSearchhots;
                // this.history = this.$store.state.searchInput;
                console.log(data)
            }).catch(error => {
                console.log(error);
            });
        },

    },
    mounted(){
       this.loadsearchhot();
    }
 }
</script>

<style lang="scss" scoped>
.top{
    height: 45px;
    width: 100%;
    border-bottom: 1px solid #E7E7E7;
    text-align: left;
    span{
        display: inline-block;
        height: 30px;
        font-weight: bold;
        margin: 0.1rem 0.5rem;
    }
    .searchtext{
        font-size: 20px;
    }
    .searchinput input{
        width: 125%;
        background: #F6F6F6;
        border: none;
        text-indent: 13px;
        height: 25px;
        outline: none;
    }
    .searchicon{
        .vanicon{
            font-size: 1.5rem;
            top: 0.5rem;
            left: 2.3rem;
        }
    }
}
.searchhistory{
    margin: 0.5rem 0;
}
.history{
    span{
        display: inline-block;
        font-weight: bold;
    }
    .trashs{
        margin-right: 13rem;
        img{
            width: 1.4rem;
        }
    }
}
.searchhistory{
    height: 10rem;
    border-bottom: 10px solid #F6F6F6  ;
}
.hotsearch{
    .text{
        font-weight: bold;
        font-size: 1.2rem;
        margin-left:15.5rem;
    }
    .hotsearchwords{
        display: flex;
        text-align: right;
        padding-left: 2.5rem;
        p{
            width: auto;
            height: 2.5rem;
            background-color:#F6F6F6 ;
            line-height: 2.3rem;
            border-radius: 0.3rem;
            margin: 1rem 0.5rem;
            padding: 0 0.1rem;
        }
    }
}

</style>