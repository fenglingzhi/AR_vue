<template>
    <div class="orderdetail">
        <div >
            <header class="dis_flex" >
                <span><img src="../assets/img/personal/order_addcart.png" alt="" width="20"></span>
                <span class="header_titile">رقم الطلب :<span>{{orderList.id_order}}</span></span>
                <span><img src="../assets/img/personal/adress_return.png" alt="" class="header_return_img" @click="back()"></span>
            </header>
            <div class="orderDetail_content">
                <div class="orderDetail_container" >
                    <div class="orderDetail_date orderDetail_item" >
                        <span>التاريخ:<span>{{orderList.add_date}}</span></span>
                    </div>
                    <div class="orderDetail_item dis_flex">
                        <div class="orderDetail_item_right">
                            <label for=""  style="margin:0;">سعر طلبك :{{orderList.total_price}}</label>
                        </div>
                        <div class="orderDetail_item_left">
                            <span style="font-size: 12px;color: #999999;margin-left:14px;">أنمنتمر طبيعي</span>
                            <img src="../assets/img/personal/adress_goLeft.png" alt="" width="8" >
                        </div>
                    </div>
                </div>
                <div class="orderDetail_container " >
                    <div class="orderDetail_item orderDetail_item_name dis_flex">
                        <div>
                            <img  src="../assets/img/personal/orderDetail_me.png" width="14" alt="" class="checkImg" style="margin-left: 8px;">
                            <span>{{name}}</span>
                        </div>
                        <div>
                            <img src="../assets/img/personal/adress_edit.png" width="14" alt="" style="margin-left: 5px;">
                            <img src="../assets/img/personal/orderDetail_wenhao.png" width="14" alt="">
                        </div>
                    </div>
                    <div class="orderDetail_item orderDetail_item_adress dis_flex">
                        <div>
                            <img src="../assets/img/personal/adress_loaction.png" width="14" alt="" class="checkImg" style="margin-left: 8px;">
                        </div>
                        <div style="text-align: right">
                            <span>{{address}}</span>
                        </div>
                    </div>
                </div>
                <div class="orderDetail_container ">
                    <div class="orderDetail_item  dis_flex" style="line-height: 15px">
                        <div>
                            <div alt="" class="checkImg" style="margin-left: 8px;width: 10px;height: 10px;border-radius: 50%;background: #ED0000;display: inline-block;"></div>
                            <!--物流状态-->
                            <span>{{orderList.current_state}}</span>
                        </div>
                    </div>
                </div>
                <div class="orderDetail_item  dis_flex" style="line-height: 15px;padding: 0px 20px;flex-direction: column;" v-for="(item,index) in orderList.products">
                    <div class="orderDetail_item_list dis_flex">
                        <div class="dis_flex orderDetail_item_list_right flexone textEllipsis">
                            <div><img :src="item.img_url" alt="" width="75"></div>
                            <div style="line-height: 20px;margin-right:12px;" class="flexone textEllipsis">
                                <span class="dis_block " style="margin-left: 9rem;">{{item.name}}</span>
                                <span class="dis_block color999 fontSize12 " style="margin-left: 9rem;">{{item.color}} {{item.size}}</span>
                                <span class="dis_block "  style="margin-left: 9rem;">{{item.new_price}}</span>
                            </div>
                        </div>
                        <div style="line-height: 20px;">
                            <span>x {{item.quantity}} </span>
                        </div>
                    </div>
                </div>
                <div class="orderDetail_item" style="border:none;">
                    <!-- 商品折扣价 -->
                    <div class="dis_flex justify-space-between">
                        <div class="flexone textEllipsis">
                            <span class="fontSize12">سعر الوحدة</span>
                        </div>
                        <div>
                            <span class="text-line-through fontSize12">{{orderList.sub_total_price}}</span>
                        </div>
                    </div>
                    <!--商品原价-->
                    <div class="dis_flex justify-space-between">
                        <div class="flexone textEllipsis">
                            <span class="fontSize12">سعر الوحدة</span>
                        </div>
                        <div>
                            <span class="text-line-through fontSize12">{{orderList.sub_total_price}}</span>
                        </div>
                    </div>
                    <!-- 运费 -->
                    <div class="dis_flex justify-space-between">
                        <div class="flexone textEllipsis">
                            <span class="fontSize12">سعر الشحن</span>
                        </div>
                        <div>
                            <span class="fontSize12">{{orderList.shipping_price}}</span>
                        </div>
                    </div>
                    <!-- 折扣 -->
                    <div class="dis_flex justify-space-between">
                        <div class="flexone textEllipsis">
                            <span class="fontSize12">خصم</span>
                        </div>
                        <div>
                            <span class="fontSize12 colorED0000">{{orderList.total_discount_price}}</span>
                        </div>
                    </div>
                    <!--cod服务费-->
                    <div class="dis_flex justify-space-between"  v-if="orderList.length>0&&orderList.cod_service_price!=''">
                        <div class="flexone textEllipsis">
                            <span class="fontSize12">خصم</span>
                        </div>
                        <div>
                            <span class="fontSize12 colorED0000">{{orderList.cod_service_price}}</span>
                        </div>
                    </div>
                    <!--支付方式优惠金额-->
                    <div class="dis_flex justify-space-between">
                        <div class="flexone textEllipsis">
                            <span class="fontSize12">خصم</span>
                        </div>
                        <div>
                            <span class="fontSize12 colorED0000">{{orderList.total_payment_discount_price}}</span>
                        </div>
                    </div>
                    <!-- 总额 -->
                    <div class="dis_flex justify-space-between">
                        <div class="flexone textEllipsis">
                            <span class="fontSize12">المجموع</span>
                        </div>
                        <div>
                            <span class="fontSize12 colorED0000 fontWeight600">{{orderList.total_price}} </span>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 支付 -->
            <div class="adress_addContainer">
                <div class="adress_addButton">
                    <span>الدفع</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import * as api from "../api/commonApi";
    import router from "vue-router";
    import axios from "axios";
    import store from '../store/store.js'
    import $ from "jquery"
    export default {
        data(){
            return{
                orderList:[],
                name:"",
                address:"",
            }
        },
        components:{
            router,
            axios,
            store
        },
        methods:{
            loadorderdetail(){
                this.$post("/api/user_order/getOrderDetail",{
                    id_order:this.$store.state.id_order,
                }).then(data=>{
                    this.orderList = data.data;
                    this.name = data.data.shipping_address.name;
                    this.address = data.data.shipping_address.address;
                }).catch(error => {
                    console.log(error);
                });
            },
            //返回上一页
            back(){
                this.$router.go(-1);//返回上一层
            }

        },
        mounted(){
            this.loadorderdetail();
        }
    }
