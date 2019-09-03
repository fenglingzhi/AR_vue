<template>
    <div class="orderhistory">
        <header class="dis_flex">
            <span></span>
            <span class="header_titile">طلبات</span>
            <span class="returnicon"><img src="../assets/img/personal/adress_return.png" alt="" class="header_return_img"></span>
        </header>
        <div class="order_content">
            <div class="order_container"  v-for="(v,i) in order" :key="'h'+i">
                <div class="order-item dis_flex1">
                    <!-- 订单编号 -->
                    <div class="flexones ">
                        <span class="fontSize12 color000000">رقم الطلب:</span>
                        <span class="fontSize12 color000000">{{v.id_order}}</span>
                    </div>
                    <!-- 订单状态 -->
                    <div>
                        <div alt="" class="checkImg"></div>
                        <span class="fontSize12 color000000">{{v.state_name}}</span>
                    </div>
                </div>
                <div class="order-item dis_flex2" v-for="(item,index) in v.products" :key="'h'+index">
                    <div class="dis_flex3 textEllipsis" >
                        <div><img :src="item.img_url" alt="" width="75" v-model="$store.state.orderId"></div>
                        <div  class="flex">
                            <span class="dis_block textEllipsis">{{item.name}}</span>
                            <span class="dis_block color999 fontSize12 textEllipsis" style="margin-left: 9rem;">(أكثر الألوان）</span>
                            <!-- 尺码 -->
                            <span class="dis_block textEllipsis" style="margin-left: 9rem;">المقاس:<span>{{item.size}}</span></span>
                            <!-- 颜色 -->
                            <span class="dis_block textEllipsis" style="margin-left: 9rem;">اللون:<span>{{item.color}}</span></span>
                            <span class="dis_block textEllipsis" style="margin-left: 9rem;">{{item.price}}</span>
                        </div>
                    </div>
                    <div style="line-height: 20px;">
                        <span>x {{item.quantity}} </span>
                    </div>
                </div>
                <div class="order-item dis_flex4">
                    <div class="flexones textEllipsis" style="padding:13px 0 ;">
                        <span class="fontSize12 color000000">عهنست: </span>
                        <span class="fontSize12 color000000">S.R.<span class="fontWeight600">30.00</span> عهنست 1 عهنت</span>
                    </div>
                    <!-- 支付 -->
                    <div class="payfor" >
                        <div class="pay">
                            <span class="fontSize12">支付</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="order_more dis_flex" style="justify-content: center;align-items: center;">
            <img src="../assets/img/personal/order_down.png" width="10" alt="" style="margin-right:10px;">
            <!-- 显示更多订单记录 -->
            <span>عرض المزيد من سجلات الطلبات</span>
        </div>
    </div>
</template>

<script>
    import * as api from "../api/commonApi";
    import router from "vue-router";
    import axios from "axios";
    import store from '../store/store.js'
    export default {
        data(){
            return{
                order:{},

            }
        },
        components:{
            router,
            axios,
            store
        },
        methods:{
            loadorderhistory(){
                this.$post("/api/userOrder/getOrders",{
                    page:"1"
                }).then(data=>{
                    this.order = data.data.orders;
                    // $store.state.orderId = data.data.orders.
                    console.log(data.data.orders)
                }).catch(error => {
                    console.log(error);
                });
            }
        },
        mounted(){
            this.loadorderhistory();
        }
    }
</script>

<style lang="scss" scoped>
.orderhistory{
    background-color: #F6F6F6 ;
    header{
        position: fixed;
        width:100%;
        background: #fff;
        top: 0;
        z-index: 999;
        border-bottom: 1px solid #D8D8D8;
        line-height: 44px;
        padding: 0 18px;
        justify-content: space-between;
    }
    .header_titile{
        font-size: 17px;
        color: #000000;
        font-weight: 600;
        padding-right: 3rem;
    }
    /*.returnicon{*/
        /*position: absolute;*/
        /*left:21rem;*/
    /*}*/
    .header_return_img{
        width:10px;
    }
    .order_content{
        margin-top:45px;
    }
    .order_container{
        margin-top: 10px;
        background-color: #fff;
        border-top:10px solid #F6F6F6;
    }
    .order-item{
        direction:rtl;
        flex-direction: row;
        justify-content: space-between;
        line-height: 33px;
        padding: 10px 20px;
        border-bottom: 1px solid #D8D8D8;
    }
    .order_more{
        text-align: center;
        margin:10px;
        line-height: 24px;
    }
    .dis_flex1{
        display: flex;
        padding:0 20px;
        height: 2.5rem;
    }
    .checkImg{
        margin-left: 5px;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: #999999;
        display: inline-block;
    }
    .dis_flex2{
        display: flex;
        border: none;
    }
    .dis_flex4{
        display: flex;
        padding:0 20px;
        border-bottom:none;
        border-top:1px solid #D8D8D8;
    }
    .flexone{
        border-top: 1px solid #D8D8D8;
        padding:13px 0 ;
    }
    .payfor{
        /*border-top: 1px solid #D8D8D8;*/
        padding:12px 0 ;
    }
    .pay{
        border: 1px solid #000000;
        padding:0 20px;
    }
    .dis_flex3{
        display: flex;
    }
    .flex{
        line-height: 20px;
        margin-right:12px;
    }
    .textEllipsis{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .fontSize12 {
        font-size: 12px;
    }
    .dis_block {
        display: block;
    }
    .color999 {
        color: #999999;
    }
}

</style>