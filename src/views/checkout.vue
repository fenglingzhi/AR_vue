<template>
    <div class="checkout">
        <div class="head">
            <div class="checkoutHead">
        <span class="fl">
            <img src="../assets/img/support.png" width="25" alt="">
        </span>
                <span class="fr">
            <span>شصيسضصثذبد</span>
            <img src="../assets/img/Path.png" width="20" alt="">
        </span>
            </div>
        </div>
        <div class="checkoutCon">
            <div class="choseAddress" @click="choseAddress()">
                <div class="fr addressInformation">
                    <div>Jiaoyang zhang SA 541236984</div>
                    <div>Flat 15</div>
                    <div>oria avenue Alrass AI-Qassim Saudi Arabia 999088 19</div>
                </div>
                <div class="fl">
                    <img class="choseMore" src="../assets/img/choseMore.png" width="12" alt="">
                </div>
            </div>
            <img src="../assets/img/colorLine.png" width="100%" alt="">
            <div class="payWays">
                 مخلا يتجزأ :
            </div>
            <div class="payWayChose">
                <div class="payWay" @click="chosePayWay(0)">
                    <img src="../assets/img/huodaofukuan.png" width="22" alt="">
                    <span>يبيليييب دصثق</span>
                    <img v-if="!canNotODC" class="checkImgAlert" src="../assets/img/alert.png" width="20" alt="">
                    <!--如果支持货到付款就注释上面一行,放开下面一行代码-->
                    <img v-if="canNotODC && payWayObj[0].option" class="checkImg" src="../assets/img/option.png" width="20" alt="">
                    <img v-if="canNotODC && payWayObj[0].select" class="checkImg" src="../assets/img/select.png" width="20" alt="">

                </div>
                <div class="payWay" @click="chosePayWay(1)">
                    <img src="../assets/img/bankCard.png" width="22" alt="">
                    <span>يبثذاذيليييب دصثق</span>
                    <img class="checkImg" v-if="payWayObj[1].select" src="../assets/img/select.png" width="20" alt="">
                    <img class="checkImg" v-if="payWayObj[1].option" src="../assets/img/option.png" width="20" alt="">

                </div>
                <div class="payWay" @click="chosePayWay(2)">
                    <img src="../assets/img/paypal.png" width="22" alt="">
                    <span>PayPal</span>
                    <!--<img src="../assets/img/wen.png" width="18" alt="">-->
                    <img class="checkImg" v-if="payWayObj[2].select" src="../assets/img/select.png" width="20" alt="">
                    <img class="checkImg" v-if="payWayObj[2].option" src="../assets/img/option.png" width="20" alt="">
                </div>
            </div>
            <div class="lineColor"></div>
            <div class="shippingChose">
                <div class="shippingWay" @click="choseShippingWay(index,item.carrier_id)" v-for="(item,index) in shippingWayObj" style="">
                    <div class="fr addressInformation">
                        <div style="color: black;margin: 10px 0;" >{{item.shipping_price}}</div>
                        <div style="color: #999"> {{item.name}} </div>
                    </div>
                    <div class="fl">
                        <img class="checkImg" v-if="shippingWayObj[index].select"  style="margin-top: 18px;" src="../assets/img/select.png" width="20" alt="">
                        <img class="checkImg" v-if="shippingWayObj[index].option"  style="margin-top: 18px;" src="../assets/img/option.png" width="20" alt="">
                    </div>
                </div>
            </div>
            <div class="code">
                <div class="codeShow">
                    <img class="fl downIco" src="../assets/img/down.png" width="16" alt="">
                    <span class="fl saveMoney"> S.R.18.0-</span>
                    <span class="fr"> غعورب دثيثق</span>
                    <div style="clear: both"></div>
                </div>
                <div class="writeCode">
                    <input class="codeInputs" @click="choseCoupon()"  type="text">
                    <div class="but">add</div>
                    <div style="clear: both"></div>
                </div>
            </div>
            <div class="lineColor"></div>
            <div class="checkoutDet">
                <div class="cde">
                    <span class="fl line-through">  S.R.15.00 </span>
                    <span class="fr">  ليييب دصثق </span>
                </div>
                <div class="cde">
                    <span class="fl">   S.R.12.00  </span>
                    <span class="fr">ليييب دبااصثق </span>
                </div>
                <div class="cde">
                    <span class="fl">   S.R.30.00 </span>
                    <span class="fr"> ليييبصثق  </span>
                </div>
                <div class="cde">
                    <span class="fl red">    S.R.1.80- </span>
                    <span class="fr"> ليييب   </span>
                </div>
                <div style="border-bottom: 1px solid #E7E7E7;    margin-top: 20px;"></div>
                <div class="cde">
                    <span class="fl">  S.R.55.20  </span>
                    <span class="fr"> دصثق  </span>
                </div>
            </div>
            <div v-show="!isPaypal" @click="clickSubmit()" class="submitBut">
                افحص الآن
            </div>
        </div>
        <div v-show="isPaypal" id="paypal-button"></div>
        <!--信用卡弹出层-->
        <div class="creditCardBg" v-show="showCreditCard">
                <div id="addCredit">
                    <form action="" method="" id="payment-form">
                        <div class="form-row">
                            <label for="card-element">
                                Credit
                            </label>
                            <div id="card-element">

                            </div>

                            <div id="card-errors" role="alert"></div>
                        </div>
                        <button class="submit">Pay</button>


                    </form>
                    <button class="submit" @click="creditCancel()" style="background: #d588fb">Cancel</button>
                    <div class="loading" v-if="isloading">
                        <van-loading color="#ff2a4f" />
                    </div>
                </div>
        </div>
        <!--COD弹出层-->
        <van-popup v-model="showCod"  :style="{ height: '50%',width:'100%',top:'40%' }">
            <h3>Cash on Delivery</h3>
            <hr>
            <div class="mbNub">
                <div class="phoneArea fr"> SA +966</div>
                <div class="phoneNum fr"><input type="text" placeholder="phone number" value="145878545478"></div>
                <div class="sand fr" v-if="!isShowCode" @click="sandCode()">إرسال</div>
                <div class="sand fr" v-if="isShowCode">{{sec}}s</div>
            </div>
            <div class="lineColor">يجب أن يتكون رقم الهاتف من تسعة أرقام وتبدأ ب5. </div>
            <input type="text" class="codeHere" placeholder="Please enter the code.">
            <div class="submitBut" style="margin: 0px auto;">submit</div>
        </van-popup>
        <!--优惠券弹出层-->
        <van-popup v-model="isCouponShow"  :style="{ height: '50%',width:'80%',top:'40%' }">
            <div style="height: 20px;"></div>
            <div class="couponList" v-for="item in couponList">
                <div class="couponCon">
                  <div class="couponName">{{item.name}}</div>
                  <div>{{item.reduction_display}}  </div>
                    <div>{{item.date_to}}  </div>
                </div>
            </div>

        </van-popup>
    </div>
