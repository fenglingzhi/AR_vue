<template>
    <div class="checkout">
        <div class="head">
            <div class="checkoutHead">
        <!--<span class="fl">-->
            <!--<img src="../assets/img/support.png" width="25" alt="">-->
        <!--</span>-->
                <span class="fr">
            <span>شصيسضصثذبد</span>
            <img @click="goBack()" src="../assets/img/Path.png" width="20" alt="">
        </span>
            </div>
        </div>
        <div class="checkoutCon">
            <div class="shippingChose">
                <div class="choseAddress" v-for="item in  addressList">
                    <div class="lineColor"></div>
                    <div class="shippingWay" @click="choseShippingAddress(item.address_id)">
                        <div class="fr addressInformation">
                            <div  class="name"> {{item.name}} </div>
                            <div style="color: #999">{{item.country_code}}{{item.postcode}}</div>
                            <div style="color: #999">{{item.phone}}</div>
                            <div style="color: #999">{{item.country}} {{item.state}} {{item.city}} {{item.street}} {{item.address1}}{{item.address1}}</div>
                        </div>
                        <!--<div class="fl">-->
                            <!--<img class="checkImg" style="margin-top: 26px;" src="../assets/img/select.png" width="20" alt="">-->
                        <!--</div>-->
                        <div style="clear: both"></div>
                    </div>
                    <div class="addressEdi">
                        <span> تعديل </span>
                        <img @click="editAddress(item.address_id)" style="margin: 0 8px;" src="../assets/img/personal/adress_edit.png" width="20" alt="">
                    </div>
                </div>

                <!--<div class="choseAddress">-->
                    <!--<div class="lineColor"></div>-->
                    <!--<div class="shippingWay" >-->
                        <!--<div class="fr addressInformation">-->
                            <!--<div  class="name">  Ding Jie </div>-->
                            <!--<div style="color: #999">Jiaoyang zhang SA 541236984</div>-->
                            <!--<div style="color: #999">Flat 15</div>-->
                            <!--<div style="color: #999">victoria avenue Alrass AI-Qassim Saudi Arabia 999088 19</div>-->
                        <!--</div>-->
                        <!--&lt;!&ndash;<div class="fl">&ndash;&gt;-->
                            <!--&lt;!&ndash;<img class="checkImg" style="margin-top: 26px;" src="../assets/img/option.png" width="20" alt="">&ndash;&gt;-->
                        <!--&lt;!&ndash;</div>&ndash;&gt;-->
                        <!--<div style="clear: both"></div>-->
                    <!--</div>-->
                    <!--<div class="addressEdi">-->
                        <!--<span> تعديل </span>-->
                        <!--<img style="margin: 0 8px;" src="../assets/img/personal/adress_edit.png" width="20" alt="">-->
                    <!--</div>-->
                <!--</div>-->










            </div>

            <!--<div class="submitBut">-->
                <!--إضافة عنوان للشحن-->
            <!--</div>-->

        </div>

    </div>
</template>

<script>
    import { Dialog } from 'vant';
    import { Toast } from 'vant';
    // import router from "vue-router";
    import router from '../router/router'
    import axios from "axios";
    import $ from 'jquery'
    import store from '../store/store.js'


export default {
    data(){
      return{
          addressList:[]
      }
    },
   components: {
   },
   methods: {
        // 编辑地址
       editAddress(id){
           this.$router.push({
               name: 'personalAddAdres',
               params: {
                   id: id,
                   type:'edit'
               }
           })
       },
       goBack(){
           this.$router.go(-1)
       },
       // 物流地址获取
       getShippingAddress(){
           this.$post('/api/user_address/getAddresses',{id_cart:this.$store.state.id_cart,lang_id:this.$store.state.lang_id,action:'getAddresses'}).then(redata => {
                if(redata.code==200){
                    this.addressList = redata.data
                }else{
                    Toast({duration:'1000',message:redata.message})
                }

           })
       },

       // 物流地址选择
       choseShippingAddress(id_address_shipping){
           this.$post('/api/payment/setCartShippingAddress',{id_cart:this.$store.state.id_cart,id_address_shipping:id_address_shipping}).then(redata => {
               if(redata.code==200){
                   this.$router.push('/checkout')
               }else {
                   Toast({duration:'1000',message:redata.message})

               }
           })
       },

   },
  mounted() {
      this.getShippingAddress()

  }
};
</script>

<style scoped>
    .checkout .head{
        position: fixed;
        width: 100%;
        background: white;
        top: 0;
        z-index: 999;
    }
    .checkoutHead{
        height: 22px;
        /*width: 100%;*/
        padding: 14px;
        border-bottom: 1px solid #E7E7E7;
    }
    .fr{
        float: right;
    }
    .fl{
        float: left;
    }
    .checkoutHead span{
        display: inline-block;
        height: 30px;
        color: #000;
        font-weight: bold;
        font-size: 14px;
    }

    .checkoutCon{
        margin-top: 50px;
    }

    .addressInformation{
        width: 75%;
        direction: rtl;
        text-align: right;
        padding: 0 8px 0px 0px;
    }


    .shippingWay span{
        margin-right: 14px;
    }
    .payWay span{
        margin-right: 14px;

    }

    .lineColor{
        height: 15px;
        width: 100%;
        background: #F6F6F6;
        border-bottom: 1px solid #E7E7E7;
        margin-top: -2px;
    }


    .cde .fl{
        font-weight: bold;
    }

    .submitBut{
        font-family: Cairo-Bold;
        font-size: 14px;
        color: #FFFFFF;
        height: 45px;
        text-align: center;
        direction: rtl;
        width: 80%;
        line-height: 42px;
        margin: 34px auto;
        background: #333333;
    }
    .shippingWay{
        direction: rtl;
        border-bottom: 1px solid #E7E7E7;
        padding: 12px 16px;
    }
    .shippingWay span{
        margin-right: 14px;
    }
    .payWay span{
        margin-right: 14px;

    }
    .checkImg {
        float: left;
    }
    .checkImgAlert{
        float: left;
    }
    .name{
        font-size: 14px;
        color: #333333;
        font-weight: 600;
        line-height: 17px;
        margin: 4px 0px;
    }
    .addressEdi{
        border-bottom: 1px solid #E7E7E7;
        text-align: right;
        padding: 3px 13px 9px 150px;
    }

</style>

