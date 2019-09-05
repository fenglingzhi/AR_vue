<template>
    <div class="category">
        <header>
            <div class="header_wrap">
                <div class="search" onclick="search()"><img src="../assets/img/index/serch.png" alt=""></div>
                <div class="title"><img src="../assets/img/index/AR-logo.png" alt=""></div>
                <div class="announce" onclick="announce()"><img src="../assets/img/index/message.png" alt=""></div>
            </div>
        </header>
        <div class="category_wrap">
            <van-row>
                <van-col span="16">
                    <div class="menu_left">
                        <!--<div class="menu_left_img"><img src="../assets/img/category/ab20515_0794(1).png" alt=""></div>-->
                        <div class="level_second_list" v-for="(v,i) in category_second_list">
                            <div class="level_second_title" @click="getCollection(v.id_category)">{{v.name}}</div>
                            <div class="level_third_list_wrap">
                                <van-row  class="level_third_list">
                                    <van-col span="8"  class="level_third_list_item" v-for="(v,i) in v.lists2">
                                        <div @click="getCollection(v.id_category)" style="height: 120px;">
                                            <!--<img src="" alt="">-->
                                            <img :src=v.img_url alt="">
                                            <p>{{v.name}}</p>
                                        </div>
                                    </van-col>
                                </van-row>
                            </div>
                        </div>
                    </div>
                </van-col>
                <van-col span="8">
                    <div class="menu_right" v-for="(v,i) in category_list">
                        <div class="level_one_list"
                             :class="{level_one_active:i==class_show}"
                             @click="changeCategory(i,v.id_category)"
                             >{{v.name}}</div>
                    </div>
                </van-col>
            </van-row>
            <div style="clear: both"></div>
        </div>
        <BottomBar></BottomBar>
    </div>
</template>

<script>
    import { getData,postData } from '../config.js';
    import { Dialog, List  } from 'vant';
    import router from "vue-router";
    import store from '../store/store.js'
    import BottomBar from "../../src/views/BottomBar"
    export default {
        name: "category",
        components: {
            router,
            store,
            BottomBar
        },
        data() {
            return {
                category_list:{},
                category_second_list:{},
                class_show:0
            }
        },
        methods: {
            getCategoryList(data){
                this.$post('/api/navigation/getlists',).then(resp => {
                    this.category_list = resp.data;
                    console.log(this.category_list)
                }).then(() =>{
                    this.$post('/api/navigation/getSecondLists',{id_category:this.category_list[0].id_category}).then(resp => {
                        this.category_second_list = resp.data.lists;
                        console.log(this.category_second_list)
                    })
                })
            },
            changeCategory(i,id){
                console.log('111',id)
                this.class_show = i;
                console.log(this.category_list[0])
                this.$post('/api/navigation/getSecondLists',{id_category:id}).then(resp => {
                    this.category_second_list = resp.data.lists;
                })
            },
            getCollection(data){
                console.log(data)
                store.state.collection_id = data
                this.$router.push({path:'/Collection'})
            }
        },
        mounted() {
            this.getCategoryList()
        }
    }
</script>

<style scoped lang="scss">
    p{
        margin: 0;
        font-size: 12px;
    }
    img{
        width: 100%;
        height: 100%;
    }
    .category{
        header{
            position: fixed;
            overflow: auto;
            background: #fff;
            top: 0;
            width: 100%;
            border-bottom: 1px solid #E7E7E7;
            .header_wrap{
                height: 44px;
                display: flex;
                display:-webkit-flex;
                justify-content:space-between;
                padding: 0 10px;
                align-items: center;
            }
        }
        .category_wrap{
            margin-top: 44px;
            padding-bottom: 67px;
        }
        .menu_right{
            width: 100%;
            text-align: right;
            background: #F6f6f6;
            float: right;
        }
        .level_one_list{
            padding: 10px 20px;
            color: #999;
            border-bottom: 1px solid #D8D8D8;
        }
        .level_one_active{
            background: #fff;
            border-right: 2px solid #000;
            font-weight: 600;
            color: #000;
        }
        .menu_left{
            /*float: left;*/
            overflow: auto;
            padding: 0 10px;
        }
        .menu_left img{
            /*height: auto;*/
        }
        .level_second_title{
            text-align: right;
            font-weight: bold;
            margin: 10px 0;
        }
        .level_third_list{
            margin-top: 10px;
            clear: both;
            overflow: auto;
        }
        .level_third_list p{
            text-align: center;
        }
        .level_third_list_item{
            /*width: 33.3333%;*/
            height: 120px;
            float: right;
            margin-bottom: 20px;
            padding: 0 5px;
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
</style>