<template>
    <div class="Collection">
        <header>
            <div class="header_wrap">
                <div class="search" onclick="search()"><img src="../assets/img/index/serch.png" alt=""></div>
                <div class="title"><img src="../assets/img/index/AR-logo.png" alt=""></div>
                <div class="announce" onclick="announce()"><img src="../assets/img/index/message.png" alt=""></div>
            </div>
            <van-row class="headStroke">
                <van-col span="3">
                    <van-row class="fitterBut" @click="fiSw(true)">
                        <van-col span="10"><img src="../assets/img/Stroke.png" alt=""></van-col>
                        <van-col span="10" class="strokeText">التوقيع</van-col>
                    </van-row>
                </van-col>
                <van-col span="3" offset="18">
                    <van-row class="sortBut"  @click="sP(true)">
                        <van-col span="11"><img src="../assets/img/StrokeMore.png" alt=""></van-col>
                        <van-col span="10" class="strokeText">ااتال</van-col>
                    </van-row>
                </van-col>
            </van-row>
            <van-row class="headStrokeTitle">
                <van-col offset="10" span="8" class="des">التزر،وو 3600 يع</van-col>
                <van-col span="6" class="des desed">تالاب بذتزر </van-col>
            </van-row>
        </header>
        <van-row class="collectionCon">
            <van-col span="12" class="productItem" v-for="(v,i) in CL" @click="gPdu(v.id_product)">
                <div class="productImg">
                    <div class="proTip">ON SALE</div>
                    <img :src="v.img_url" width="100%" alt="">
                </div>
                <div class="proText">
                    <div class="productName">{{v.saleMessage}}</div>
                    <div class="proDes">
                        <span class="newPrice"> {{v.newprice}} </span>
                        <span class="oldPrice"> {{v.oldprice}} </span>
                        <span class="moreColor">(الألوان)</span>
                    </div>
                </div>
            </van-col>
        </van-row>
        <!--<div class="desc_box_warp" v-if="srS" ref="dbw" :style="{height:h,width:w}" @click="showPopup(false)">-->

        <!--</div>-->
        <van-popup position="top" v-model="srS">
            <div class="desc_box" ref="dbw">
                <div class="desc_item" v-for="(v,i) in S" @click="cS(v.sort,i);sP(false)">
                    <div class="desc_default" :class="{show:sS === i}">
                        <van-icon name="success" />
                    </div>
                    <div :name="v.sort">
                        {{v.name}}
                    </div>
                </div>
            </div>
        </van-popup>
        <van-popup
                position="left"
                :style="{ height: '100%', width: '80%' }"
                v-model="fiS">
            <div class="filter_box">
                <div class="filter_title">تصفية</div>
                <!--<van-collapse v-model="aN" class="filter_content">-->
                    <!--<van-collapse-item value="color" name="1">-->
                        <!--<div class="filter_item" v-for="(v,i) in coL"-->
                             <!--@click="sFi(v.id_color,i)"-->
                             <!--:class="{filter_item_active:fs===true}">-->
                            <!--{{v.name}}-->
                        <!--</div>-->
                    <!--</van-collapse-item>-->
                    <!--<van-collapse-item value="price" >-->
                        <!--<div class="filter_item" v-for="(v,i) in peL">-->
                            <!--{{v.name}}-->
                        <!--</div>-->
                    <!--</van-collapse-item>-->
                    <!--<van-collapse-item value="size" >-->
                        <!--<div class="filter_item" v-for="(v,i) in szL">-->
                            <!--{{v.name}}-->
                        <!--</div>-->
                    <!--</van-collapse-item>-->
                <!--</van-collapse>-->
                <div class="filter_wrap">
                    <div class="filter_content">
                        <div class="filter_content_title" @click="chnFlt(index)">
                            <van-icon name="arrow-down" /><div class="name">color</div>
                        </div>
                        <div class="filter_item_wrap" v-if="fnw">
                            <div class="filter_item filter_item_active"  @click="sFi()">
                                1
                            </div>
                            <div class="filter_item">
                                12312321
                            </div>
                            <div class="filter_item">
                                1231
                            </div>
                            <div class="filter_item">
                                12313123
                            </div>
                            <div class="filter_item">
                                12312
                            </div>
                            <div class="filter_item">
                                123123
                            </div>
                            <div class="filter_item">
                                12312
                            </div>
                            <div class="filter_item">
                                123123123123
                            </div>
                        </div>
                    </div>
                    <div class="filter_content">
                        <div class="filter_content_title" @click="chnFlt(index)">
                            <van-icon name="arrow-down" /><div class="name">size</div>
                        </div>
                        <div class="filter_item_wrap" v-show="fnw">
                            <div class="filter_item">
                                2
                            </div>
                        </div>
                    </div>
                    <div class="filter_content">
                        <div class="filter_content_title" @click="chnFlt(index)">
                            <van-icon name="arrow-down" /><div class="name">price</div>
                        </div>
                        <div class="filter_item_wrap" v-show="fnw">
                            <div class="filter_item">
                                3
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </van-popup>

    </div>
