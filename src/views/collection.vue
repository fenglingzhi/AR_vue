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
                    <div class="proTip">{{v.saleMessage}}</div>
                    <img :src="v.img_url" width="100%" alt="">
                </div>
                <div class="proText">
                    <div class="productName">{{v.name}}</div>
                    <div class="proDes">
                        <span class="newPrice"> {{v.newprice}} </span>
                        <span class="oldPrice"> {{v.oldprice}} </span>
                        <!-- <span class="moreColor">(الألوان)</span> -->
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
                <div class="filter_wrap">
                    <div class="filter_content">
                        <div class="filter_content_title" @click="chnFlt(fc[0].s,0)">
                            <van-icon name="arrow-down" /><div class="name">{{fc[0].n}}</div>
                        </div>
                        <div class="filter_item_wrap" v-if="fc[0].s" v-for="(a,i) in fcc">
                            <div class="filter_item" :class="{filter_item_active:a.s}" @click="sFi(a.id_color,i,a)">
                                {{a.name}}
                            </div>
                        </div>
                    </div>
                    <div class="filter_content">
                        <div class="filter_content_title" @click="chnFlt(fc[1].s,1)">
                            <van-icon name="arrow-down" /><div class="name">{{fc[1].n}}</div>
                        </div>
                        <div class="filter_item_wrap" v-if="fc[1].s" v-for="(a,i) in fcs">
                            <div class="filter_item" :class="{filter_item_active:a.s}" @click="sFi(a.id_size,i,a)">
                                {{a.name}}
                            </div>
                        </div>
                    </div>
                    <div class="filter_content">
                        <div class="filter_content_title" @click="chnFlt(fc[2].s,2)">
                            <van-icon name="arrow-down" /><div class="name">{{fc[2].n}}</div>
                        </div>
                        <div class="filter_item_wrap" v-if="fc[2].s" v-for="(a,i) in fcp">
                            <div class="filter_item" :class="{filter_item_active:a.s}" @click="sFi(a.id_price,i,a)">
                                {{a.name}}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="fitterFoot">
                    <div class="fitterSub">حسناً</div>
                    <div style="width: 20px"></div>
                    <img class="reset" src="../assets/img/reset.png" alt="" width="25px">
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
                aN: [],
                fits:false,
                fcc:[],
                fcs:[],
                fcp:[],
                fc:[
                    {
                        n:'color',
                        s:false,
                    },
                    {
                        n:'size',
                        s:false,
                    },
                    {
                        n:'price',
                        s:false,
                    }
                ]
            }
        },
        methods: {
            gL(a){
                this.$post('/api/category/getCategoryProducts',
                    {
                        id_category:store.state.collection_id,
                        sort:a,
                        page:this.pN.curPa,
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
                this.$post('/api/category/getCategoryFilters', {
                    id_category:store.state.collection_id,
                }).then(resp => {
                    this.fcc = resp.data.colors.splice(0)
                    this.fcs = resp.data.sizes.splice(0)
                    this.fcp = resp.data.prices.splice(0)
                    this.fcc.forEach(function (v,i) {
                        v.s = false
                    })
                    console.log(this.fcc)
                    this.fcs.forEach(function (v,i) {
                        v.s = false
                    })
                    this.fcp.forEach(function (v,i) {
                        v.s = false
                    })
                })
            },
            gPdu(d){
                store.state.product_id = d;
                this.$router.push('/ProductDetail')
            },
            chnFlt(d,i){
                if(d === true){
                    this.fc[i].s = false
                } else {
                    this.fc[i].s = true
                }

            },
            sFi(d,i,as){
                alert(d)
                if(as.s === true){
                    as.s = false
                } else {
                    as.s = true
                }
                console.log('ssssssssss',as.s)

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
                .productImg{
                    overflow: hidden;
                    height: 245px;
                    text-align: center;
                    position: relative;
                    display: flex;
                    align-items: center;
                    .proTip{
                        top: 0;
                    }
                }
                .proText{
                   .proDes{
                       display: flex;
                       align-items: center;
                       margin-top: 10px;
                       .oldPrice{
                            margin-right: 15px;
                       }
                   }

                }
            }
            .proTip{
                position: absolute;
                background: black;
                text-align: center;
                color: white;
                padding: 2px 5px;
                img{
                    height: 222px;
                }
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
                        display: inline;
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
            margin: 17px 22px;
            vertical-align: middle;
            float: left;
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