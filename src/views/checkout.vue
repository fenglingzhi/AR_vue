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
            <div class="choseAddress">
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
                    <img src="../assets/img/wen.png" width="18" alt="">
                    <img class="checkImg" v-if="payWayObj[2].select" src="../assets/img/select.png" width="20" alt="">
                    <img class="checkImg" v-if="payWayObj[2].option" src="../assets/img/option.png" width="20" alt="">

                </div>
            </div>
            <div class="lineColor"></div>
            <div class="shippingChose">
                <div class="shippingWay" @click="choseShippingWay(0)" style="">
                    <div class="fr addressInformation">
                        <div style="color: black">يبثذاذيليييب  S.R.30.00 </div>
                        <div style="color: #999">سيسيشثسيسيشثسيسيشث</div>
                        <div style="color: #999">ضبلاذيليثذبد لابيسد</div>
                    </div>
                    <div class="fl">
                        <img class="checkImg" v-if="shippingWayObj[0].select"  style="margin-top: 26px;" src="../assets/img/select.png" width="20" alt="">
                        <img class="checkImg" v-if="shippingWayObj[0].option"  style="margin-top: 26px;" src="../assets/img/option.png" width="20" alt="">

                    </div>
                </div>
                <div class="shippingWay" @click="choseShippingWay(1)"  style="">
                    <div class="fr addressInformation">
                        <div style="color: black">يبثذاذيليييب  S.R.30.00 </div>
                        <div style="color: #999">سيسيشثسيسيشثسيسيشث</div>
                        <div style="color: #999">ضبلاذيليثذبد لابيسد</div>
                    </div>
                    <div class="fl">
                        <img class="checkImg" v-if="shippingWayObj[1].select"  style="margin-top: 26px;" src="../assets/img/select.png" width="20" alt="">
                        <img class="checkImg" v-if="shippingWayObj[1].option"  style="margin-top: 26px;" src="../assets/img/option.png" width="20" alt="">

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
                    <input class="codeInput" type="text">
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
            <div class="submitBut">
                افحص الآن
            </div>

        </div>

    </div>
</template>

<script>
    import { Dialog } from 'vant';
    import { Toast } from 'vant';
    import router from "vue-router";
    import axios from "axios";
    import $ from 'jquery'


export default {
    data(){
      return{
            canNotODC:false,
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
          shippingWayObj:[
              {
                  select:true,
                  option:false
              },
              {
                  select:false,
                  option:true
              }
          ]
      }
    },
   components: {
   },
   methods: {
       // 支付方式选择
       chosePayWay(index){
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
       choseShippingWay(index){
               this.shippingWayObj.forEach(function (val) {
                   val.select=false
                   val.option=true
               })
               this.shippingWayObj[index].select=true
               this.shippingWayObj[index].option=false

       }

  },
  mounted() {
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
    .codeInput{
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
        width: 80%;
        line-height: 42px;
        margin: 34px auto;
        background: #333333;
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

</style>