</template>

<script>
    import { getData,postData } from '../config.js';
    import { DropdownMenu, DropdownItem, Icon, Popup, Collapse, CollapseItem } from 'vant';
    import router from "vue-router";
    import store from '../store/store.js'
    import $ from 'jquery'

    export default {
        name: "category",
        components: {
            router,
            store,
            DropdownMenu,
            DropdownItem,
            Icon,
            Popup,
            Collapse,
            CollapseItem
        },
        data() {
            return {
                pN:{
                    curPa:'1',
                    paTo:'1',
                    paSi:'10'
                },
                CL:{},
                S:{},
                fL:{},
                sS:0,
                srS:false,
                fiS:false,
                coL:[],
                szL:[],
                peL:[],
                aN: [],
                fs:false,
                fnw:false
            }
        },
        methods: {
            gL(a){
                this.$post('/api/category/getCategoryProducts',
                    {
                        id_category:store.state.collection_id,
                        sort:a,
                        page:this.pN.curPa,
                        lang_id:store.state.langID
                    }).then(resp => {
                    this.CL = resp.data.products;
                })
            },
            gS(){
                this.$post('/api/category/getSorts',).then(resp => {
                    this.S = resp.data.sorts;
                    this.gL(this.S[0].sort);
                })
            },
            cS(d,i){
                this.sS = i;
                this.CL.sort = d;
                this.gL(d);
            },
            sP(t) {
                this.srS = t;
            },
            fiSw(e){
                this.fiS = e;
            },
            gF(){
                this.$post('/api/category/getCategoryFilters',
                    {
                        id_category:store.state.collection_id,
                        lang_id:store.state.langID
                    }).then(resp => {
                    this.coL = resp.data.colors.slice(0);
                    this.szL = resp.data.sizes.slice(0);
                    this.peL = resp.data.prices.slice(0);
                    console.log(this.peL)
                })
            },
            gPdu(d){
                store.state.product_id = d;
                this.$router.push('/ProductDetail')
            },
            chnFlt(d){
                // alert(d)
                if(d.fnw === true){
                    this.fnw = false
                } else {
                    this.fnw = true
                }

            },
            sFi(d,i){
                alert(1)
                this.fs = true
            }
        },
        beforeMount(){

        },
        mounted() {
            this.gS();
            this.gF();
        }
    }
</script>