</template>

<script>

    import { Dialog } from 'vant';
    import { Toast } from 'vant';
    import router from "vue-router";
    import axios from "axios";
    import $ from 'jquery'
    import store from '../store/store.js'
    import { Popup } from 'vant';
    // Vue.use(Popup)

export default {
    data(){
      return{
          couponList:[],
          isCouponShow:false,
          isShowCode:false,
          sec:60,
          isloading:false,
            showCreditCard:false,
            showCod:false,
            isCod:false,
            isCreditCard:true,
            isPaypal:false,
            canNotODC:true,
            payWayObj:[
                {
                    select:false,
                    option:true
                },
                {
                    select:true,
                    option:false
                },
                {
                    select:false,
                    option:true
                }
            ],
          shippingWayObj:[]
      }
    },
   components: {
   },
   methods: {
       // 选择优惠券
       choseCoupon(){
           this.isCouponShow=true
           this.$post('/api/user_identity/getCartRules').then(redata => {
               if(redata.code==200){
                   this.couponList = redata.data.usable
               }else {
                   Toast({duration:'1000',message:redata.message})
               }
           })

       },
        //发送验证码
       sandCode(){
           var vm=this
           vm.isShowCode = true
           var codeStar = setInterval(function () {
               if(vm.sec==0){
                   vm.isShowCode = false

                   clearInterval(codeStar)
               }else {
                   vm.sec = vm.sec-1
               }
           },1000)
       },
       // 关闭信用卡弹框
       creditCancel(){
           this.showCreditCard = false
       },
        //点击提交
       clickSubmit(){
            if(this.isCod==true){
                this.showCod=true
                this.showCreditCard=false
            }else if(this.isCreditCard==true){
                this.showCreditCard=true
                this.showCod=false

            }
       },
       // 支付方式选择
       chosePayWay(index){
           if(index==2){
               this.isPaypal = true
               this.isCod=false
               this.isCreditCard=false
           }else if(index==0){
               this.isPaypal = false
               this.isCod=true
               this.isCreditCard=false
           }else if(index == 1){
               this.isPaypal = false
               this.isCod=false
               this.isCreditCard=true
           }

           if(index==0 && this.canNotODC ){
               this.payWayObj.forEach(function (val) {
                   val.select=false
                   val.option=true
               })
               this.payWayObj[index].select=true
               this.payWayObj[index].option=false
           }else if(index==0 && !this.canNotODC){
               Toast({duration:'1000',message:'不支持COD'})
           }else {
               this.payWayObj.forEach(function (val) {
                   val.select=false
                   val.option=true
               })
               this.payWayObj[index].select=true
               this.payWayObj[index].option=false
           }
       },
       // 物流方式选择
       choseShippingWay(index,carrierId){
           this.$post('/api/payment/setCartCarrier',{id_cart:this.$store.state.id_cart,id_carrier:carrierId}).then(redata => {

           })
           this.shippingWayObj.forEach(function (val) {
                   val.select=false
                   val.option=true
               })
               this.shippingWayObj[index].select=true
               this.shippingWayObj[index].option=false
       },
       //获取物流列表
       getCartCarriers(){
           var vm = this
           this.$post('/api/payment/getCartCarriers',{id_cart:this.$store.state.id_cart}).then(redata => {
               if(redata.code==200){
                   redata.data.forEach(function (val,index) {
                       if(index==0){
                           val.select=true
                           val.option=false
                           vm.shippingWayObj.push(val)
                       }else {
                           val.select=false
                           val.option=true
                           vm.shippingWayObj.push(val)
                       }
                   })
               }else {
                   Toast({duration:'1000',message:redata.message})
               }
           })
       },
       //获取支付详情
       getCartDetail(){
           this.$post('/api/payment/getCartDetail',{id_cart:this.$store.state.id_cart,id_currency:this.$store.state.id_currency}).then(redata => {
               if(redata.code==200){

               }else {
                   Toast({duration:'1000',message:redata.message})
               }
           })
       },
       //选择地址
       choseAddress(){
           this.$router.push('/checkoutAddressChose')
       },
       // paypal支付页面
       paypal_pay(transaction_id,value,shipping,coupon,items,content_ids,contents,num_items){
           var access_token = this.$store.state.access_token;
           var id_cart = this.$store.state.id_cart;
           setTimeout(function () {
               var vm = this
               paypal.Button.render({
                   // env: 'sandbox', // Or 'production'
                   env: 'production', // Or 'sandbox'
                   // Set up the payment:
                   // 1. Add a payment callback
                   payment: function(data, actions) {
                       // 2. Make a request to your server

                       // alert( vm.$store.state.access_token)
                       return actions.request.post('https://newappapi.cupshe.com/modules/paypal/payment.php',{
                           action : 'createPayment',
                           id_cart :id_cart,
                           access_token : access_token
                       })
                           .then(function(res) {

                               // 3. Return res.id from the response
                               return res.id;
                           });
                   },
                   style: {
                       size: 'large',
                       color: 'blue',
                       shape: 'rect',
                       label: 'checkout',
                       tagline: 'false'
                   },
                   // Execute the payment:
                   // 1. Add an onAuthorize callback
                   onAuthorize: function(data, actions) {
                       // 2. Make a request to your server
                       return actions.request.post('https://newappapi.cupshe.com/modules/paypal/payment.php', {
                           paymentID: data.paymentID,
                           payerID:   data.payerID,
                           id_cart : id_cart,
                           action :'executePayment',
                           access_token :  access_token
                       })
                           .then(function(res) {
                               console.log(res);
                               if(res.code==200){
                                   gtag("event", "purchase", {
                                       "transaction_id": transaction_id,
                                       "affiliation": "cupshe",
                                       "value":value,
                                       "currency": "USD",
                                       "tax": "0",
                                       "shipping": shipping,
                                       "coupon": coupon,
                                       "items": items
                                   });
                                   store.commit('changeStore',{key:'id_cart',val:'0'});
                                   store.commit('changeStore',{key:'add_cart_num',val:0});
                                   localStorage.setItem('id_cart',0)
                                   localStorage.setItem('cart_quantity',0)
                                   Dialog.confirm({
                                       title: ' Thank you for your order!',
                                       message: ' Your payment has been successfully processed. Your package will be shipped out ASAP.',
                                       confirmButtonText:" Order Details",
                                       cancelButtonText:"Continue Shopping"
                                   }).then(() => {
                                       // on confirm
                                       router.push('/orderHistory')

                                   }).catch(() => {
                                       // on cancel
                                       router.push('/')

                                   });
                                   // vm.logPurchaseEvent(vm.product_ids,vm.product_nums,'pay success')
                                   // var params = {};
                                   // params[FB.AppEvents.ParameterNames.NUM_ITEMS] = product_nums;
                                   // params[FB.AppEvents.ParameterNames.CONTENT_ID] = product_ids;
                                   // params[FB.AppEvents.ParameterNames.CONTENT_TYPE] = 'pay success';
                                   // FB.AppEvents.logPurchase(purchaseAmount,'usd', params);
                                   fbq('track', 'Purchase',
                                       // begin required parameter object
                                       {
                                           currency: 'USD',
                                           content_ids: content_ids,
                                           content_category: 'checkout',
                                           contents:contents,
                                           num_items: num_items,
                                       }
                                       // end required parameter object
                                   );

                               }else if(res.code==80003){
                                   store.commit('changeStore',{key:'id_cart',val:'0'});
                                   store.commit('changeStore',{key:'add_cart_num',val:0});
                                   localStorage.setItem('id_cart',0)
                                   localStorage.setItem('cart_quantity',0)
                                   Dialog.confirm({
                                       title: ' Sorry, fail to pay!',
                                       message: ' If you want to proceed your payment, please go to \'order history\' section to complete your purchase.',
                                       confirmButtonText:" Order Details",
                                       cancelButtonText:"Continue Shopping"
                                   }).then(() => {
                                       // on confirm
                                       router.push('/orderHistory')
                                   }).catch(() => {
                                       router.push('/')
                                       // on cancel
                                   });
                               }else{
                                   Dialog.alert({
                                       message: res.message
                                   }).then(() => {
                                       // on close
                                   });
                               }
                               // 3. Show the buyer a confirmation message.
                           });
                   }
               }, '#paypal-button');

           },1000)
       },
       //strip支付
       strip(){
           let vm = this;
           // Create a Stripe client.
           // var stripe = Stripe('pk_test_acn6UjYLPpHy9hqbZD4UYulr');
           var stripe = Stripe('pk_live_GuZobfbVMuFlXknW6OVdgMjw');
           // Create an instance of Elements.
           var elements = stripe.elements();
           // Custom styling can be passed to options when creating an Element.
           // (Note that this demo uses a wider set of styles than the guide below.)
           var style = {
               base: {
                   color: '#32325d',
                   lineHeight: '18px',
                   fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                   fontSmoothing: 'antialiased',
                   fontSize: '14px',
                   '::placeholder': {
                       color: '#aab7c4'
                   }
               },
               invalid: {
                   color: '#fa755a',
                   iconColor: '#fa755a'
               }
           };

           // Create an instance of the card Element.
           var card = elements.create('card', {style: style});
           // Add an instance of the card Element into the `card-element` <div>.
           card.mount('#card-element');

           // Handle real-time validation errors from the card Element.
           card.addEventListener('change', function(event) {
               var displayError = document.getElementById('card-errors');
               if (event.error) {
                   displayError.textContent = event.error.message;
               } else {
                   displayError.textContent = '';
               }
           });

           // Handle form submission.
           var form = document.getElementById('payment-form');
           form.addEventListener('submit', function(event) {
               event.preventDefault();
               // vm.isloading = true;
               stripe.createToken(card).then(function(result) {
                   if (result.error) {
                       // Inform the user if there was an error.
                       var errorElement = document.getElementById('card-errors');
                       errorElement.textContent = result.error.message;
                   } else {
                       // Send the token to your server.
                       // $.ajax({
                       //     type: "post",
                       //     url: vm.$store.state.ipConfig+"/api/bcard.php",
                       //     data:{
                       //         action:'addCard',
                       //         access_token:vm.$store.state.access_token,
                       //         stripe_token:result.token.id
                       //     },
                       //     dataType: "json",
                       //     success: function(data){
                       //         if(data.code === 200){
                       //             vm.isloading = false;
                       //             // vm.$router.push('/creditCart')
                       //             vm.$router.back(-1)
                       //             console.log(data)
                       //         } else {
                       //             //Facebook 追踪代码
                       //             // vm.logAddedPaymentInfoEvent(0)
                       //         }
                       //     }
                       // });
                   }
               });
           });
       },


   },
  mounted() {

        this.getCartCarriers()
        this.getCartDetail()
        this.paypal_pay()
        this.strip()
      // 点击显示输入折扣券
      $(".codeShow").click(function () {
          $(".downIco").toggleClass("add_transform")
          $(".writeCode").slideToggle()
      })

      // 弹窗取消按钮
      $(".Popup_buttons_item_cancel").click(function(){
          $(".alertTipBg ").css("display","none")
      })
  }
};
</script>
<style  scoped>
    .couponList{
        width: 80%;
        margin: 18px auto;
        height: 74px;
        -webkit-box-shadow: 0px 0px 2px 0px;
        box-shadow: 0px 0px 2px 0px;
    }
    .couponName{
        color: red;
        font-weight: bold;
        padding: 6px 0 2px 0px;
    }


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
        text-align: right;
    }
    .choseAddress{
        padding: 16px;
        height: 53px;
    }
    .addressInformation{
        width: 90%;
        direction: rtl;
    }
    .choseMore{
        margin-top: 18px;
    }
    .payWays{
        direction: rtl;
        height:8px;
        /*width: 100%;*/
        background: #F6F6F6 ;
        border-bottom: 1px solid #E7E7E7;
        margin-top: -5px;
        color: #999999 ;
        padding: 16px;
    }



    .payWay{
        direction: rtl;
        border-bottom: 1px solid #E7E7E7;
        height: 30px;
        padding: 12px 16px;
    }
    .shippingWay{
        direction: rtl;
        border-bottom: 1px solid #E7E7E7;
        height: 50px;
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
    .lineColor{
        height: 15px;
        width: 100%;
        background: #F6F6F6;
        border-bottom: 1px solid #E7E7E7;
    }
    .code{
        direction: rtl;
        /*border-bottom: 1px solid #E7E7E7;*/

    }
    .codeShow{
        padding: 12px 16px;

    }
    .codeInputs{
        float: right;
        outline: none;
        border: none;
        background: #D6D6D6;
        border-radius: 4px;
        height: 30px;
        width: 75%;
        text-indent: 10px;
    }
    .but{
        float: right;
        height: 30px;
        width: 20%;
        background: #333333;
        color: white;
        text-align: center;
        line-height: 30px;
        margin-right: 4%;

    }
    .writeCode{
        padding: 16px 16px 0px 16px;
        background: #F6F6F6;
        display: none;

    }
    .saveMoney{
        margin-left: 10px;
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


    .cde{
        /*width: 100%;*/
        height: 4px;
        padding: 15px 16px;
    }
    .cde .fl{
        font-weight: bold;
    }
    .line-through{
        text-decoration: line-through;
    }
    .red{
        color: #D70000;
    }
    .submitBut{
        font-family: Cairo-Bold;
        font-size: 14px;
        color: #FFFFFF;
        height: 45px;
        text-align: center;
        direction: rtl;
        width: 68%;
        line-height: 42px;
        margin: 34px auto;
        background: #333333;
    }

    #paypal-button{
        margin: 42px auto;
    }



    .alertTipBg{
        position: fixed;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.3);
        top: 0px;
        z-index: 99999;
    }
    .alertTip{
        width: 230px;
        top: 30%;
        position: fixed;
        left: 50%;
        margin: -76px -115px;
        background: white;
    }
    .tipText{
        padding: 26px 18px;
        color: #333333;
        font-family: Cairo-Regular;
    }
    .alertButs{
        text-align: center;
        direction: rtl;
        color: white;
        padding: 10px;
        background: #333333;
    }
    #addCredit{
        padding: 10px;
        background: #f5f5f5;
        text-align: left;
        height: 230px;
        margin-top: 136px;
    }
    label{
        font-size: 12px;
        color: #999;
    }
    .StripeElement {
        background-color: white;
        padding: 10px 12px;
        border-radius: 4px;
        border: 1px solid transparent;
        box-shadow: 0 1px 3px 0 #e6ebf1;
        -webkit-transition: box-shadow 150ms ease;
        transition: box-shadow 150ms ease;
        margin: 10px 0;
    }

    .StripeElement--focus {
        box-shadow: 0 1px 3px 0 #cfd7df;
    }

    .StripeElement--invalid {
        border-color: #fa755a;
    }

    .StripeElement--webkit-autofill {
        background-color: #fefde5 !important;
    }
    .credit_wrap{
        background: pink;
        padding: 10px;
        text-align: left;
    .title{
        color: #fff;
        font-size: 12px;
        margin-top: 10px;
        margin-bottom: 4px;
    }
    input{
        width: 100%;
        border: none;
        outline: none;
        height: 30px;
        font-size: 12px;
        text-indent: 10px;
    }
    .set_default{
        overflow: auto;
        font-size: 12px;
        text-align: right;
        margin-top: 10px;
    }
    }
    .submit{
        padding: 10px;
        width: 100%;
        outline: none;
        border: none;
        background: #ff2a4f;
        color: #fff;
        margin-top: 25px;
    }
    .loading{
        position: absolute;
        left: 50%;
        top: 50%;
        /*background: rgba(0,0,0,0.5);*/
    }


    .creditCardBg{
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.7);
        position: fixed;
        top: 50px;
    }




    .mbNub{
        height: 26px;
        width: 90%;
        text-align: right;
        margin: 20px auto;
    }
    .phoneArea{
        color: #999;
        border-left: 1px solid #999;
        padding: 0 6px;
        margin-left: 10px;
    }
    .phoneNum input{
        width: 100%;
        outline: none;
        border: none;
    }
    .phoneNum{
        width: 110px;
    }
    .timeShow{
        display:none;
        color:#999
    }
    .sand{
        color: #999;
        margin: 3px 14px;
    }
    .codeWrite{
        text-align: center;
        color: #999;
        padding: 16px;
    }
    .codeInput{
        text-align: center;
        width: 35px;
        margin: 8px 3px;
        height: 34px;
        border: 1px solid #999;
        float: right;
        line-height: 33px;

    }
    .codeHere{
        direction: rtl;
        text-indent: 10px;
        margin: 27px 0;
        border: none;
        border-bottom: 1px solid #ada5a5;
    }
    .tips{
        padding: 41px;
        direction: rtl;
        width: 100%;
        height: 9999999px;
        background: #F6F6F6;
        color: #999;
    }
    .codeInputed{
        text-align: center;
        width: 35px;
        margin: 8px 3px;
        height: 34px;
        border: 1px solid #a6c32f;
        float: right;
        line-height: 33px;
    }
    .codeInputHid{
        opacity: 0;
        width: 0;
        height: 0;
        position: absolute;
    }


</style>
