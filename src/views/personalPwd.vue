<template>
  <div>
     <header class="dis_flex">
        <span></span>
        <!-- 更改密码 -->
        <span class="header_titile">تغيير كلمة المرور</span>
        <span><img src="@/assets/img/personal/adress_return.png" alt="" class="header_return_img" @click="back()"></span>
    </header>
    <div class="password_content">
         <div class="password_container">
            <div class="password_item" style="border:none;background:#F6F6F6;">
                <span class="fontSize12 color999">ط.تيمنتمنتززذمنرنرستدم Kulayom.com</span>
            </div>
            <div class="password_item">
                <!-- 旧密码 -->
                <span class="fontSize12 color999">كلمة المرور القديمة:</span>
                <div class="password_item_input">
                    <input type="password" v-model="oldPwd">
                </div>
            </div>
            <div class="password_item" style="border:none;">
                <!-- 新密码 -->
                <span class="fontSize12 color999">كلمة المرور الجديدة:</span>
                <div class="password_item_input">
                    <input type="password" v-model="newPwd">
                </div>
            </div>
            <div class="password_item password_item_tips" style="border:none;background:#F6F6F6;">
               <p>بطاقة يمنكنتكترببيصثدهدية</p> 
               <!-- 最少8个字符 -->
               <p>· 8 رموز كحد أدنى</p>
               <!-- 最少1个字母 -->
               <p>· حرف واحد على الأقل</p>
               <!-- 最少1个数字 -->
               <p>· رقم واحد على الأقل</p>
            </div>
            <div class="password_item" style="border:none;">
                <!-- 确认密码 -->
                <span class="fontSize12 color999">تأكيد كلمة المرور:</span>
                <div class="password_item_input">
                    <input type="password" v-model="secNewPwd" @blur="secNewpwd()">
                </div>
            </div>
         </div>
    </div>
    <div class="adress_addContainer">
        <div class="adress_addButton" @click="changePwd()">
            <!-- 提交 -->
            <span>إرسال</span>
        </div>
    </div>
  </div>
</template>

<script>

import * as api from "../api/commonApi";
import router from "vue-router";
import { Dialog, Swipe, SwipeItem, CountDown, List,Toast } from 'vant';
import axios from "axios";
import store from '../store/store.js'

export default {
  data() {
    return {
      oldPwd:'',
      newPwd:'',
      secNewPwd:''
    }
  },
  components: {
      Swipe,
      Dialog,
      SwipeItem,
      router,
      CountDown,
      Toast
  },
  methods: {
    secNewpwd(){
      if(this.secNewPwd != this.newPwd){
        Toast.fail("请确认两次密码相同！")
      }
    },
    changePwd(){
      if (this.oldPwd == '') {
          Toast.fail("旧密码不能为空")
          return;
      }
      if (this.newPwd == '') {
          Toast.fail("新密码不能为空")
          return;
      }
      if (this.secNewPwd == '') {
          Toast.fail("再次输入密码不能为空")
          return;
      }
      var data = {...this.$store.state.defaultData};
      data.action = 'changePasswd';
      data.old_passwd = this.oldPwd
      data.new_passwd = this.newPwd
      data.con_passwd = this.secNewPwd
      this.$post('/api/user_identity/changePasswd',data).then(data => {
        console.log("修改密码",data)
        if(data.code == 200){
          Toast.success(data.message)
        }
      }).catch(error => {
        console.log(error);
      });

    },
    back(){
      this.$router.go(-1);//返回上一层
    },

  },
}
</script>

<style lang="scss" scoped>
header{
      display:flex;
      position: fixed;
      width:100%;
      background: #fff;
      top: 0;
      z-index: 999;
      border-bottom: 1px solid #D8D8D8;
      line-height: 44px;
      padding: 0 18px;
      box-sizing: border-box;
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

  .password_content{
      margin-top:45px;
      margin-bottom:80px;
      text-align: right;
  }
  .password_container{
      margin-top:10px;
      background-color: #fff;
  }
  .password_item{
      direction:rtl;
      flex-direction: row;
      justify-content: space-between;
      line-height: 32px;
      padding: 8px 20px;
      border-bottom: 1px solid #D8D8D8;
  }
  .password_item_input input{
      width:100%;
      border:none;
  }
  .password_item_input>input:focus{
      outline: 0
  }
  .password_item_tips{
      font-size: 12px;
      color: #999999;
      line-height: 23px;
  }
  .password_item_tips p{
      margin:0;
  }


  .adress_addContainer{
      padding: 0 15px ;
      position: fixed;
      width:100%;
      padding-bottom:26px;
      bottom:0;
      box-sizing: border-box;
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
</style>