<style scoped lang="scss">
    .Collection{
        .van-popup--left {
            top: 0%;
            left: 0;
            transform: translate3d(0,0%,0);
        }
        header{
            position: fixed;
            overflow: auto;
            background: #fff;
            top: 0;
            width: 100%;
            z-index: 99;
            .header_wrap{
                height: 44px;
                display: flex;
                display:-webkit-flex;
                justify-content:space-between;
                padding: 0 10px;
                align-items: center;
            }
            .headStroke{
                padding: 10px;
                border-bottom: 1px solid #e7e7e7;
                border-top: 1px solid #e7e7e7;
                color: #999;
                img{
                    width: 100%;
                    height: auto;
                    vertical-align: middle;
                }
                .fitterBut,.sortBut{
                    width: 40px;
                    .strokeText{
                        margin-left: 5px;
                    }
                }
            }
            .headStrokeTitle{
                padding: 10px 8px;
                .des{
                    color: #999;
                }
                .desed{
                    font-weight: bold;
                    color: #000;
                }
            }
        }
        .collectionCon{
            margin-top: 124px;
            .loadMore{
                text-align: center;
                padding: 14px;
                display: none;
            }
            .productItem{
                direction: rtl;
                /*width: 100%;*/
                padding: 10px;
                height: 280px;
            }
            .proTip{
                position: absolute;
                background: black;
                text-align: center;
                color: white;
                padding: 2px 5px;
            }
            .productName{
                font-weight: bold;
                text-align: right;
            }
            .oldPrice{
                font-size: 12px;
                text-decoration: line-through;
                font-weight: bold;
                text-align: right;
            }
            .newPrice{
                font-size: 14px;
                font-weight: bold;
                color: red;
                text-align: right;
            }
            .moreColor{
                color: #999999;
            }
            .proDes{
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
        }
        .desc_box{
            background: #fff;
            padding: 0 10px;
            .desc_item{
                display: flex;
                overflow: auto;
                justify-content: space-between;
                padding: 10px 0;
                border-bottom: 1px solid #e7e7e7;
                .desc_default{
                    visibility: hidden;
                }
                .show{
                    visibility: visible;
                }
            }
        }
        .filter_box{
            .filter_title{
                border-bottom: 1px solid #999;
                padding: 10px;
                text-align: center;
                font-weight: bold;
                color: #000;
            }
            .filter_wrap{
                .filter_content{
                    /*margin: 10px 0;*/
                    overflow: auto;
                    padding: 0 10px;
                    .filter_content_title{
                        display: flex;
                        justify-content: space-between;
                        padding: 10px;
                        .name{

                        }
                    }
                    .filter_item_wrap{
                        overflow: auto;
                        /*display: none;*/
                        .filter_item{
                            font-size: 12px;
                            padding: 5px;
                            overflow: auto;
                            width: auto;
                            display: inline-block;
                            border: 1px solid #999;
                            float: right;
                            margin: 4px;
                        }
                        .filter_item_active{
                            color: #fff;
                            background: #333;
                        }
                    }
                    .show{
                        display: block;
                    }
                }
            }
        }

        #backTop{
            position: fixed;
            z-index: 99;
            bottom: 36px;
            left: 12px;
            width: 44px;
            display: none;
        }
        .fitterHead{
            font-family: Cairo-Bold;
            font-size: 16px;
            color: #000000;
            letter-spacing: 0;
            text-align: center;
            font-weight: bold;
            height: 50px;
            border-bottom: 1px solid #E7E7E7;
            line-height: 50px;
        }
        .cancelIco{
            position: absolute;
            right: 0;
            top: 10px;
        }
        .fitter{
            position: fixed;
            width: 88%;
            background: white;
            height: 100%;
            top: 0;
            z-index: 999;
            left: 0;
        }
        .bgB{
            width: 100%;
            height: 100%;
            position: fixed;
            background:rgba(0, 0, 0, 0.4);
            z-index: 99999;
            top: 0;
        }
        .code{
            direction: rtl;
            /*border-bottom: 1px solid #E7E7E7;*/

        }
        .codeShow{
            padding: 12px 16px;

        }
        .fr{
            float: right;
        }
        .fl{
            float: left;
        }
        .add_transform{
            transform:rotate(180deg);
            -ms-transform:rotate(180deg); 	/* IE 9 */
            -moz-transform:rotate(180deg); 	/* Firefox */
            -webkit-transform:rotate(180deg); /* Safari 和 Chrome */
            -o-transform:rotate(180deg); 	/* Opera */
            transition: all 0.5s ease-in-out;
            -moz-transition: all 0.5s ease-in-out; /* Firefox 4 */
            -webkit-transition: all 0.5s ease-in-out; /* Safari 和 Chrome */
            -o-transition: all 0.5s ease-in-out; /* Opera */
        }
        .writeCode{
            padding: 4px 16px;
        }
        .fitterName{
            font-family: Cairo-Bold;
            font-size: 14px;
            color: #000000;
            letter-spacing: 0;
            font-weight: bold;
            text-align: right;
        }
        .selectPart{
            padding: 5px;
            border: 1px solid #D8D8D8;
            float: right;
            margin: 5px 6px;
            color: #999999;
        }
        .selected{
            background: #333333;
            border: 1px solid #D8D8D8;
            color: white;
        }
        .fitterFoot{
            border-top: 2px solid #E7E7E7;
            margin-top: 12px;
            position: fixed;
            width: 88%;
            bottom: 0;
            height: 65px;
            padding-left: 20px;
            background: white;
        }
        .fitterSub{
            padding: 7px 14px;
            background: #333333;
            border: 1px solid #D8D8D8;
            color: white;
            margin: 12px 5px;
            float: left;
        }
        .fitterBody{
            overflow: auto;
        }
        .reset{
            margin: -3px 22px;
        }
        .fitterPart{
            display: none;
        }
        .sort{
            font-family: Cairo-Regular;
            font-size: 14px;
            letter-spacing: 0;
            text-align: right;
            height: 41px;
            border-bottom: 1px solid #E7E7E7;
            line-height: 40px;
            color: #999999;
        }
        .shortChosed{
            color: #000;
            /*background: url(../img/yes.png) no-repeat;*/
            background-size: 38px 31px;
        }
        .sorts{
            width: 100%;
            background: white;
            position: fixed;
            padding: 16px;
            direction: rtl;
            z-index: 99999;
        }
        .sortPart{
            top: 97px;
            display: none;
        }
        .left_wrap{
            display: flex;
            justify-content: space-around;
        }
    }

</style>