</script>

<style lang="scss" scoped>
    .none{
        display: none;
    }
    .dis_flex{
        display: flex;
    }
    .dis_block{
        display: block;
    }
    .textEllipsis {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
     header{
        position: fixed;
        width:90%;
        background: #fff;
        top: 0;
        z-index: 999;
        border-bottom: 1px solid #D8D8D8;
        line-height: 44px;
        padding: 0 18px;
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
    .orderDetail_content{
        margin-top:45px;
        margin-bottom:80px;
    }
    .orderDetail_container{
        margin-top:10px;
        background-color: #fff;
    }
    .orderDetail_item{
        direction:rtl;
        flex-direction: row;
        justify-content: space-between;
        line-height: 33px;
        padding: 10px 20px;
        border-bottom: 1px solid #D8D8D8;
    }
    .orderDetail_date{
        border-bottom: 1px solid #D8D8D8;
        text-align: center;
        background-color: #fff;
        line-height: 15px;
        color: #999999;
        font-size: 12px;
    }
    /*.orderDetail_item_right{*/
        /*flex: 1*/
    /*}*/
    .orderDetail_item_left{
    }
    .orderDetail_item_name{
        line-height: 20px;font-size: 12px;color: #000000;border:none;padding: 15px 20px 5px;
    }
    .orderDetail_item_adress{
        line-height: 20px;font-size: 12px;color: #000000;border:none;padding: 5px 20px 15px;
    }
    .orderDetail_item_list{
        width:100%;padding:12px 0;flex-direction: row;justify-content: space-between;
    }
    .orderDetail_item_list_right{
        flex-direction: row;justify-content: space-between;
    }
    .adress_addContainer{
        padding: 0 15px ;
        position: fixed;
        width:93%;
        padding-bottom:26px;
        bottom:0;
        background-color: #F6F6F6;
    }
    .adress_addButton{
        background: #333333;
        direction: rtl;
        text-align: center;
        color: #fff;
        font-size: 14px;
        color: #FFFFFF;
        font-weight: 600;
        line-height: 45px;
    }
    .text-line-through {
        text-decoration: line-through;
    }
    .fontSize12 {
        font-size: 12px;
    }
    .justify-space-between {
        justify-content: space-between;
    }
    .colorED0000 {
        color: #ED0000;
    }
</style>